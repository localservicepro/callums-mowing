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

### Logo and browser-tab icons

The mower mark is inline SVG, drawn once by `logoSvg` in `src/layout.js` for the
header and footer. `favicon.svg` holds the same artwork as a standalone file and
is the source for the raster icons:

| File | Used for |
| --- | --- |
| `favicon.ico` | The automatic `/favicon.ico` request browsers make |
| `favicon.svg` | Modern browsers, scales to any tab size |
| `favicon-32.png` | Fallback where SVG icons aren't supported |
| `favicon-192.png` | Android home screen |
| `apple-touch-icon.png` | iOS — must be PNG and opaque, since iOS ignores SVG and renders transparency as black |

If the logo changes, update `logoSvg` and `favicon.svg` together, then regenerate
the rasters:

```bash
npm i -D playwright && node scripts/make-favicons.js
```

Playwright is only needed for that one-off, so it isn't a project dependency.

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

## One call to action

Every page carries exactly **two buttons**, both "Free Quote", both pointing at
the contact form: one in the hero and one in the closing panel. There are
deliberately no phone or "book now" buttons anywhere — a second CTA competing
with the form is what the site is trying to avoid.

The phone number is still present as **information**, not as a button: in the
header, the footer, the contact details row, and inline in copy such as the
note under the quote form. Keep that distinction if you add sections later.

`ctaSection` in `src/layout.js` renders the closing panel and takes an optional
`href`, used on the contact page to point at `#quote` rather than linking the
page to itself.

## CRM tracking and the quote form

The GoHighLevel external tracking script is injected on every page just before
`</body>`, configured from `site.tracking` in `src/data.js`. It records page
views and captures native form submissions, which means **the CRM is the quote
form's backend** — there is no other server involved.

### Field mapping

The CRM maps submissions by each input's `name` attribute, so the form's field
names are the contact field keys themselves. They're defined once in
`formFields` in `src/data.js`:

| Form field | `name` attribute | CRM contact field |
| --- | --- | --- |
| Name | `full_name` | `{{contact.full_name}}` |
| Email | `email` | `{{contact.email}}` |
| Phone | `phone` | `{{contact.phone}}` |
| Property address | `property_address` | `{{contact.property_address}}` |
| Services needed | `service_needed` | `{{contact.service_needed}}` |
| Job notes | `job_notes` | `{{contact.job_notes}}` |

`property_address`, `service_needed` and `job_notes` must exist as **custom
fields** in the CRM with exactly those keys, or those values are dropped.

"Service needed" is a single `<select>`, which matches how a contact field
stores one value. Customers needing more than one service pick "More than one
service" and describe it in the job notes.

### Rules the form has to keep following

The tracker captures by listening for the native `submit` event. Three things
would silently break it, so don't undo them:

1. **Never call `stopPropagation()`** in a submit handler — the event must reach
   the tracker. (`preventDefault()` is fine; it cancels only the browser's
   navigation, not the other listeners.)
2. **Never disable a named field** before submitting. Disabling the submit
   button is fine — it isn't captured data.
3. **Keep submitting through the real `<button type="submit">`.** Replacing it
   with a click handler that posts via `fetch` means no submit event fires and
   nothing is captured.

`assets/js/site.js` binds its handler to `document` rather than to the form, so
the tracker's own listener sees the event before ours prevents the default. It
then waits 900 ms before redirecting to `/thank-you/`, giving the tracker's
request time to leave the page.

### Also enable, on the CRM side

Under the tracking settings, **Form Analytics** and **Form Submissions** both
need to be switched on or nothing is recorded.

### Optional second destination

Setting `site.formEndpoint` (Formspree, FormSubmit, Netlify Forms, etc.) makes
the form POST there natively as well. The CRM still captures it, because the
native submit event fires either way.

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
   - Typical lead time for new bookings
   - Accepted payment methods
   - ABN, if it should be shown rather than "available on request"

   Trading hours are confirmed — Mon–Sat 6:30am–5pm — and live in
   `site.hours` in `src/data.js`. Changing them there updates the contact page
   row, the footer and the `openingHoursSpecification` in the schema together.
3. **Point `site.origin`** in `src/data.js` at the final domain if it isn't
   `https://www.callumsmowing.com.au`.
4. **Submit `sitemap.xml`** in Google Search Console and link the Google
   Business Profile to the new site.

## Deploying

Any static host works — Netlify, Cloudflare Pages, GitHub Pages, Vercel or
plain nginx. Serve the repository root; no build step or runtime is needed.
Make sure the host serves `404.html` for unmatched routes.
