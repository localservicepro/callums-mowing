/**
 * Callum's Mowing — single source of truth for business facts, navigation,
 * services and social proof. Everything the generated pages render comes from
 * here, so a detail only ever has to change in one place.
 */

const site = {
  name: "Callum's Mowing",
  legalName: "Callum's Mowing",
  owner: "Callum Farmer",
  origin: "https://www.callumsmowing.com.au",
  tagline: "Laidley · Lockyer Valley",
  description:
    "Owner-operated lawn mowing, acreage mowing and garden maintenance across Laidley and the Lockyer Valley, QLD.",

  phoneDisplay: "0408 765 657",
  phoneHref: "tel:+61408765657",
  phoneE164: "+61408765657",
  email: "callumsmowing4341@gmail.com",

  address: {
    street: "5 Range Crescent",
    locality: "Laidley",
    region: "QLD",
    postcode: "4341",
    country: "AU",
  },

  geo: { lat: -27.6317, lng: 152.3936 },

  /**
   * Google Maps embed pointing at the Callum's Mowing business listing, not
   * just the street address, so the pin carries the business name. Taken from
   * Maps' own Share > Embed dialog — the `pb` blob is opaque and must not be
   * hand-edited, so replace the whole URL if the listing ever moves.
   */
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.429210057076!2d152.4364398!3d-27.6421894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8998c88c8dd6f903%3A0x51cacd24bc083057!2sCallum's%20Mowing!5e0!3m2!1sen!2sph!4v1785837112275!5m2!1sen!2sph",

  /** Trading hours. `display` is what the page shows; the rest feeds schema. */
  hours: {
    display: "Mon–Sat 6:30am–5pm",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "06:30",
    closes: "17:00",
  },

  rating: { value: "5.0", count: 25 },

  social: ["https://www.facebook.com/profile.php?id=61577312751456"],

  /**
   * GoHighLevel external tracking. The script records page views and captures
   * native form submissions, creating the CRM contact — so with this in place
   * the CRM *is* the quote form's backend. Set to null to remove it sitewide.
   */
  tracking: {
    src: "https://link.msgsndr.com/js/external-tracking.js",
    id: "tk_d2674c7bd61d4ef1a0191d5e2933e2ac",
  },

  /**
   * Optional extra form endpoint (Formspree, FormSubmit, Netlify Forms, etc.).
   * Leave empty and the CRM tracking script above is the sole delivery path.
   * Set it and the form POSTs there natively as well, which the CRM still
   * captures because the native submit event fires either way.
   */
  formEndpoint: "",
};

/**
 * Quote form fields, in render order. `name` must match the CRM contact field
 * key exactly — GoHighLevel maps submissions by the input's name attribute:
 *
 *   full_name        -> {{contact.full_name}}
 *   email            -> {{contact.email}}
 *   phone            -> {{contact.phone}}
 *   property_address -> {{contact.property_address}}
 *   service_needed   -> {{contact.service_needed}}
 *   job_notes        -> {{contact.job_notes}}
 */
const formFields = {
  fullName: "full_name",
  email: "email",
  phone: "phone",
  address: "property_address",
  service: "service_needed",
  notes: "job_notes",
};

/** Suburbs served, in the order they appear across the site. */
const areas = [
  "Laidley",
  "Plainland",
  "Gatton",
  "Regency Downs",
  "Hatton Vale",
  "Kensington Grove",
];

/**
 * The seven services. `slug` drives the URL (/services/<slug>/), `nav` is the
 * dropdown label, and `card` is the summary used on the home and index pages.
 */
const services = [
  {
    slug: "lawn-mowing",
    nav: "Lawn Mowing",
    title: "Lawn Mowing",
    cardTitle: "Residential Grass Cutting",
    cardBody:
      "Regular or one-off cuts for suburban blocks in Laidley, Plainland and Gatton. Front and back, edged and blown down, in and out without the fuss.",
    cardLink: "Lawn mowing services",
    tileBody:
      "Regular or one-off cuts for suburban blocks in Laidley, Plainland and Gatton.",
    tileImage: "verge-mown",
    tileAlt: "Freshly mown residential lawn in Laidley QLD",
  },
  {
    slug: "acreage-mowing",
    nav: "Acreage Mowing",
    title: "Acreage Mowing",
    cardTitle: "Acreage Mowing",
    cardBody:
      "Purpose-built machines for large rural blocks, paddocks and lifestyle properties. We handle slopes, uneven ground and long growth other operators turn down.",
    cardLink: "Acreage mowing",
    tileBody:
      "Purpose-built machines for large rural blocks, paddocks and lifestyle properties.",
    tileImage: "acreage-garden",
    tileAlt: "Acreage block mown in the Lockyer Valley",
  },
  {
    slug: "edging",
    nav: "Edging &amp; Whipper Snipping",
    title: "Edging &amp; Whipper Snipping",
    cardTitle: "Edging &amp; Whipper Snipping",
    cardBody:
      "Crisp lines along driveways, paths, fence lines and garden beds. This is the detail that makes a lawn look professionally finished rather than just cut.",
    cardLink: "Edging and whipper snipping",
    tileBody: "Crisp lines along driveways, paths, fence lines and garden beds.",
    tileImage: "verge-after",
    tileAlt: "Crisp lawn edge along a footpath in Laidley QLD",
  },
  {
    slug: "garden-maintenance",
    nav: "Garden Maintenance",
    title: "Garden Maintenance",
    cardTitle: "Garden Maintenance",
    cardBody:
      "Bed tidying, pruning, mulching and general upkeep so your gardens stay under control instead of slowly swallowing the yard.",
    cardLink: "Garden maintenance",
    tileBody: "Bed tidying, pruning, mulching and general upkeep.",
    tileImage: "spraying",
    tileAlt: "Garden beds maintained on a Lockyer Valley property",
  },
  {
    slug: "weed-control",
    nav: "Lawn Weed Control",
    title: "Lawn Weed Control",
    cardTitle: "Weed Management &amp; Lawn Weed Control",
    cardBody:
      "Targeted treatment for bindii, clover, nutgrass and broadleaf invaders — timed to the season so it actually works.",
    cardLink: "Lawn weed control",
    tileBody:
      "Targeted treatment for bindii, clover, nutgrass and broadleaf invaders.",
    tileImage: "clover-weeds",
    tileAlt: "Broadleaf weeds spreading through turf in Laidley QLD",
  },
  {
    slug: "fence-line-spraying",
    nav: "Fence Line Spraying",
    title: "Fence Line Spraying",
    cardTitle: "Fence Line Work",
    cardBody:
      "Fence line spraying to stop growth strangling your boundaries, protecting wire, posts and timber from the damp that rots them.",
    cardLink: "Fence line spraying",
    tileBody: "Fence line spraying to stop growth strangling your boundaries.",
    tileImage: "sprayers",
    tileAlt: "Spray units used for fence line weed control",
  },
  {
    slug: "hedging",
    nav: "Hedge Trimming",
    title: "Hedge Trimming",
    cardTitle: "Hedging Work",
    cardBody:
      "Hedge shaping that keeps screens dense and even, cut so light reaches the base instead of leaving it bare and leggy.",
    cardLink: "Hedge trimming",
    tileBody: "Hedge shaping that keeps screens dense and even.",
    tileImage: "backyard-neat",
    tileAlt: "Screening hedge along a property boundary in the Lockyer Valley",
  },
];

/** Verbatim Google reviews. Avatar colours match the Claude Design source. */
const reviews = [
  {
    name: "Keeley Mc",
    initial: "K",
    colour: "#2f6b4f",
    body: "Callum has been helping us keep our yard maintained for over a year now, Callum is kind and always has attention to detail. As 2 parents who work full time it's incredibly hard for us to keep ontop of our yard. Callum helps us enjoy our home and yard without us having to stress. He is trustworthy and always does a 10/10 job.",
  },
  {
    name: "Scott Commadeur",
    initial: "S",
    colour: "#8a5a2b",
    body: "Callum has reliably maintained my acreage lawns in Laidley, as well as my neighbours for some time now. He was able to clear the thick long grass that I was unable to with no troubles at all. He has also helped me with the transport of a ride-on mower to Brisbane, which I am very thankful for. Thanks Callum!",
  },
  {
    name: "Jody Meagher",
    initial: "J",
    colour: "#5a3e8a",
    body: "Highly recommend Callum's Mowing. He is professional, reliable and does an amazing job. Give him a try you won't be disappointed.",
  },
  {
    name: "Shay Eshman",
    initial: "S",
    colour: "#20456b",
    body: "Did an awesome on my yard done a perfect job will use his service again job highly recommend",
  },
];

module.exports = { site, areas, services, reviews, formFields };
