/** About, Contact and Thank You pages. */

const { site, areas, services, formFields: f } = require("../data");
const { faqSection, ctaSection, gallerySection, mapEmbed } = require("../layout");

const areaSentence = areas.join(", ").replace(/, ([^,]*)$/, " and $1");

const fullAddress = `${site.address.street}, ${site.address.locality} ${site.address.region} ${site.address.postcode}`;
const mapQuery = encodeURIComponent(fullAddress);

/** Line icons for the contact rows, drawn on a 20x20 grid. */
const icons = {
  phone:
    '<path d="M4.5 3h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6L14 12l4 1.5v3a1.5 1.5 0 0 1-1.7 1.5A14.5 14.5 0 0 1 3 4.7 1.5 1.5 0 0 1 4.5 3Z"/>',
  mail: '<rect x="2.5" y="4.5" width="15" height="11" rx="1.5"/><path d="m3 5.5 7 5 7-5"/>',
  pin: '<path d="M10 2.5a5.5 5.5 0 0 1 5.5 5.5c0 4-5.5 9.5-5.5 9.5S4.5 12 4.5 8A5.5 5.5 0 0 1 10 2.5Z"/><circle cx="10" cy="8" r="2"/>',
  clock: '<circle cx="10" cy="10" r="7.5"/><path d="M10 5.5V10l3 1.8"/>',
  map: '<path d="M2.5 5.5 7.5 3l5 2.5 5-2.5v11l-5 2.5-5-2.5-5 2.5z"/><path d="M7.5 3v11M12.5 5.5v11"/>',
};

const contactRow = (name, label, value) => `<li class="contact-row">
          <span class="contact-row__icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>
          </span>
          <span class="contact-row__text">
            <span class="contact-row__label">${label}</span>
            <span class="contact-row__value">${value}</span>
          </span>
        </li>`;

/* ------------------------------------------------------------------ about */

const aboutFaqs = [
  {
    q: "Who owns and runs Callum's Mowing?",
    a: "Callum Farmer owns and operates the business from Laidley, QLD. He quotes the jobs, works on the tools and answers the phone. There's no franchise structure and no subcontracting, so the person you speak to is the person doing the work.",
  },
  {
    q: "What areas does Callum's Mowing service?",
    a: `We work throughout ${areaSentence}, covering most of the Lockyer Valley between the Warrego Highway and the ranges. Properties inside our regular run don't attract a travel fee, and we can often fit in nearby addresses when we're already scheduled in the area.`,
  },
  {
    q: "Are you insured?",
    a: "Yes. We carry public liability insurance covering every job we take on, residential and commercial. Certificates of currency are available on request, which body corporates, real estate agents and commercial clients in Gatton and Laidley often ask for.",
  },
  {
    q: "Why choose an owner-operator over a national franchise?",
    a: "Consistency and accountability. The same person quotes your property, learns its quirks and cuts it every visit, so nothing needs re-explaining. Pricing stays direct without franchise fees layered on top, and if something isn't right, you're talking straight to the owner.",
  },
];

const about = {
  path: "about",
  title: "About Callum's Mowing | Local Mowing Laidley QLD",
  description:
    "Meet the owner-operator behind Callum's Mowing — a local mowing business in Laidley QLD serving the Lockyer Valley with residential and acreage lawn care.",
  breadcrumbs: [{ name: "About", path: "about" }],
  faqs: aboutFaqs,
  body: (p) => `
  <section class="hero hero--page">
    <img class="hero__media" src="${p}img/hero-fleet.webp" alt="Callum's Mowing ute, trailer and mowing equipment at a Laidley property" width="1600" height="900" fetchpriority="high" decoding="async" />
    <div class="hero__scrim"></div>
    <div class="shell hero__body">
      <nav class="crumbs" aria-label="Breadcrumb" data-reveal><a href="${p}">${site.name}</a> / About</nav>
      <h1 class="h-page" data-reveal>About Callum's Mowing — Local Mowing in Laidley and the Lockyer Valley</h1>
      <p class="lede" data-reveal>One owner, one mowing standard, and a genuine stake in how this region looks. Here's who turns up when you book us.</p>
      <div data-reveal><a class="btn btn--lime" href="${p}contact/">Get a Free Quote</a></div>
    </div>
  </section>

  <section class="section section--sm">
    <div class="shell grid-split">
      <div data-reveal>
        <h2 class="h-block">Built From a Single Mower and a Short Run of Neighbours</h2>
        <p class="prose" style="margin-top:20px">Callum's Mowing started in Laidley the way most good trades do — one machine, a handful of properties, and word getting around. Today we service blocks right across the Lockyer Valley, from suburban yards in Gatton to multi-acre lifestyle properties out past Regency Downs.</p>
        <p class="prose">Callum Farmer still runs every quote and works on the tools. That matters more than it sounds. When you call, you're talking to the person who will actually be standing on your lawn, which means nothing gets lost between a call centre, a franchisee and a subcontractor.</p>
      </div>
      <img class="media-frame" src="${p}img/fleet-mowers.webp" alt="Callum's Mowing ride-on mowers and equipment lined up in Laidley QLD" width="900" height="700" loading="lazy" decoding="async" data-reveal />
    </div>
  </section>

  <section class="section section--sand section--sm">
    <div class="shell grid-split">
      <div data-reveal>
        <h2 class="h-block">How We Approach Every Property</h2>
        <p class="prose" style="margin-top:20px">We treat mowing as a trade, not a chore, and every mowing visit follows the same routine. Blades come off and get sharpened on a schedule, because a blunt blade tears grass and leaves those brown, frayed tips that make a fresh cut look tired within days. Cutting heights get adjusted to the season and the grass type rather than left on one setting all year.</p>
        <p class="prose">We also finish the job. Edges get cut properly, clippings get blown off paths, driveways and entertaining areas, and gates get shut behind us. It's a small list, but it's the difference between a lawn that's been cut and a property that looks cared for.</p>
      </div>
      <div data-reveal>
        <h2 class="h-block">We Know What Lockyer Valley Grass Does</h2>
        <p class="prose" style="margin-top:20px">This region is not gentle on lawns. Summer storms come through and kikuyu can put on serious growth in a week. The black soil holds water long after the rain has stopped, so timing matters if you don't want ruts across a soft block. Winter brings bindii through thinning turf, and by the time you feel it underfoot it's already seeded.</p>
        <p class="prose">Working the same suburbs year after year means we plan around all of it. We know which streets in Laidley and Plainland drain slowly, which acreage blocks need a dry run-up before we bring the ride-on in, and when to time weed treatment so it lands before seed set rather than after.</p>
      </div>
    </div>
  </section>

  <section class="section section--sm">
    <div class="shell">
      <h2 class="h-block" data-reveal>What Backs Us Up</h2>
      <ul class="cards" style="list-style:none;margin:34px 0 0;padding:0" data-reveal-group>
        <li class="card" data-reveal><strong>Fully insured</strong> with public liability cover on residential and commercial work.</li>
        <li class="card" data-reveal><strong>${site.rating.value} stars across ${site.rating.count} Google reviews</strong> from customers throughout the Lockyer Valley.</li>
        <li class="card" data-reveal><strong>Commercial-grade equipment</strong> maintained on a service schedule, including machines rated for slope work.</li>
        <li class="card" data-reveal><strong>Seven services under one contractor</strong> across ${areaSentence}.</li>
      </ul>
    </div>
  </section>

  ${gallerySection(p, {
    heading: "Our Recent Work in Laidley and the Lockyer Valley",
    intro:
      "A cross-section of the properties we've looked after recently — suburban, rural and everything between.",
    items: [
      {
        img: "verge-after",
        alt: "Residential lawn cut fortnightly in Laidley QLD",
        caption: "Fortnightly Residential Cut – Laidley",
      },
      {
        img: "acreage-garden",
        alt: "Acreage property maintained at Hatton Vale",
        caption: "Acreage Maintenance – Hatton Vale",
      },
      {
        img: "hero-fleet",
        alt: "Mowing equipment set up for slope work at Regency Downs",
        caption: "Slope Mowing – Regency Downs",
      },
      {
        img: "spraying",
        alt: "Garden beds refreshed and treated in Gatton QLD",
        caption: "Garden Refresh – Gatton",
      },
      {
        img: "verge-mown",
        alt: "Long fence line and verge cleared of growth in Plainland QLD",
        caption: "Fence Line Clearing – Plainland",
      },
      {
        img: "backyard-neat",
        alt: "Commercial grounds kept tidy at Kensington Grove",
        caption: "Commercial Grounds – Kensington Grove",
      },
    ],
  })}

  ${faqSection(aboutFaqs)}

  ${ctaSection(p, {
    heading: "Ready to Book?",
    body: "If you need mowing in Laidley, Gatton, Plainland or anywhere across the Lockyer Valley, we'd be glad to quote your property. No call-out fee, no obligation.",
  })}`,
};

/* ---------------------------------------------------------------- contact */

const contactFaqs = [
  {
    q: "How do I get a lawn mowing quote in Laidley?",
    a: `Call ${site.phoneDisplay} or send the form through with your suburb and approximate block size. Most standard residential properties in Laidley can be quoted over the phone within minutes. Larger or acreage blocks usually need a quick site visit, which we arrange at no cost.`,
  },
  {
    q: "How much does a mowing service cost?",
    a: "Price depends on block size, grass length, slope and edging required, with acreage quoted per acre. You'll always get a fixed figure before we start, not an hourly estimate that moves — and there's no call-out fee for the quote itself.",
  },
  {
    q: "How quickly can you start?",
    a: "It shifts with the season — spring and the weeks after heavy summer rain are our busiest periods, so it pays to call early if you need a property tidied before a specific date. Give us a ring and we'll tell you the next available slot on our Lockyer Valley run.",
  },
  {
    q: "Do you need me to be home during the service?",
    a: "No. Once we've quoted the property and you're happy with the price, most customers leave us to it. We just need gate access and any dogs secured. We'll message when the job is done and invoice afterwards.",
  },
  {
    q: "Do you service commercial and rental properties?",
    a: "Yes. We work with owners, property managers and commercial clients across Gatton and Laidley on set schedules, invoicing directly and providing completion photos where an agent requires them. Certificates of currency are available on request.",
  },
];

const contact = {
  path: "contact",
  title: "Contact Callum's Mowing | Free Quote Laidley QLD",
  description:
    "Get a free lawn mowing quote in Laidley and across the Lockyer Valley. Call 0408 765 657 or send your job through for a same-day price.",
  breadcrumbs: [{ name: "Contact", path: "contact" }],
  faqs: contactFaqs,
  body: (p) => `
  <section class="hero hero--split">
    <img class="hero__media" src="${p}img/hero-fleet.webp" alt="Callum's Mowing ute, trailer and equipment ready for work in Laidley QLD" width="1600" height="900" fetchpriority="high" decoding="async" />
    <div class="hero__scrim"></div>
    <div class="shell hero-split">

      <div class="hero-split__copy">
        <nav class="crumbs" aria-label="Breadcrumb" data-reveal><a href="${p}">Home</a> / Contact</nav>
        <span class="eyebrow eyebrow--dot" data-reveal>FREE QUOTES</span>
        <h1 class="h-page" data-reveal>Get a Free Lawn Mowing Quote in Laidley</h1>
        <p class="lede" data-reveal>Send your job through and we'll come back with a free, no-obligation quote — usually the same day. Servicing Laidley, Gatton, Plainland and the whole Lockyer Valley.</p>
      </div>

      <div class="quote-card" id="quote" data-reveal>
        <h2 class="quote-card__title">Send Your Job Through</h2>
        <p class="quote-card__intro">Fill this in and we'll come back to you with a free quote — usually the same day.</p>
        <form id="quote-form" method="post"${site.formEndpoint ? ` action="${site.formEndpoint}"` : ""} data-thanks="${p}thank-you/">
          <div class="field-row">
            <label class="field">Full name
              <input type="text" name="${f.fullName}" required placeholder="Your name" autocomplete="name" />
            </label>
            <label class="field">Phone
              <input type="tel" name="${f.phone}" required placeholder="04xx xxx xxx" autocomplete="tel" />
            </label>
          </div>
          <label class="field">Email
            <input type="email" name="${f.email}" required placeholder="you@email.com" autocomplete="email" />
          </label>
          <div class="field-row">
            <label class="field">Property address
              <input type="text" name="${f.address}" required placeholder="Street &amp; suburb" autocomplete="street-address" />
            </label>
            <label class="field">Service needed
              <select name="${f.service}" required>
                <option value="">Choose a service…</option>
                ${services
                  .map(
                    (s) =>
                      `<option value="${s.title.replace(/&amp;/g, "&")}">${s.title}</option>`
                  )
                  .join("\n                ")}
                <option value="More than one service">More than one service</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>
          </div>
          <label class="field">Tell us about the job
            <textarea name="${f.notes}" rows="4" placeholder="Block or acreage size, how long since the last cut, one-off or regular, gate access, dogs…"></textarea>
          </label>
          <button class="btn btn--forest quote-card__submit" type="submit">Send My Request</button>
          <p class="quote-card__note">Or call <a href="${site.phoneHref}">${site.phoneDisplay}</a> — we're happy to talk it through.</p>
        </form>
      </div>

    </div>
  </section>

  <section class="section section--sm">
    <div class="shell">
      <span class="eyebrow eyebrow--dot eyebrow--ink" data-reveal>FIND US</span>
      <h2 class="h-section" style="margin-top:14px" data-reveal>Contact Details &amp; Location</h2>
      <p class="prose" style="margin-top:14px;max-width:72ch" data-reveal>Based in Laidley — servicing the whole Lockyer Valley, from town blocks through to acreage out past the ranges.</p>

      <div class="contact-grid" style="margin-top:44px">
        <div data-reveal>
          <ul class="contact-rows">
            ${contactRow("phone", "CALL US", `<a href="${site.phoneHref}">${site.phoneDisplay}</a>`)}
            ${contactRow("mail", "EMAIL", `<a href="mailto:${site.email}">${site.email}</a>`)}
            ${contactRow("pin", "BASED IN", fullAddress)}
            ${contactRow("clock", "HOURS", site.hours.display)}
            ${contactRow("map", "SERVICE AREA", areas.join(" · "))}
          </ul>
          <div class="btn-row" style="margin-top:34px">
            <a class="btn btn--forest" href="https://www.google.com/maps/dir/?api=1&amp;destination=${mapQuery}" target="_blank" rel="noopener">Get Directions</a>
          </div>
        </div>

        ${mapEmbed(`Map showing Callum's Mowing, based in ${site.address.locality} ${site.address.region}`)}
      </div>
    </div>
  </section>

  <section class="section section--sand section--sm">
    <div class="shell grid-split">
      <div data-reveal>
        <h2 class="h-block">What Happens After You Get in Touch</h2>
        <p class="prose" style="margin-top:18px">We respond to every enquiry, usually within one business day. For a straightforward suburban block we'll confirm a fixed price straight away and offer you the next available slot.</p>
        <p class="prose">For acreage, sloped ground or properties that have been left a while, we'll book a short site visit so the quote reflects what's actually there — that way the price we give is the price you pay.</p>
      </div>
      <div data-reveal>
        <h2 class="h-block">Areas We Cover</h2>
        <p class="prose" style="margin-top:18px">We run mowing routes across the Lockyer Valley from our base in Laidley, and properties inside that run don't attract a travel fee. On the edge of these suburbs or slightly beyond? Call anyway — if we're already scheduled nearby that week, we can usually make it work.</p>
        <div class="areas" style="margin-top:26px" data-reveal-group>
          ${areas.map((a) => `<div data-reveal>${a}</div>`).join("\n          ")}
        </div>
      </div>
    </div>
  </section>

  ${faqSection(contactFaqs, "Quoting and Booking Questions")}

  ${ctaSection(p, {
    heading: "Let's Get Your Property Sorted",
    body: "Whether it's a single tidy-up before an inspection or a permanent fortnightly slot, we're ready when you are.",
    href: "#quote",
  })}`,
};

/* -------------------------------------------------------------- thank you */

const thanks = {
  path: "thank-you",
  title: "Thank You | Callum's Mowing Laidley QLD",
  description:
    "Thanks for your enquiry. Callum's Mowing will be in touch, usually within one business day.",
  noindex: true,
  body: (p) => `
  <section class="section" style="min-height:64vh;display:flex;align-items:center">
    <div class="shell grid-split grid-split--center">
      <div data-reveal>
        <span class="thanks-tick" aria-hidden="true">✓</span>
        <h1 class="h-page">Thanks — your quote request is in.</h1>
        <p class="prose" style="font-size:18px;max-width:56ch;margin-top:18px">We've got your details and we'll come back with a price, usually within one business day. If it's a standard residential block we'll confirm a fixed figure straight away; for acreage or a property that's been left a while, we'll organise a quick site visit first.</p>
        <p class="prose" style="font-size:18px;max-width:56ch;margin-top:16px;margin-bottom:34px">Need it sorted sooner? Call Callum directly on <a href="${site.phoneHref}">${site.phoneDisplay}</a>.</p>
        <div class="btn-row">
          <a class="btn btn--outline" href="${p}">Back to home</a>
        </div>
      </div>
      <img class="media-frame media-frame--tall" src="${p}img/backyard-neat.webp" alt="Freshly mown backyard lawn in Laidley QLD" width="900" height="800" loading="lazy" decoding="async" data-reveal />
    </div>
  </section>`,
};

module.exports = { about, contact, thanks };
