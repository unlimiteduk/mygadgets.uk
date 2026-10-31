import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, allIndexableRoutes, SITE } = await import(pathToFileURL(ssrEntry).href);

function esc(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function headHtml(head) {
  const json = head.jsonLd.replace(/</g, '\\u003c');
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<link rel="canonical" href="${esc(head.canonical)}" />`,
  ];
  if (head.robots) tags.push(`<meta name="robots" content="${esc(head.robots)}" />`);
  tags.push(`<script type="application/ld+json" id="jsonld-page">${json}</script>`);
  return tags.join('\n    ');
}

let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
template = template
  .replace(/<title\b[^>]*>[\s\S]*?<\/title>\s*/gi, '')
  .replace(/<meta\b[^>]*name=["']description["'][^>]*>\s*/gi, '');

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Built index.html is missing <div id="root"></div>');
}

function pageHtml(result) {
  return template
    .replace('</head>', `    ${headHtml(result.head)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${result.html}</div>`);
}

function outFile(route, status) {
  if (status === 404) return path.join(dist, '404.html');
  if (route === '/') return path.join(dist, 'index.html');
  const rel = route.replace(/^\//, '').replace(/\/$/, '');
  return path.join(dist, rel, 'index.html');
}

function assertPage(route, html) {
  if (!html.includes('<title>')) throw new Error(`${route} is missing a title`);
  if (!html.includes('name="description"')) throw new Error(`${route} is missing a meta description`);
  if (!html.includes('rel="canonical"')) throw new Error(`${route} is missing a canonical`);
  if (!html.includes('https://www.mygadgets.uk')) throw new Error(`${route} canonical is not on www.mygadgets.uk`);
  if (html.includes('https://www.mygadgetsuk.co.uk') || html.includes('http://mygadgetsuk.co.uk')) {
    throw new Error(`${route} still points at mygadgetsuk.co.uk`);
  }
  const h1s = html.match(/<h1\b/g) ?? [];
  if (h1s.length !== 1) throw new Error(`${route} has ${h1s.length} <h1> elements`);
}

const routes = allIndexableRoutes();
for (const route of routes) {
  const result = render(route);
  if (result.status !== 200) throw new Error(`${route} prerendered with status ${result.status}`);
  if (!result.head.canonical.startsWith(`${SITE.domain}/`)) {
    throw new Error(`${route} canonical ${result.head.canonical}`);
  }
  const html = pageHtml(result);
  assertPage(route, html);
  const file = outFile(route, 200);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const missing = render('/this-page-does-not-exist/');
if (missing.status !== 404) throw new Error(`Unknown URL status was ${missing.status}, expected 404`);
if (missing.head.robots !== 'noindex') throw new Error('404 page is missing noindex');
const notFoundHtml = pageHtml(missing);
assertPage('/404/', notFoundHtml);
fs.writeFileSync(path.join(dist, '404.html'), notFoundHtml);

const today = new Date().toISOString().slice(0, 10);
function priority(route) {
  if (route === '/') return '1.0';
  if (route.startsWith('/repairs/')) return '0.8';
  if (route.startsWith('/areas/')) return '0.7';
  if (route.startsWith('/shop/')) return '0.6';
  return '0.5';
}
const body = routes
  .map((route) => {
    const loc = route === '/' ? `${SITE.domain}/` : `${SITE.domain}${route}`;
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${priority(route)}</priority></url>`;
  })
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.domain}/sitemap.xml\n`);

const home = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const expectedTitle = 'MacBook &amp; Laptop Repair Whitton, Twickenham | My Gadgets Whitton';
if (!home.includes(`<title>${expectedTitle}</title>`)) {
  const found = home.match(/<title>[\s\S]*?<\/title>/)?.[0];
  throw new Error(`Homepage title mismatch: ${found}`);
}
if (!home.includes('MacBook, Laptop &amp; Console Repair in Whitton, Twickenham')) {
  throw new Error('Homepage H1 text is missing from the raw HTML');
}
const description = home.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
const decoded = description.replace(/&amp;/g, '&');
if (decoded.length < 150 || decoded.length > 160) {
  throw new Error(`Homepage meta description is ${decoded.length} characters: ${decoded}`);
}

console.log(`Prerendered ${routes.length} routes to ${dist}, plus 404.html`);
console.log(`Sitemap: ${SITE.domain}/sitemap.xml`);
