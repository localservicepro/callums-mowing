# Callum's Mowing — callumsmowing.com.au

Static marketing site for Callum's Mowing, an owner-operated lawn and garden
business in Laidley, Lockyer Valley QLD.

Built from the approved Claude Design file (`Callums Mowing Website.dc.html`),
which used hash-based client-side routing. That has been rebuilt as **twelve
real HTML pages** so every route is independently crawlable, indexable and
shareable — search engines and AI answer engines receive fully rendered markup
with no JavaScript required.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Home |
| `/services/` | Services index |
| `/services/lawn-mowing/` | Lawn Mowing |
| `/services/acreage-mowing/` | Acreage Mowing |
| `/services/edging/` | Edging & Whipper Snipping |
| `/services/garden-maintenance/` | Garden Maintenance |
| `/services/weed-control/` | Lawn Weed Control |
| `/services/fence-line-spraying/` | Fence Line Spraying |
| `/services/hedging/` | Hedge Trimming |
| `/about/` | About |
| `/contact/` | Contact & quote form |
| `/thank-you/` | Post-enquiry confirmation (`noindex`) |

Plus `404.html`, `sitemap.xml` and `robots.txt`.

## Build

The HTML in this repo is generated and committed — deployment is just static
file hosting, no build step required on the server.

```bash
npm run build     # regenerate all HTML + sitemap.xml + robots.txt
npm run serve     # build, then preview at http://localhost:8080
npm run images    # download the 17 photos from Google Drive into ./img
```

### Where things live

```
src/data.js            business facts, services, service areas, reviews
src/layout.js          page shell, header, footer, schema, shared sections
src/pages/home.js      home page
src/pages/services.js  all seven service pages + the services index
src/pages/misc.js      about, contact, thank you
assets/css/site.css    the brand kit and full design system
assets/js/site.js      nav, dropdown, scroll reveal, before/after sliders
build.js               writes the static HTML
```

Change a phone number, service area or review in `src/data.js` and it updates
everywhere. **Edit the sources, then run `npm run build` — never hand-edit the
generated `index.html` files**, as the next build overwrites them.

## Brand kit

Carried over from the design file and applied across every page as CSS custom
properties in `assets/css/site.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--forest` | `#0F2E1E` | Dark sections, primary buttons |
| `--forest-deep` | `#0A1A11` | Footer |
| `--lime` | `#A9CF46` | Accent, primary CTA |
| `--green` | `#5D9130` | Ticks, step numbers, form focus |
| `--cream` | `#F6F4EF` | Page background |
| `--sand` | `#EFEDE5` | Alternating sections |
| `--ink` | `#10201A` | Body text |
| `--muted` | `#42544A` | Secondary text |

Type: **Archivo** (500–800) for headings and UI, **IBM Plex Sans** (400–600) for
body copy.

## Motion

Added on top of the original design, all gated behind
`prefers-reduced-motion: reduce`:

- Staggered scroll reveals via `IntersectionObserver`
- Slow Ken Burns drift on hero imagery
- Sticky header that gains elevation on scroll
- Animated services dropdown (hover on desktop, accordion on mobile)
- Full-screen mobile nav drawer with animated burger icon
- Card lift, image zoom and arrow-slide hovers
- Progress rules that draw across process steps as they enter view
- Count-up on the Google rating
- Native `<details>` FAQ accordions with a slide-in body
- Drag-to-reveal before/after sliders
- Sticky call/quote bar on mobile

## SEO / AEO / GEO

- Unique keyword-led `<title>` and meta description per page
- Canonical URLs, Open Graph and Twitter card tags
- JSON-LD: `LocalBusiness` (with `aggregateRating`, `areaServed`,
  `hasOfferCatalog`), `WebSite`, `BreadcrumbList`, `Service` per service page,
  and `FAQPage` on every page carrying FAQs
- Answer-first FAQ copy written to be quotable by AI answer engines
- Semantic landmarks, one `<h1>` per page, descriptive alt text throughout
- Suburb and service-intent keywords in headings and body copy
- Internal linking between related services
- `sitemap.xml`, `robots.txt`, skip link, `width`/`height` on images to avoid
  layout shift, lazy loading below the fold

## The quote form

`/contact/` posts to whatever you set as `site.formEndpoint` in `src/data.js`.

That field is **empty by default**, and while it's empty the form falls back to
opening the visitor's email client with every field pre-filled and addressed to
Callum, then sends them to `/thank-you/`. No third party receives customer
details unless one is explicitly configured.

To use a form service instead, set `formEndpoint` and rebuild — for example
`https://formspree.io/f/xxxxxxx`. Nothing else needs to change.

## Before this goes live

1. **Add the photos** — run `npm run images` (see `img/README.md`, and compress
   the two large hero files first).
2. **Confirm the details Callum needs to supply.** The design file carried
   bracketed placeholders for facts nobody has verified yet. Rather than invent
   figures for a live business, the copy has been written to read naturally
   without them. Add them once confirmed:
   - Years trading / year founded
   - Public liability cover amount (currently stated as "fully insured")
   - Indicative price ranges — per visit, per acre, per linear metre
   - Number of properties serviced
   - Opening hours and days (also worth adding to the `LocalBusiness` schema)
   - Typical lead time for new bookings
   - Accepted payment methods
   - ABN, if it should be shown rather than "available on request"
3. **Point `site.origin`** in `src/data.js` at the final domain if it isn't
   `https://www.callumsmowing.com.au`.
4. **Submit `sitemap.xml`** in Google Search Console and link the Google
   Business Profile to the new site.

## Deploying

Any static host works — Netlify, Cloudflare Pages, GitHub Pages, Vercel or
plain nginx. Serve the repository root; no build step or runtime is needed.
Make sure the host serves `404.html` for unmatched routes.
