# My Gadgets Whitton

React, TypeScript and Vite website for the repair shop at **23 High Street, Whitton, Twickenham TW2 7LB**. The canonical production origin is `https://www.mygadgets.uk`.

## Develop and verify

Use Node.js supported by Vite 7 (20.19+ or 22.12+) and install the existing lockfile with `npm ci`.

```sh
npm run dev
npm run build
npm test
npm run check:site
npm run preview
```

The build renders 118 routes into HTML before deployment, including lazy-loaded page content. Search engines and visitors receive the page heading, copy, links, canonical URL, metadata and JSON-LD without waiting for client rendering. There is a separate noindex 404 page. The sitemap contains 117 indexable URLs; repair status is a noindex customer utility.

`check:site` validates every generated HTML page, internal link and local asset, fragment targets, unique titles and descriptions, H1s, canonical URLs, social metadata, JSON-LD and sitemap exclusions. Unit tests cover range-price parsing and quote-only repair estimates.

## Business information and content

- `src/data/site.ts`: business identity, public phone numbers, Google profile/review links and opening hours. Verified against the connected Google Business Profile on 27 November 2026.
- `src/data/reviews.ts`: manually checked Google summary and selected review quotes. This is **not a live review feed**. Update the count, displayed rating and check date together after checking Google.
- `src/data/services.ts`, `extra-repairs.ts`, `console-faults.ts`, `models.ts`: repair information and advertised starting prices. The owner must confirm current prices, parts, warranty terms and turnaround claims before publication.
- `src/data/listings.ts`: manually maintained stock. Confirm availability, exact specifications and images before advertising a particular unit. Existing product images may be illustrative stand-ins; obtain actual-unit photographs.
- `src/data/areas.ts`: information for customers visiting one Whitton shop. Do not invent branches, customer jobs, travel times, rankings or testimonials.

## Customer enquiries

Repair requests are prepared locally and sent by the visitor through WhatsApp. Contact forms prepare WhatsApp/email messages. There is no booking backend or live job database. The status page directs customers to the shop instead of returning fabricated records. Pickup is a request subject to confirmation.

No analytics provider is installed. The inactive analytics-consent banner is not displayed. Add any future measurement and consent behavior deliberately, with accurate visitor-facing information. Do not claim conversions are being measured before instrumentation is present.

## SEO and deployment

Page components use `Seo` for route-specific metadata. The server renderer waits for lazy routes before writing complete static HTML. Canonicals use the production origin, and `vercel.json` retains the existing domain redirects. Vercel deploys the repository; the existing PR preview is protected by Vercel authentication. Publishing the rebuild to `main` requires the owner's explicit approval.

Google Search Console verification is preserved in `index.html`. After publication, inspect the live pages and submit `/sitemap.xml` in the verified property, then monitor real search queries and leads. Search Console data is not connected in this chat yet. No ranking or indexing outcome is guaranteed.
