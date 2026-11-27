import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
const root = path.resolve("dist");
const origin = "https://www.mygadgets.uk";
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith(".html")) files.push(file);
  }
}
walk(root);
const titles = new Map(),
  descriptions = new Map(),
  pages = new Map();
const decode = (s) =>
  s
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'");
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  const route =
    relative === "index.html"
      ? "/"
      : relative === "404.html"
        ? "/404/"
        : `/${relative.replace(/index\.html$/, "")}`;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const description = decode(
    html.match(/<meta name="description" content="([^"]+)"/)?.[1] ?? "",
  );
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? "";
  assert.equal(canonical, origin + route, `${route}: canonical`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: H1 count`);
  assert.ok(title && description, `${route}: missing search text`);
  assert.ok(
    !html.includes("<!--$!-->") && !html.includes("Loading the repair page…"),
    `${route}: incomplete server rendering`,
  );
  for (const [name, content] of [
    ["og:title", title],
    ["og:description", description],
    ["og:url", origin + route],
    ["twitter:title", title],
  ]) {
    const tag = [...html.matchAll(/<meta\b[^>]+>/g)]
      .map((m) => m[0])
      .find((tag) => tag.includes(`="${name}"`));
    assert.ok(
      tag && decode(tag.match(/content="([^"]*)"/)?.[1] ?? "") === content,
      `${route}: ${name}`,
    );
  }
  const graphs = [
    ...html.matchAll(
      /<script type="application\/ld\+json" id="jsonld-page">([\s\S]*?)<\/script>/g,
    ),
  ];
  assert.equal(graphs.length, 1, `${route}: JSON-LD count`);
  const graph = JSON.parse(graphs[0][1])["@graph"];
  const business = graph.find((item) => item["@id"] === origin + "/#business");
  assert.equal(business.name, "My Gadgets Whitton", `${route}: business name`);
  assert.equal(business.address.postalCode, "TW2 7LB", `${route}: postcode`);
  assert.equal(business.telephone, "+44 20 8847 4747", `${route}: phone`);
  assert.ok(!business.aggregateRating, `${route}: self-serving review markup`);
  if (relative !== "404.html") {
    assert.ok(!titles.has(title), `Duplicate title: ${title}`);
    titles.set(title, route);
    assert.ok(
      !descriptions.has(description),
      `Duplicate description: ${description}`,
    );
    descriptions.set(description, route);
  }
  for (const item of graph) {
    if (item['@type'] === 'Service') {
      for (const channel of item.availableChannel ?? []) {
        if (channel.servicePhone) assert.equal(channel.servicePhone['@type'], 'ContactPoint', `${route}: service phone type`);
      }
    }
  }
  pages.set(route, { file, html, robots });
}
let links = 0;
for (const [route, { html }] of pages) {
  for (const match of html.matchAll(
    /<(a|img|script|link)\b[^>]*?\b(href|src)="([^"]+)"[^>]*>/g,
  )) {
    const [tag, name, , raw] = match; // raw captures the URL; the whole tag remains available.
    const ref = decode(raw);
    if (!ref || /^(mailto:|tel:|data:)/.test(ref)) continue;
    const url = new URL(ref, origin + route);
    if (url.origin !== origin) continue;
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (name === "a" || url.pathname.endsWith("/"))
      target = path.join(target, "index.html");
    if (url.pathname === "/404/")
      target = path.join(root, "404.html");
    assert.ok(fs.existsSync(target), `${route}: broken ${name} ${ref}`);
    if (name === "a" && url.hash) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(
        fs.readFileSync(target, "utf8").includes(`id="${id}"`),
        `${route}: missing fragment ${ref}`,
      );
    }
    if (name === "img")
      assert.ok(/\balt="/.test(tag), `${route}: image needs alt text`);
    links++;
  }
}
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  decode(m[1]),
);
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");
for (const url of urls) {
  const route = new URL(url).pathname;
  assert.ok(pages.has(route), `Unknown sitemap page ${route}`);
  assert.ok(
    !pages.get(route).robots.includes("noindex"),
    `Noindex page in sitemap: ${route}`,
  );
}
for (const [route, page] of pages) {
  if (!page.robots.includes("noindex"))
    assert.ok(urls.includes(origin + route), `Missing sitemap page ${route}`);
}
assert.ok(pages.get("/track/").robots.includes("noindex"));
assert.ok(pages.get("/404/").robots.includes("noindex"));
assert.ok(
  !sitemap.includes("<lastmod>"),
  "Do not use build time as the content modification date",
);
console.log(
  `PASS: ${pages.size} HTML pages, ${urls.length} indexable sitemap URLs and ${links} internal links/assets.`,
);
console.log(
  "PASS: unique titles/descriptions, canonicals, H1s, metadata, JSON-LD, fragments and noindex exclusions.",
);
