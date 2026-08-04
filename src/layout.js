/**
 * Page shell + shared section builders.
 *
 * Every page is emitted as a complete, server-independent HTML document so
 * crawlers get real markup rather than client-rendered content.
 */

const { site, areas, services } = require("./data");

/* ------------------------------------------------------------------ utils */

/** Depth-aware relative prefix, e.g. "services/lawn-mowing" -> "../../". */
function prefixFor(path) {
  if (!path) return "";
  return "../".repeat(path.split("/").length);
}

/** Absolute canonical URL for a page path ("" is the home page). */
function urlFor(path) {
  return path ? `${site.origin}/${path}/` : `${site.origin}/`;
}

const logoSvg = (size, plate) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 40 40" aria-hidden="true" focusable="false">` +
  `<rect width="40" height="40" rx="11" fill="${plate}"></rect>` +
  `<path d="M20 31C20 21.5 24.2 14.6 32 11.5C32.4 21.8 27.3 29.6 20 31Z" fill="#A9CF46"></path>` +
  `<path d="M20 31C20 23.6 15.8 18 8.6 15.8C8.4 24 12.9 29.9 20 31Z" fill="#5D9130"></path>` +
  `</svg>`;

/* --------------------------------------------------------------- sections */

/** Reusable "Frequently Asked Questions" block. Also feeds FAQPage schema. */
function faqSection(faqs, heading = "Frequently Asked Questions") {
  return `
  <section class="section section--sand">
    <div class="shell">
      <h2 class="h-block" data-reveal>${heading}</h2>
      <div class="cards cards--wide" style="margin-top:34px" data-reveal-group>
        ${faqs
          .map(
            (f) => `<details class="faq" data-reveal>
          <summary>${f.q}</summary>
          <div class="faq__body"><p>${f.a}</p></div>
        </details>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;
}

/** Closing call-to-action panel used at the foot of every page. */
function ctaSection(p, { heading, body, secondary }) {
  const second =
    secondary === "email"
      ? `<a class="btn btn--ghost" href="mailto:${site.email}">Email Callum</a>`
      : `<a class="btn btn--ghost" href="${p}contact/">Get a free quote</a>`;

  return `
  <section class="section">
    <div class="shell">
      <div class="cta-panel" data-reveal>
        <h2 class="h-section">${heading}</h2>
        <p>${body}</p>
        <div class="btn-row btn-row--center">
          <a class="btn btn--lime" href="${site.phoneHref}">Call ${site.phoneDisplay}</a>
          ${second}
        </div>
      </div>
    </div>
  </section>`;
}

/** Photo grid with captions. */
function gallerySection(p, { heading, intro, items, tight = true }) {
  return `
  <section class="section section--forest">
    <div class="shell">
      <h2 class="h-block" data-reveal>${heading}</h2>
      <p class="prose" style="color:rgba(246,244,239,0.75);max-width:70ch;margin-top:14px" data-reveal>${intro}</p>
      <div class="gallery${tight ? " gallery--tight" : ""}" style="margin-top:40px" data-reveal-group>
        ${items
          .map(
            (i) => `<figure data-reveal>
          <img src="${p}img/${i.img}.webp" alt="${i.alt}" width="800" height="600" loading="lazy" decoding="async" />
          <figcaption>${i.caption}</figcaption>
        </figure>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;
}

/** Numbered process list. */
function stepsSection(heading, steps) {
  return `
  <section class="section section--sm">
    <div class="shell">
      <h2 class="h-block" data-reveal>${heading}</h2>
      <ol class="steps" style="margin-top:34px" data-reveal-group>
        ${steps
          .map(
            (s, i) => `<li data-reveal>
          <span class="steps__n">STEP ${String(i + 1).padStart(2, "0")}</span>
          <h3>${s.title}</h3>
          <p>${s.body}</p>
        </li>`
          )
          .join("\n        ")}
      </ol>
    </div>
  </section>`;
}

/** "Signs you need this" card list. */
function signsSection(heading, items) {
  return `
  <section class="section section--sand section--sm">
    <div class="shell">
      <h2 class="h-block" data-reveal>${heading}</h2>
      <ul class="signs" style="margin-top:34px" data-reveal-group>
        ${items.map((i) => `<li data-reveal>${i}</li>`).join("\n        ")}
      </ul>
    </div>
  </section>`;
}

/** White "why book us" panel. */
function whySection(heading, items) {
  return `
  <section class="section section--sm" style="padding-top:0">
    <div class="shell">
      <div class="card" style="padding:48px" data-reveal>
        <h2 class="h-block">${heading}</h2>
        <ul class="ticks ticks--grid" style="margin-top:28px">
          ${items.map((i) => `<li>${i}</li>`).join("\n          ")}
        </ul>
      </div>
    </div>
  </section>`;
}

/* ------------------------------------------------------------ head/schema */

function schemaBlocks(page) {
  const business = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.origin}/#business`,
    name: site.name,
    description: site.description,
    url: site.origin,
    image: `${site.origin}/img/hero-fleet.webp`,
    logo: `${site.origin}/img/hero-fleet.webp`,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "$$",
    currenciesAccepted: "AUD",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: areas.map((a) => ({
      "@type": "Place",
      name: `${a}, QLD`,
    })),
    founder: { "@type": "Person", name: site.owner },
    sameAs: site.social,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lawn and garden services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title.replace(/&amp;/g, "&"),
          url: `${site.origin}/services/${s.slug}/`,
        },
      })),
    },
  };

  const blocks = [business];

  if (!page.path) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.origin}/#website`,
      url: site.origin,
      name: site.name,
      publisher: { "@id": `${site.origin}/#business` },
      inLanguage: "en-AU",
    });
  }

  if (page.breadcrumbs && page.breadcrumbs.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "" }, ...page.breadcrumbs].map(
        (c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: urlFor(c.path),
        })
      ),
    });
  }

  if (page.serviceSchema) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.serviceSchema.name,
      description: page.serviceSchema.description,
      serviceType: page.serviceSchema.name,
      url: urlFor(page.path),
      provider: { "@id": `${site.origin}/#business` },
      areaServed: areas.map((a) => ({ "@type": "Place", name: `${a}, QLD` })),
    });
  }

  if (page.faqs && page.faqs.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: stripTags(f.q),
        acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
      })),
    });
  }

  return blocks
    .map(
      (b) =>
        `<script type="application/ld+json">${JSON.stringify(b)}</script>`
    )
    .join("\n  ");
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ------------------------------------------------------------ header/foot */

function header(p, active) {
  const isServices = active === "services" || active.startsWith("services/");

  return `<a class="skip-link" href="#main">Skip to content</a>
<div class="nav-scrim" aria-hidden="true"></div>
<header class="site-header">
  <div class="shell header-inner">
    <a class="brand" href="${p || "./"}">
      ${logoSvg(42, "#0F2E1E")}
      <span class="brand__name">
        <b>CALLUM'S MOWING</b>
        <span>LAIDLEY · LOCKYER VALLEY</span>
      </span>
    </a>

    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
      <span></span>
    </button>

    <nav class="nav" id="primary-nav" aria-label="Primary">
      <a class="nav__link" href="${p || "./"}"${active === "" ? ' aria-current="page"' : ""}>Home</a>

      <div class="has-menu" data-open="false">
        <a class="nav__link has-menu__toggle" href="${p}services/" aria-expanded="false"${isServices ? ' aria-current="page"' : ""}>
          Services <span class="has-menu__caret" aria-hidden="true">▼</span>
        </a>
        <div class="menu">
          <div class="menu__panel">
            ${services
              .map(
                (s) =>
                  `<a href="${p}services/${s.slug}/">${s.nav}</a>`
              )
              .join("\n            ")}
          </div>
        </div>
      </div>

      <a class="nav__link" href="${p}about/"${active === "about" ? ' aria-current="page"' : ""}>About</a>
      <a class="nav__link" href="${p}contact/"${active === "contact" ? ' aria-current="page"' : ""}>Contact</a>
      <a class="nav__phone" href="${site.phoneHref}">${site.phoneDisplay}</a>
      <a class="nav__cta" href="${p}contact/">Get Quote</a>
    </nav>
  </div>
</header>`;
}

function footer(p) {
  return `<footer class="site-footer">
  <div class="shell footer-grid">
    <div>
      <div class="footer-brand">
        ${logoSvg(38, "#153B26")}
        <b>CALLUM'S MOWING</b>
      </div>
      <p>${site.description}</p>
    </div>
    <div>
      <h3>SERVICES</h3>
      <div class="footer-links">
        ${services
          .map((s) => `<a href="${p}services/${s.slug}/">${s.nav}</a>`)
          .join("\n        ")}
      </div>
    </div>
    <div>
      <h3>SERVICE AREA</h3>
      <p>${areas.slice(0, 3).join(" · ")}<br />${areas.slice(3, 5).join(" · ")}<br />${areas[5]}</p>
      <h3 style="margin-top:24px">COMPANY</h3>
      <div class="footer-links">
        <a href="${p}about/">About Callum's Mowing</a>
        <a href="${p}services/">All Services</a>
        <a href="${p}contact/">Contact &amp; Quotes</a>
      </div>
    </div>
    <div>
      <h3>CONTACT</h3>
      <div class="footer-links">
        <a class="footer-phone" href="${site.phoneHref}">${site.phoneDisplay}</a>
        <a href="mailto:${site.email}">${site.email}</a>
        <span>${site.address.street}, ${site.address.locality} ${site.address.region} ${site.address.postcode}</span>
        <a class="footer-cta" href="${p}contact/">Get a Free Quote</a>
      </div>
    </div>
  </div>
  <div class="footer-base">
    <div class="shell footer-base__inner">
      <span>© ${new Date().getFullYear()} ${site.name}. Laidley, QLD.</span>
      <span>ABN available on request · Fully insured</span>
    </div>
  </div>
</footer>

<div class="call-bar">
  <a class="call-bar__call" href="${site.phoneHref}">Call ${site.phoneDisplay}</a>
  <a class="call-bar__quote" href="${p}contact/">Free Quote</a>
</div>`;
}

/* --------------------------------------------------------------- document */

function render(page) {
  const p = prefixFor(page.path);
  const canonical = urlFor(page.path);

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <link rel="canonical" href="${canonical}" />
  <meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}" />
  <meta name="author" content="${site.name}" />
  <meta name="geo.region" content="AU-QLD" />
  <meta name="geo.placename" content="Laidley, Queensland" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${site.name}" />
  <meta property="og:locale" content="en_AU" />
  <meta property="og:title" content="${page.title}" />
  <meta property="og:description" content="${page.description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${site.origin}/img/${page.ogImage || "hero-fleet"}.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${page.title}" />
  <meta name="twitter:description" content="${page.description}" />
  <meta name="twitter:image" content="${site.origin}/img/${page.ogImage || "hero-fleet"}.webp" />

  <meta name="theme-color" content="#0F2E1E" />
  <link rel="icon" href="${p}favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="${p}favicon.svg" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${p}assets/css/site.css" />

  ${schemaBlocks(page)}
</head>
<body>
${header(p, page.path)}

<main id="main">
${page.body(p)}
</main>

${footer(p)}

<script src="${p}assets/js/site.js" defer></script>
</body>
</html>
`;
}

module.exports = {
  render,
  prefixFor,
  urlFor,
  faqSection,
  ctaSection,
  gallerySection,
  stepsSection,
  signsSection,
  whySection,
};
