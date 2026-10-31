import { AREAS } from './data/areas';
import { BLOG_POSTS } from './data/blog';
import { LISTINGS, SHOP_CATEGORIES } from './data/listings';
import { MODELS } from './data/models';
import { DEVICE_HUBS, SERVICES } from './data/services';

const STATIC_ROUTES = [
  '/',
  '/repairs/',
  '/repairs/prices/',
  '/shop/',
  '/sell-your-device/',
  '/business/',
  '/warranty/',
  '/about/',
  '/reviews/',
  '/contact/',
  '/book/',
  '/track/',
  '/blog/',
];

/** Every URL that should exist as its own HTML file and sitemap entry. */
export function allIndexableRoutes(): string[] {
  const routes = [
    ...STATIC_ROUTES,
    ...DEVICE_HUBS.map((d) => `/repairs/${d.slug}/`),
    ...SERVICES.map((s) => `/repairs/${s.slug}/`),
    ...MODELS.map((m) => `/repairs/models/${m.slug}/`),
    ...SHOP_CATEGORIES.map((c) => `/shop/${c.slug}/`),
    ...LISTINGS.map((l) => `/shop/${l.slug}/`),
    ...AREAS.map((a) => `/areas/${a.slug}/`),
    ...BLOG_POSTS.map((p) => `/blog/${p.slug}/`),
  ];
  const seen = new Set<string>();
  const dupes: string[] = [];
  for (const route of routes) {
    if (seen.has(route)) dupes.push(route);
    seen.add(route);
  }
  if (dupes.length) {
    throw new Error(`Duplicate routes: ${dupes.join(', ')}`);
  }
  return routes;
}
