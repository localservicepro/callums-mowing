/** Home page. */

const { site, areas, services, reviews } = require("../data");
const { faqSection, ctaSection, gallerySection, mapEmbed } = require("../layout");

const faqs = [
  {
    q: "How much does lawn mowing cost in Laidley?",
    a: "Price depends on block size, grass length and how much edging is involved, and acreage is quoted per acre. We give you a fixed price before starting, so there are no surprises when the invoice arrives — no call-out fee and no hourly estimate that moves.",
  },
  {
    q: "How often should I have my grass cut in the Lockyer Valley?",
    a: "Weekly to fortnightly through the warm months from October to March, when kikuyu and couch grow fastest, then every three to four weeks over winter. Most Lockyer Valley customers run fortnightly year-round and adjust with the seasons. We'll recommend a schedule when we quote your property.",
  },
  {
    q: "Do you mow acreage and large rural blocks?",
    a: "Yes. Acreage is a core part of what we do, and we run machines built for large open areas, slopes and rough ground. We regularly handle blocks from one acre up to substantial lifestyle properties around Regency Downs, Hatton Vale and Kensington Grove.",
  },
  {
    q: "Why should I hire a local mowing contractor instead of doing it myself?",
    a: "Time, equipment and finish. A large or sloped block can eat an entire weekend and chew through a domestic mower. We arrive with commercial gear, sharp blades and insurance, and we're gone in a fraction of the time with a cleaner result.",
  },
  {
    q: "What are the signs my lawn needs professional attention?",
    a: "Patchy yellowing after cuts usually means blunt blades tearing the grass. Weeds spreading through thinning turf, ragged edges along paths, and grass so long the mower bogs down are all signs the job has outgrown a domestic setup and needs commercial equipment.",
  },
  {
    q: "Do you offer one-off cuts, or only regular schedules?",
    a: "Both. Plenty of customers book a single tidy-up before an inspection, a sale or family visiting, with no obligation to continue. Others prefer a set fortnightly slot. There's no lock-in contract either way — you can pause or stop whenever you need.",
  },
];

const beforeAfter = [
  {
    id: "a",
    after: "backyard-after",
    afterAlt: "Back lawn after mowing at a Laidley property",
    before: "backyard-before",
    beforeAlt: "Patchy back lawn before mowing at a Laidley property",
    label: "Reveal before and after of the Laidley back lawn",
    caption: "Fortnightly Backyard Maintenance – Laidley",
  },
  {
    id: "b",
    after: "verge-after",
    afterAlt: "Front lawn and verge after mowing and edging in Laidley QLD",
    before: "verge-before",
    beforeAlt: "Overgrown front lawn and verge before mowing in Laidley QLD",
    label: "Reveal before and after of the Laidley front lawn and verge",
    caption: "Front Lawn, Verge &amp; Edging – Laidley",
  },
];

const home = {
  path: "",
  title: "Lawn Mowing Laidley | Callum's Mowing Lockyer Valley",
  description:
    "Reliable lawn mowing in Laidley and across the Lockyer Valley. Residential blocks, acreage, edging and garden maintenance. Free quotes — call 0408 765 657.",
  faqs,
  body: (p) => `
  <section class="hero">
    <img class="hero__media" src="${p}img/hero-fleet.webp" alt="Callum's Mowing ride-on mowers, ute and equipment set up on a Lockyer Valley property" width="1600" height="900" fetchpriority="high" decoding="async" />
    <div class="hero__scrim"></div>
    <div class="shell hero__body">
      <span class="eyebrow hero__badge" data-reveal>LAIDLEY · GATTON · PLAINLAND · HATTON VALE</span>
      <h1 class="h-hero" data-reveal>Lawn Mowing Laidley — Reliable, Sharp and On Time</h1>
      <p class="lede" data-reveal>We handle lawn mowing for residential blocks, acreage and commercial properties across the Lockyer Valley all year round. Book a cut once, fortnightly, or on a schedule that suits your grass.</p>
      <div class="btn-row" data-reveal>
        <a class="btn btn--lime" href="${site.phoneHref}">Call ${site.phoneDisplay} for a Free Quote</a>
        <a class="btn btn--ghost" href="${p}contact/">Request a Quote Online</a>
      </div>
    </div>
  </section>

  <div class="trust">
    <div class="shell trust__grid">
      <span>Owner operated from Laidley, QLD</span>
      <span>No call-out fees, no lock-in contracts</span>
      <span>Fully insured, residential &amp; commercial</span>
      <span>Free same-day quotes</span>
    </div>
  </div>

  <section class="section">
    <div class="shell grid-split" style="gap:56px">
      <div data-reveal>
        <h2 class="h-section">Your Local Grass Cutting Crew, Based in Laidley</h2>
        <p class="prose" style="margin-top:22px">Callum's Mowing is a locally owned and operated business working out of Laidley, QLD. We've spent years doing lawn mowing across the Lockyer Valley, and in that time we've learned what this region actually demands: kikuyu that races away after a summer storm, black soil that turns to soup in the wet, and acreage blocks that need a proper machine rather than a push mower and good intentions.</p>
        <p class="prose">We turn up when we say we will. Blades are kept sharp so your grass is cut cleanly instead of torn, edges are finished properly, and clippings are blown off paths and driveways before we leave. That's the standard on every job, whether it's a 400m² block in town or five acres out past Hatton Vale.</p>
        <p class="prose">Every property is different, so we quote on what's in front of us — size, slope, access and how long it's been since the last cut. No call-out fees, no lock-in contracts, and a straight answer on price before we start.</p>
      </div>
      <div class="photo-stack" data-reveal>
        <img src="${p}img/fleet-mowers.webp" alt="Callum's Mowing zero-turn and ride-on mowers lined up on an acreage block in the Lockyer Valley" width="900" height="600" loading="lazy" decoding="async" />
        <img src="${p}img/verge-mown.webp" alt="Freshly mown street verge with clean edges in Laidley QLD" width="600" height="500" loading="lazy" decoding="async" />
        <img src="${p}img/spraying.webp" alt="Callum spraying weeds around a garden bed on a Lockyer Valley property" width="600" height="500" loading="lazy" decoding="async" />
      </div>
    </div>
  </section>

  <section class="section section--sand">
    <div class="shell">
      <h2 class="h-section" data-reveal>What We Do Across the Lockyer Valley</h2>
      <p class="prose" style="max-width:70ch;margin-top:14px" data-reveal>Seven core services, all handled by the same crew, so you're not chasing three different contractors to get your property sorted.</p>
      <div class="cards" style="margin-top:44px" data-reveal-group>
        ${services
          .map(
            (s) => `<a class="card service-card" href="${p}services/${s.slug}/" data-reveal>
          <h3 class="h-card">${s.cardTitle}</h3>
          <p>${s.cardBody}</p>
          <span class="service-card__more">${s.cardLink}</span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell grid-split grid-split--center" style="gap:56px">
      <img class="media-frame media-frame--tall" src="${p}img/backyard-neat.webp" alt="Tidy backyard lawn cut and edged by Callum's Mowing in Laidley QLD" width="900" height="800" loading="lazy" decoding="async" data-reveal />
      <div data-reveal>
        <h2 class="h-section">Why Locals Book Us Back</h2>
        <ul class="ticks" style="margin-top:26px">
          <li><span><strong>We show up.</strong> Scheduled visits happen on the day we agreed, and you get a message if weather forces a change.</span></li>
          <li><span><strong>Fully insured.</strong> Public liability cover on every job, residential and commercial.</span></li>
          <li><span><strong>Rated <span data-count-to="5.0">5.0</span> on Google</strong> across ${site.rating.count} reviews from Lockyer Valley property owners.</span></li>
          <li><span><strong>Right machine for the block.</strong> Compact mowers for tight suburban yards, ride-ons built for slopes and acreage lawn mowing.</span></li>
          <li><span><strong>Local, not a franchise.</strong> You deal with Callum directly — same person quoting, cutting and answering the phone.</span></li>
        </ul>
      </div>
    </div>
  </section>

  ${gallerySection(p, {
    heading: "Our Recent Work in Laidley and Surrounds",
    intro:
      "A snapshot of properties we've handled recently across the region. Every one of these started with a phone call and a free quote.",
    tight: false,
    items: [
      {
        img: "verge-after",
        alt: "Residential front lawn and verge cut and edged in Laidley QLD",
        caption: "Front Lawn &amp; Verge Cut – Laidley",
      },
      {
        img: "acreage-garden",
        alt: "Acreage lawn and mulched garden beds maintained at Regency Downs",
        caption: "Acreage Lawn &amp; Garden Beds – Regency Downs",
      },
      {
        img: "overgrown-yard",
        alt: "Overgrown yard cut back to clean turf in Gatton QLD",
        caption: "Overgrown Yard Reclaim – Gatton",
      },
      {
        img: "spraying",
        alt: "Callum spraying weeds through garden beds on a Hatton Vale property",
        caption: "Garden Bed Weed Control – Hatton Vale",
      },
      {
        img: "weed-spray-yard",
        alt: "Broadleaf weed spraying across a back lawn in Plainland QLD",
        caption: "Lawn Weed Spraying – Plainland",
      },
      {
        img: "trailer-mower",
        alt: "Ride-on mower strapped onto a trailer for transport from Laidley",
        caption: "Ride-On Mower Transport – Laidley",
      },
    ],
  })}

  <section class="section">
    <div class="shell">
      <h2 class="h-section" data-reveal>Before and After</h2>
      <p class="prose" style="max-width:70ch;margin-top:14px" data-reveal>Drag the handle across each photo to see the same block before and after a visit. Both of these are customer jobs from the last few months.</p>
      <div class="cards cards--wide" style="margin-top:44px;gap:26px" data-reveal-group>
        ${beforeAfter
          .map(
            (b) => `<figure style="margin:0" data-reveal>
          <div class="ba">
            <img src="${p}img/${b.after}.webp" alt="${b.afterAlt}" width="900" height="800" loading="lazy" decoding="async" />
            <div class="ba__before">
              <img src="${p}img/${b.before}.webp" alt="${b.beforeAlt}" width="900" height="800" loading="lazy" decoding="async" />
            </div>
            <span class="ba__tag ba__tag--before">BEFORE</span>
            <span class="ba__tag ba__tag--after">AFTER</span>
            <div class="ba__line" aria-hidden="true"></div>
            <div class="ba__grip" aria-hidden="true">‹ ›</div>
            <input class="ba__range" type="range" min="0" max="100" value="50" aria-label="${b.label}" />
          </div>
          <figcaption class="ba-caption">${b.caption}</figcaption>
        </figure>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section section--sand">
    <div class="shell">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:28px;flex-wrap:wrap" data-reveal>
        <div>
          <h2 class="h-section">What Lockyer Valley Customers Say</h2>
          <p class="prose" style="max-width:60ch;margin-top:12px">Every review below is from a Google review of ${site.name}.</p>
        </div>
        <div class="rating-badge">
          <b data-count-to="5.0">5.0</b>
          <span style="display:flex;flex-direction:column;gap:4px">
            <span class="stars" style="font-size:17px">★★★★★</span>
            <span style="font-size:14px;color:#5c6b62">${site.rating.count} Google reviews</span>
          </span>
        </div>
      </div>
      <div class="cards" style="margin-top:44px" data-reveal-group>
        ${reviews
          .map(
            (r) => `<blockquote class="review" data-reveal>
          <div class="review__head">
            <span class="review__avatar" style="background:${r.colour}" aria-hidden="true">${r.initial}</span>
            <span class="review__who">
              <strong>${r.name}</strong>
              <span class="stars" aria-label="5 out of 5 stars">★★★★★</span>
            </span>
          </div>
          <p>${r.body}</p>
        </blockquote>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <h2 class="h-section" data-reveal>Where We Work</h2>
      <p class="prose" style="max-width:78ch;margin-top:20px" data-reveal>We provide lawn mowing in ${areas.join(", ").replace(/, ([^,]*)$/, " and $1")}, covering most of the Lockyer Valley between the Warrego Highway and the ranges. Being based in Laidley means short travel times and no travel surcharge for properties inside our regular run. If you're just outside these suburbs, call anyway — if we're already working nearby that week, we can usually fit you in.</p>
      <div class="contact-grid contact-grid--center" style="margin-top:40px">
        <div class="areas" data-reveal-group>
          ${areas.map((a) => `<div data-reveal>${a}</div>`).join("\n          ")}
        </div>
        ${mapEmbed("Map showing Callum's Mowing, based in Laidley QLD and serving the Lockyer Valley")}
      </div>
    </div>
  </section>

  ${faqSection(faqs)}

  ${ctaSection(p, {
    heading: "Get Your Free Quote Today",
    body: "Tell us the suburb and rough block size and we'll price your lawn mowing, usually the same day. Serving Laidley, Gatton, Plainland and the wider Lockyer Valley.",
    secondary: "email",
  })}`,
};

module.exports = { home };
