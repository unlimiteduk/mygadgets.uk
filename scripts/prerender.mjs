import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, allIndexableRoutes, allPrerenderRoutes, SITE } = await import(
  pathToFileURL(ssrEntry).href
);

function esc(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function headHtml(head) {
  const json = head.jsonLd.replace(/</g, "\\u003c");
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<link rel="canonical" href="${esc(head.canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    `<meta property="og:url" content="${esc(head.canonical)}" />`,
    `<meta property="og:image" content="${SITE.domain}/images/storefront.webp" />`,
    `<meta property="og:image:alt" content="My Gadgets Whitton on Whitton High Street" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(head.title)}" />`,
    `<meta name="twitter:description" content="${esc(head.description)}" />`,
    `<meta name="twitter:image" content="${SITE.domain}/images/storefront.webp" />`,
  ];
  if (head.robots)
    tags.push(`<meta name="robots" content="${esc(head.robots)}" />`);
  tags.push(
    `<script type="application/ld+json" id="jsonld-page">${json}</script>`,
  );
  return tags.join("\n    ");
}

let template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
template = template
  .replace(/<title\b[^>]*>[\s\S]*?<\/title>\s*/gi, "")
  .replace(/<meta\b[^>]*name=["']description["'][^>]*>\s*/gi, "");

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Built index.html is missing <div id="root"></div>');
}

function pageHtml(result) {
  return template
    .replace("</head>", `    ${headHtml(result.head)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${result.html}</div>`);
}

function outFile(route, status) {
  if (status === 404) return path.join(dist, "404.html");
  if (route === "/") return path.join(dist, "index.html");
  const rel = route.replace(/^\//, "").replace(/\/$/, "");
  return path.join(dist, rel, "index.html");
}

function assertPage(route, html) {
  if (!html.includes("<title>")) throw new Error(`${route} is missing a title`);
  if (!html.includes('name="description"'))
    throw new Error(`${route} is missing a meta description`);
  if (!html.includes('rel="canonical"'))
    throw new Error(`${route} is missing a canonical`);
  if (!html.includes("https://www.mygadgets.uk"))
    throw new Error(`${route} canonical is not on www.mygadgets.uk`);
  if (
    html.includes("https://www.mygadgetsuk.co.uk") ||
    html.includes("http://mygadgetsuk.co.uk")
  ) {
    throw new Error(`${route} still points at mygadgetsuk.co.uk`);
  }
  const h1s = html.match(/<h1\b/g) ?? [];
  if (h1s.length !== 1)
    throw new Error(`${route} has ${h1s.length} <h1> elements`);
}

const routes = allPrerenderRoutes();
for (const route of routes) {
  const result = await render(route);
  if (result.status !== 200)
    throw new Error(`${route} prerendered with status ${result.status}`);
  if (!result.head.canonical.startsWith(`${SITE.domain}/`)) {
    throw new Error(`${route} canonical ${result.head.canonical}`);
  }
  const html = pageHtml(result);
  assertPage(route, html);
  const file = outFile(route, 200);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const bookingBase = await render('/book/');
for (const device of ['laptop', 'macbook', 'invalid-device']) {
  const prefilled = await render(`/book/?device=${device}`);
  if (prefilled.html !== bookingBase.html) throw new Error(`Booking query ${device} changes the static hydration markup`);
}

const missing = await render("/this-page-does-not-exist/");
if (missing.status !== 404)
  throw new Error(`Unknown URL status was ${missing.status}, expected 404`);
if (missing.head.robots !== "noindex")
  throw new Error("404 page is missing noindex");
const notFoundHtml = pageHtml(missing);
assertPage("/404/", notFoundHtml);
fs.writeFileSync(path.join(dist, "404.html"), notFoundHtml);

// Omit lastmod until per-page update dates are tracked. Rebuild dates are not
// content modification dates, and Google ignores priority/changefreq values.
const body = allIndexableRoutes()
  .map(
    (route) =>
      `  <url><loc>${esc(route === "/" ? `${SITE.domain}/` : `${SITE.domain}${route}`)}</loc></url>`,
  )
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE.domain}/sitemap.xml\n`,
);

const home = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const expectedTitle = "MacBook, Laptop &amp; Phone Repair Whitton | My Gadgets";
if (!home.includes(`<title>${expectedTitle}</title>`)) {
  const found = home.match(/<title>[\s\S]*?<\/title>/)?.[0];
  throw new Error(`Homepage title mismatch: ${found}`);
}
if (
  !home.includes('id="home-title"') ||
  !home.includes("Back to life.") ||
  !home.includes("Back to you.")
) {
  throw new Error("Homepage H1 text is missing from the raw HTML");
}
const description =
  home.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
const decoded = description.replace(/&amp;/g, "&");
if (decoded.length < 150 || decoded.length > 160) {
  throw new Error(
    `Homepage meta description is ${decoded.length} characters: ${decoded}`,
  );
}

console.log(`Prerendered ${routes.length} routes to ${dist}, plus 404.html`);
console.log(`Sitemap: ${SITE.domain}/sitemap.xml`);
