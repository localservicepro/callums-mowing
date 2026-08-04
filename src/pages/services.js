/**
 * The seven service detail pages plus the /services/ index.
 *
 * Each entry supplies its own copy; `serviceTemplate` assembles the shared
 * section order so every service page reads and behaves identically.
 */

const { site, areas, services } = require("../data");
const {
  faqSection,
  ctaSection,
  gallerySection,
  stepsSection,
  signsSection,
  whySection,
} = require("../layout");

const areaSentence = areas.join(", ").replace(/, ([^,]*)$/, " and $1");

/* Shared trust lines reused across the "why book us" panels. */
const INSURED =
  "<strong>Fully insured</strong> — public liability cover on every job, residential and commercial";
const RATED = `<strong>Rated ${site.rating.value} on Google</strong> across ${site.rating.count} reviews from Lockyer Valley property owners`;

/* -------------------------------------------------------------- content -- */

const serviceContent = {
  "lawn-mowing": {
    h1: "Lawn Mowing Services Lockyer Valley — Sharp Cuts, Clean Finish",
    metaTitle: "Lawn Mowing Services Lockyer Valley | Callum's Mowing",
    metaDescription:
      "Professional lawn mowing services across the Lockyer Valley. Residential and commercial blocks in Laidley, Gatton and Plainland. Call 0408 765 657.",
    lede: "Regular or one-off lawn mowing for residential, acreage and commercial properties from Laidley to Gatton. Fixed prices, no lock-in contracts.",
    heroImage: "verge-mown",
    heroAlt:
      "Ride-on mower cutting stripes into a residential lawn in Laidley QLD",
    cta: "Get a Free Quote",
    schemaDescription:
      "Residential and commercial lawn mowing across Laidley, Gatton, Plainland and the wider Lockyer Valley, including edging and blow-down on every visit.",

    introHeading: "What a Professional Cut Actually Involves",
    introBody: [
      "Our lawn mowing services in the Lockyer Valley cover the full job, not just a pass with the mower. We cut at the correct height for your grass type and the time of year, edge every hard surface and garden bed, then blow clippings off paths, driveways and entertaining areas before we leave.",
      "Cutting height matters more than most people realise. Removing more than a third of the leaf in one cut stresses the plant, opens gaps for weeds and leaves the lawn yellow for a week. We adjust the deck to suit couch, kikuyu or buffalo and to the growth rate at the time, which is why our lawn mowing services in the Lockyer Valley leave turf that greens up quickly instead of sulking.",
    ],
    introImage: "backyard-neat",
    introAlt:
      "Freshly cut backyard lawn after a mowing service in the Lockyer Valley",

    signsHeading: "Signs Your Grass Needs a Contractor",
    signs: [
      "Brown, frayed tips within a day or two of cutting — a clear sign of blunt blades tearing rather than slicing",
      "The mower bogging, stalling or leaving clumps because growth has got away from you",
      "Ragged, undefined edges where lawn is creeping over paths, driveways and garden beds",
      "Weeds spreading through thin patches, which usually follows irregular or scalped cutting",
      "The job now eating most of a weekend, or a block that's simply too large for a domestic machine",
      "An inspection, sale or event coming up and the property not being anywhere near presentable",
    ],

    stepsHeading: "How We Work Through a Property",
    steps: [
      {
        title: "Quote and walk-through",
        body: "We confirm block size, access, slope and grass type, then give you a fixed price before anything starts.",
      },
      {
        title: "Set the height",
        body: "Deck height is matched to the grass type and season, so we take the right amount off in one pass.",
      },
      {
        title: "Cut",
        body: "Open areas run with the ride-on; tight sections, gates and obstacles are handled with a push mower.",
      },
      {
        title: "Edge and trim",
        body: "Whipper snipper along fences, paths, driveways, beds and around structures for a defined line.",
      },
      {
        title: "Blow down and check",
        body: "Clippings cleared from hard surfaces, gates closed, and a final walk before we leave.",
      },
    ],

    whyHeading: "Why Property Owners Book Us Back",
    why: [
      "<strong>Blades sharpened on schedule</strong> — every lawn mowing visit cuts cleanly, so turf recovers faster",
      "<strong>Reliable scheduling</strong> with a message if weather forces us to move your day",
      INSURED,
      RATED,
      "<strong>No contracts</strong> — pause, skip or stop a schedule whenever you need",
    ],

    galleryHeading: "Recent Mowing Projects in Laidley and Surrounds",
    galleryIntro:
      "A sample of the blocks we've cut recently, from compact suburban yards to larger residential holdings.",
    gallery: [
      {
        img: "verge-after",
        alt: "Front lawn cut and edged on a fortnightly schedule in Laidley QLD",
        caption: "Fortnightly Residential Cut – Laidley",
      },
      {
        img: "overgrown-yard",
        alt: "Overgrown block returned to neat turf in Gatton QLD",
        caption: "Overgrown Block Reclaim – Gatton",
      },
      {
        img: "backyard-neat",
        alt: "Large flat back lawn cut on a Plainland property",
        caption: "Large Yard Mow – Plainland",
      },
      {
        img: "verge-before",
        alt: "Rental property lawn tidied before an inspection at Hatton Vale",
        caption: "Pre-Inspection Tidy – Hatton Vale",
      },
      {
        img: "fleet-mowers",
        alt: "Commercial mowing equipment on grounds at Regency Downs",
        caption: "Commercial Grounds – Regency Downs",
      },
      {
        img: "backyard-after",
        alt: "Sloped backyard cut cleanly in Kensington Grove",
        caption: "Sloped Backyard – Kensington Grove",
      },
    ],

    areasHeading: "Suburbs We Cover",
    areasBody: [
      "Based in Laidley, we mow throughout Plainland, Gatton, Regency Downs, Hatton Vale and Kensington Grove. Our regular runs mean most Lockyer Valley customers can be slotted into an existing route, which keeps travel costs down and scheduling tight. Outside these suburbs, give us a call — we can often accommodate you if we're already working in the area.",
      'Larger properties are handled under <a href="{P}services/acreage-mowing/">acreage and large blocks</a>, and every cut includes <a href="{P}services/edging/">edging and whipper snipping</a>.',
    ],

    faqs: [
      {
        q: "How much does lawn mowing cost in the Lockyer Valley?",
        a: "Price is driven by block size, how long the grass is, slope and the amount of edging required, and acreage is quoted separately per acre. Every quote is a fixed figure given before we start work, so the number you agree to is the number you pay.",
      },
      {
        q: "How long does a standard mowing service take?",
        a: "A typical suburban block in Laidley or Gatton takes 30 to 60 minutes including edging and blow-down. Larger residential properties run one to two hours. If grass has been left for months, the first visit takes longer because it often needs cutting in stages.",
      },
      {
        q: "How often should grass be cut here?",
        a: "Weekly to fortnightly from October through March when Lockyer Valley heat and storms push kikuyu and couch into rapid growth, then every three to four weeks over the cooler months. Most customers book fortnightly year-round and we adjust frequency as the seasons shift.",
      },
      {
        q: "Do you take the clippings away?",
        a: "Usually we mulch clippings back into the lawn, which returns nitrogen to the soil and is better for turf health. If growth is heavy or you'd prefer them removed, we can catch and dispose of them for an additional fee — just mention it when booking.",
      },
      {
        q: "Do you mow when it's been raining?",
        a: "We avoid cutting saturated ground. Lockyer Valley black soil holds water long after a storm passes, and mowing it wet leaves ruts, compacts the soil and gives a poor finish. We'll message you and move your visit to the next suitable day.",
      },
      {
        q: "Can you handle a lawn that's badly overgrown?",
        a: "Yes. Overgrown blocks are routine for us and we bring commercial machines built for it. Very long growth is usually cut in two stages, high first then lower a week later, so the turf isn't scalped and can recover properly.",
      },
    ],

    ctaHeading: "Book Your Next Cut",
    ctaBody:
      "One-off or ongoing, suburban or rural — tell us your suburb and block size and we'll give you a price today.",
  },

  "acreage-mowing": {
    h1: "Acreage Mowing Lockyer Valley — Big Blocks, Proper Machines",
    metaTitle: "Acreage Mowing Lockyer Valley | Callum's Mowing Laidley",
    metaDescription:
      "Acreage mowing across the Lockyer Valley. Large blocks, paddocks and sloped rural properties in Laidley, Hatton Vale and Regency Downs. Call 0408 765 657.",
    lede: "Acreage mowing from one-acre lifestyle blocks to large rural holdings — we cut the ground other operators turn down. Slopes, long growth and uneven terrain included.",
    heroImage: "acreage-garden",
    heroAlt: "Wide view of a mown acreage property in the Lockyer Valley",
    cta: "Get an Acreage Quote",
    schemaDescription:
      "Acreage and large-block mowing across the Lockyer Valley using slope-rated commercial machinery, including zoned cutting heights and fire-season clearing.",

    introHeading: "Large-Block Cutting, Done With the Right Gear",
    introBody: [
      "Acreage mowing in the Lockyer Valley is a different job to a suburban lawn, and it needs different equipment. Domestic ride-ons struggle on open rural ground: they overheat, they bog in soft soil, and they simply don't have the deck width to cover ground in a sensible timeframe. We run commercial machines sized for open areas and rated for slope work.",
      "Most of our acreage mowing across the Lockyer Valley falls into three buckets — presentable lawn areas around the house kept at a lower height, transition zones cut to a mid height, and outer paddock or boundary areas slashed for fire and snake control. We'll set those zones with you at quoting stage so you're not paying lawn rates for ground that only needs a rough cut.",
    ],
    introImage: "fleet-mowers",
    introAlt:
      "Commercial zero-turn and ride-on mowers used for acreage mowing in the Lockyer Valley",

    signsHeading: "When Your Block Needs Attention",
    signs: [
      "Grass over knee height across open areas — a genuine fire hazard heading into a Queensland summer",
      "Snakes and vermin becoming a regular sight near the house, sheds or kids' play areas",
      "Your domestic ride-on overheating, bogging or taking an entire weekend to get around the block",
      "Slopes or gullies you're not comfortable taking a machine onto",
      "Fence lines and boundaries disappearing under growth",
      "Council correspondence about overgrown land, or a property sale or inspection approaching",
    ],

    stepsHeading: "Our Approach on Rural Blocks",
    steps: [
      {
        title: "Site assessment",
        body: "We walk or drive the property to map slope, ground conditions, obstacles, stumps and soft spots.",
      },
      {
        title: "Zone the block",
        body: "House surrounds, transition areas and outer paddock are set at different cutting heights and priced accordingly.",
      },
      {
        title: "Stage the cut if needed",
        body: "Very heavy growth is taken down in two passes so material breaks down rather than smothering what's underneath.",
      },
      {
        title: "Cut and detail",
        body: "Open ground with the ride-on, then whipper snipper around trees, tanks, posts and structures.",
      },
      {
        title: "Clear boundaries",
        body: "Fence lines and driveway edges finished so the property reads tidy from the road.",
      },
    ],

    whyHeading: "Why Rural Owners Choose Us",
    why: [
      "<strong>Slope-rated machinery</strong> — we take on the sloped ground plenty of contractors decline",
      "<strong>Zoned pricing</strong> so you're not charged lawn rates for rough paddock cutting",
      "<strong>Local knowledge of black soil</strong> — we time visits so heavy machines don't rut a soft block",
      INSURED,
      "<strong>Seasonal acreage mowing schedules</strong> including fire-season clearing before the summer risk period",
    ],

    galleryHeading: "Recent Acreage Projects in the Lockyer Valley",
    galleryIntro:
      "Large-block work we've completed recently across the region's rural and lifestyle properties.",
    gallery: [
      {
        img: "acreage-garden",
        alt: "Five-acre lifestyle block freshly cut at Regency Downs",
        caption: "5-Acre Lifestyle Block – Regency Downs",
      },
      {
        img: "hero-fleet",
        alt: "Ride-on mowers set up for slope work at Hatton Vale",
        caption: "Slope Mowing – Hatton Vale",
      },
      {
        img: "overgrown-block",
        alt: "Heavy growth reduced to clean pasture on a Laidley paddock",
        caption: "Overgrown Paddock Reclaim – Laidley",
      },
      {
        img: "backyard-neat",
        alt: "House surrounds cut low with paddock beyond at Kensington Grove",
        caption: "Zoned House Surrounds – Kensington Grove",
      },
      {
        img: "trailer-mower",
        alt: "Ride-on mower loaded on a trailer for fire break clearing at Plainland",
        caption: "Fire Break Clearing – Plainland",
      },
      {
        img: "verge-mown",
        alt: "Rural property frontage prepped for sale in Gatton QLD",
        caption: "Pre-Sale Property Prep – Gatton",
      },
    ],

    areasHeading: "Rural Areas We Service",
    areasBody: [
      "We cover acreage and lifestyle blocks throughout Laidley, Regency Downs, Hatton Vale, Kensington Grove, Plainland and Gatton. This part of the Lockyer Valley is full of two-to-ten acre holdings that fall awkwardly between a domestic mower and a full agricultural contractor, and that gap is exactly where we operate.",
      'Most owners pair an acreage mow with <a href="{P}services/fence-line-spraying/">fence line spraying</a> so the boundaries are finished in the same visit.',
    ],

    faqs: [
      {
        q: "How much does acreage mowing cost?",
        a: "Acreage is priced per acre, and the rate depends on terrain, slope, grass length and obstacles. Blocks needing only a rough slash cost less per acre than areas maintained at lawn height. We quote on site so the figure reflects your actual ground.",
      },
      {
        q: "How long does it take to mow five acres?",
        a: "A five-acre block in reasonable condition generally takes three to five hours with commercial equipment. Heavy growth, steep sections or a lot of obstacles push that out, and severely overgrown properties around Laidley are often split across two visits.",
      },
      {
        q: "Can you mow steep or sloped ground?",
        a: "Yes. We run machinery rated for slope work and regularly handle the undulating blocks common through Hatton Vale and Regency Downs. During assessment we identify any sections too steep for machine safety and finish those with hand equipment instead.",
      },
      {
        q: "How often should acreage be cut?",
        a: "House surrounds usually need cutting every two to three weeks in the growing season. Outer paddock areas are typically slashed three to four times a year, with one pass timed before summer to reduce fire load. We'll build a schedule around your block.",
      },
      {
        q: "What are the signs my block has become a fire risk?",
        a: "Grass above knee height across open ground, dry standing growth carrying through from last season, and vegetation grown into fence lines and driveways all raise fire load. In the Lockyer Valley these conditions build fast after spring rain and should be cut back before summer.",
      },
      {
        q: "Do I need to be there when you mow?",
        a: "Not usually. Once we've assessed the property and agreed zones and pricing, most rural clients leave us to it. We just need gate access, any stock moved or secured, and a heads-up on hidden hazards like stumps, pipes or irrigation.",
      },
    ],

    ctaHeading: "Get Your Block Under Control",
    ctaBody:
      "Send us the address and rough acreage and we'll arrange a site visit and a fixed quote.",
  },

  edging: {
    h1: "Edging and Whipper Snipping Laidley — The Detail That Finishes a Lawn",
    metaTitle: "Edging &amp; Whipper Snipping Laidley | Callum's Mowing",
    metaDescription:
      "Edging and whipper snipping in Laidley and across the Lockyer Valley. Crisp lines along paths, driveways, fences and beds. Call 0408 765 657.",
    lede: "Crisp, defined lines along driveways, paths, fences and garden beds across the Lockyer Valley. Available with a mow or as a standalone tidy-up.",
    heroImage: "driveway-gate",
    heroAlt: "Crisp lawn edge cut along a driveway in Laidley QLD",
    cta: "Book a Tidy-Up",
    schemaDescription:
      "Lawn edging and whipper snipping across Laidley and the Lockyer Valley — defined lines along driveways, paths, fences and garden beds.",

    introHeading: "Why the Perimeter Matters More Than the Middle",
    introBody: [
      "Edging and whipper snipping in Laidley is what separates a lawn that's been cut from a property that looks maintained. A mower can only get so close to a hard surface or a garden bed. Everything it leaves behind — the fringe along the driveway, the shaggy line at the fence, the grass creeping into the mulch — is what the eye actually lands on.",
      "We handle both parts of the job. Edging cuts a vertical line where lawn meets concrete, pavers or bed, defining the boundary. Line trimming clears growth in spots a mower can't reach: around posts, tanks, letterboxes, air-conditioning units, downpipes and under low shrubs. Together they're the finishing pass that makes the whole property read sharp.",
    ],
    introImage: "verge-after",
    introAlt: "Sharp defined lawn edge beside a footpath in Laidley QLD",

    signsHeading: "Signs Your Property Needs This Work",
    signs: [
      "Grass creeping over the edges of concrete paths, driveways or paved areas",
      "The boundary between lawn and garden beds blurring into one another",
      "Long growth around fence posts, tanks, clotheslines and under gates",
      "A neat lawn that somehow still looks untidy from the street",
      "Grass and weeds coming up through expansion joints and paver gaps",
      "An inspection or open home coming up and the property looking soft around the edges",
    ],

    stepsHeading: "How We Work",
    steps: [
      {
        title: "Define the line",
        body: "We work out where the edge should sit — often reclaiming several centimetres of hard surface that grass has taken over.",
      },
      {
        title: "Cut vertically",
        body: "A clean vertical face against concrete or pavers, straight along runs and smoothly curved around beds.",
      },
      {
        title: "Trim the obstacles",
        body: "Line trimming around posts, structures, taps, tanks and anything the mower can't get close to.",
      },
      {
        title: "Clear the joints",
        body: "Growth pulled from expansion joints, paver gaps and driveway cracks.",
      },
      {
        title: "Blow down",
        body: "All debris cleared from hard surfaces so the finish is visible immediately.",
      },
    ],

    whyHeading: "Why Book Us for It",
    why: [
      "<strong>Consistent lines visit to visit</strong> — the edge holds its position rather than wandering",
      "<strong>Bundled with your mow</strong> at no extra charge on regular schedules",
      "<strong>Careful around infrastructure</strong> — no chewed downpipes, cables or irrigation heads",
      INSURED,
      RATED,
    ],

    galleryHeading: "Recent Edging Projects in Laidley and Surrounds",
    galleryIntro:
      "Perimeter and detail work completed across the region's residential and commercial properties.",
    gallery: [
      {
        img: "driveway-gate",
        alt: "Driveway with a sharp cut lawn edge in Laidley QLD",
        caption: "Driveway Edging – Laidley",
      },
      {
        img: "acreage-garden",
        alt: "Garden bed borders defined against lawn in Gatton QLD",
        caption: "Garden Bed Borders – Gatton",
      },
      {
        img: "verge-after",
        alt: "Footpath edge reclaimed from creeping grass in Plainland QLD",
        caption: "Footpath Reclaim – Plainland",
      },
      {
        img: "backyard-after",
        alt: "Fence line trimmed clear of long growth at Hatton Vale",
        caption: "Fence Line Trim – Hatton Vale",
      },
      {
        img: "overgrown-yard",
        alt: "Paved courtyard edges cleared of grass at Regency Downs",
        caption: "Paved Courtyard Detail – Regency Downs",
      },
      {
        img: "verge-mown",
        alt: "Commercial kerb edging along a street frontage at Kensington Grove",
        caption: "Commercial Kerb Edging – Kensington Grove",
      },
    ],

    areasHeading: "Where We Provide This Service",
    areasBody: [
      "We cover Laidley, Plainland, Gatton, Regency Downs, Hatton Vale and Kensington Grove. Most customers add this to a regular mowing schedule, but we're happy to take it on as a standalone job — particularly common for rental properties across the Lockyer Valley being prepared for inspection or handover.",
      'Edging is included with every <a href="{P}services/lawn-mowing/">lawn mowing service</a> we run.',
    ],

    faqs: [
      {
        q: "What is the difference between edging and whipper snipping?",
        a: "Edging cuts a clean vertical line where lawn meets a hard surface or garden bed, defining the boundary. Whipper snipping, or line trimming, clears grass from areas a mower can't reach — around posts, tanks, structures and tight corners. Most properties need both.",
      },
      {
        q: "How much does edging cost in Laidley?",
        a: "It's included at no extra charge with any regular mowing service. As a standalone job, pricing depends on total linear metres and how overgrown the edges are. Badly overgrown edges needing reclamation cost more on the first visit, then drop to standard rates.",
      },
      {
        q: "How long does edging take?",
        a: "On a standard residential block it adds roughly 15 to 25 minutes to a mowing visit. A first-time reclamation, where grass has grown well over the concrete, can take an hour or more, but subsequent visits are much faster once the line is established.",
      },
      {
        q: "How often should edges be cut?",
        a: "Every visit, ideally. Edges grow back faster than they look, and letting them go for a month means starting the reclamation over. Across Lockyer Valley properties on fortnightly mowing, edging every service keeps the line permanently defined with minimal effort.",
      },
      {
        q: "Do you trim around delicate areas like irrigation and cabling?",
        a: "Yes, carefully. Line trimmers can damage sprinkler heads, low-voltage cabling, downpipes and young plants. Point out anything vulnerable when we quote and we'll work around it by hand or adjust our approach in that section.",
      },
    ],

    ctaHeading: "Sharpen Up Your Property",
    ctaBody:
      "Add it to your mow or book it on its own. Either way, it's the fastest visible improvement you can make to a property.",
  },

  "garden-maintenance": {
    h1: "Garden Maintenance Gatton, Laidley and the Lockyer Valley",
    metaTitle: "Garden Maintenance Gatton &amp; Laidley | Callum's Mowing",
    metaDescription:
      "Garden maintenance across Gatton, Laidley and the Lockyer Valley. Bed tidying, pruning, mulching and seasonal upkeep. Free quotes — call 0408 765 657.",
    lede: "Beds tidied, shrubs pruned, mulch topped up and green waste taken away. Keep your gardens looking intentional instead of overgrown.",
    heroImage: "acreage-garden",
    heroAlt: "Tidy garden beds framing a house on a Gatton property",
    cta: "Book a Garden Tidy-Up",
    schemaDescription:
      "Scheduled garden maintenance across Gatton, Laidley and the Lockyer Valley — hand weeding, pruning, mulching and green waste removal.",

    introHeading: "Regular Upkeep, Not Just Rescue Jobs",
    introBody: [
      "Garden maintenance in Gatton and the surrounding Lockyer Valley covers everything outside the lawn itself — the beds, borders, shrubs, mulch and general growth that quietly gets away from you between weekends. We handle it on a schedule so it never reaches the point of needing a full weekend rescue.",
      "A typical visit includes weeding beds by hand, cutting back overgrown shrubs, deadheading and shaping ornamentals, topping up mulch where it's thinned out, clearing leaf litter from paths and beds, and removing the green waste. For customers who've let things run, we start with a one-off reset and then move to ongoing garden maintenance across Gatton and nearby suburbs to hold that standard.",
    ],
    introImage: "spraying",
    introAlt:
      "Gardener treating weeds through mulched garden beds on a Lockyer Valley property",

    signsHeading: "Signs Your Garden Needs a Hand",
    signs: [
      "Weeds outnumbering plants in the beds, particularly after a wet Lockyer Valley summer",
      "Shrubs grown across paths, windows or driveways, or gone leggy and sparse at the base",
      "Mulch thinned to bare soil, letting weeds germinate and beds dry out fast",
      "Leaf litter and dead material building up in beds and along fence lines",
      "Plants crowding each other out because nothing has been thinned or shaped in years",
      "The garden feeling like a job you keep putting off rather than something you enjoy",
    ],

    stepsHeading: "What a Visit Looks Like",
    steps: [
      {
        title: "Assess and prioritise",
        body: "We look at what's urgent, what's seasonal and what can wait, then agree the scope with you.",
      },
      {
        title: "Clear the beds",
        body: "Hand weeding, removal of dead material, and clearing leaf litter from beds and borders.",
      },
      {
        title: "Prune and shape",
        body: "Cutting back overgrowth, thinning crowded plantings and shaping shrubs at the right time for the species.",
      },
      {
        title: "Mulch",
        body: "Topping up to suppress weeds, hold moisture and give beds a clean finish.",
      },
      {
        title: "Clean up and remove",
        body: "Paths swept, hard surfaces blown down, and all green waste taken off site.",
      },
    ],

    whyHeading: "Why Book Us for Your Gardens",
    why: [
      "<strong>Garden maintenance by the same crew as your mowing</strong> — one contractor, one invoice, one point of contact",
      "<strong>Green waste removed</strong> so you're not left with piles to deal with",
      "<strong>Seasonal timing</strong> — pruning done when plants can recover, not whenever it's convenient",
      INSURED,
      RATED,
    ],

    galleryHeading: "Recent Garden Projects in Gatton and Surrounds",
    galleryIntro:
      "Bed work, pruning and mulching completed recently on properties around the region.",
    gallery: [
      {
        img: "acreage-garden",
        alt: "Overgrown garden bed cleared and mulched in Gatton QLD",
        caption: "Full Garden Reset – Gatton",
      },
      {
        img: "spraying",
        alt: "Freshly mulched front garden beds in Laidley QLD",
        caption: "Mulch Top-Up – Laidley",
      },
      {
        img: "sprayers",
        alt: "Ornamental shrubs pruned and beds treated on a Plainland property",
        caption: "Shrub Pruning – Plainland",
      },
      {
        img: "driveway-gate",
        alt: "Cleared pathway and border beside a garden at Hatton Vale",
        caption: "Path &amp; Border Clearing – Hatton Vale",
      },
      {
        img: "backyard-after",
        alt: "Rental property garden and lawn tidied before inspection at Regency Downs",
        caption: "Pre-Inspection Tidy – Regency Downs",
      },
      {
        img: "backyard-neat",
        alt: "Established garden cut back for the season at Kensington Grove",
        caption: "Seasonal Cut-Back – Kensington Grove",
      },
    ],

    areasHeading: "Areas We Service",
    areasBody: [
      "We look after gardens throughout Gatton, Laidley, Plainland, Regency Downs, Hatton Vale and Kensington Grove. The Lockyer Valley's growing conditions are generous — which is excellent for plants and equally excellent for weeds — so most properties here benefit from a scheduled visit rather than waiting until things are out of hand.",
      'Screening plants and formal borders are covered under <a href="{P}services/hedging/">hedge trimming</a>.',
    ],

    faqs: [
      {
        q: "What does a garden maintenance service include?",
        a: "A standard visit covers hand weeding of beds, pruning and shaping shrubs, removing dead growth, clearing leaf litter, topping up mulch and taking away green waste. Larger jobs like replanting, bed construction or major tree work are quoted separately.",
      },
      {
        q: "How much does garden maintenance cost in Gatton?",
        a: "Regular scheduled visits are priced on garden size and scope. One-off rescue jobs on badly overgrown properties cost more because of the volume of work and waste removal, and we always quote those on site first so the figure is accurate.",
      },
      {
        q: "How long does a garden tidy-up take?",
        a: "A maintenance visit on established beds usually takes one to two hours. A first-time reset where gardens have been neglected for a season or more can take half a day or longer, especially once green waste removal is factored in.",
      },
      {
        q: "When is the best time to prune in the Lockyer Valley?",
        a: "It depends on the species, but late winter into early spring suits most ornamentals here, before the growth flush begins. Flowering shrubs are best pruned just after they finish flowering. We time cut-backs to the plant rather than to the calendar.",
      },
      {
        q: "Do you take the green waste away?",
        a: "Yes. All prunings, weeds and dead material are removed and disposed of properly as part of the service. You're not left with a pile by the fence waiting for a green waste run, which is a common frustration with cheaper operators.",
      },
      {
        q: "Can you maintain gardens at a rental or investment property?",
        a: "Absolutely. We service a number of rentals and investment properties across Gatton and Laidley for owners and property managers, working to a set schedule and invoicing directly. Photos on completion can be provided if your agent requires them.",
      },
    ],

    ctaHeading: "Take the Garden Off Your To-Do List",
    ctaBody:
      "Whether it needs a full reset or just regular upkeep, we'll quote it honestly and get it under control.",
  },

  "weed-control": {
    h1: "Lawn Weed Control Lockyer Valley — Treat It Before It Seeds",
    metaTitle: "Lawn Weed Control Lockyer Valley | Callum's Mowing",
    metaDescription:
      "Lawn weed control and weed management across the Lockyer Valley. Bindii, clover, nutgrass and broadleaf treatment in Laidley and Gatton. Call 0408 765 657.",
    lede: "Weed control for bindii, clover, nutgrass and broadleaf invaders across Laidley, Gatton and surrounds. Timed to the season so it actually works.",
    heroImage: "clover-weeds",
    heroAlt:
      "Clover and broadleaf weeds spreading through thin turf in Laidley QLD",
    cta: "Book a Weed Treatment",
    schemaDescription:
      "Selective lawn weed control across the Lockyer Valley targeting bindii, clover, nutgrass and broadleaf weeds, timed to the treatment window.",

    introHeading: "Selective Treatment, Not Blanket Spraying",
    introBody: [
      "Lawn weed control in the Lockyer Valley means identifying what's actually growing in your turf and treating it with a product that kills the weed without killing the grass around it. Bindii, clover, cudweed, catsear, khaki weed and nutgrass all behave differently and don't respond to the same approach.",
      "Timing does most of the heavy lifting. Bindii is the clearest example: treat it in late autumn or winter while it's small and soft and it disappears. Wait until you can feel the prickles underfoot in spring and it has already seeded, which means dealing with it again next year. Our lawn weed control programs across the Lockyer Valley are built around those windows rather than reacting once the damage is visible.",
    ],
    introImage: "weed-spray-yard",
    introAlt:
      "Spray unit applying selective weed treatment to a back lawn in the Lockyer Valley",

    signsHeading: "Signs You Have a Weed Problem",
    signs: [
      "Flat rosette-shaped plants spreading through thin turf in autumn — early-stage bindii",
      "Prickles underfoot in spring and summer, meaning bindii has already set seed",
      "Clover patches taking over, usually a sign of low soil nitrogen",
      "Bright green, fast-growing spiky clumps standing above the lawn — nutgrass",
      "Broad-leafed plants that survive mowing and regrow within days",
      "Bare or thinning patches that weeds colonise before grass can recover",
    ],

    stepsHeading: "How We Treat a Lawn",
    steps: [
      {
        title: "Identify",
        body: "We inspect the turf and identify the specific weed species present — treatment depends entirely on this.",
      },
      {
        title: "Check the grass type",
        body: "Buffalo in particular is sensitive to certain herbicides, so product selection is matched to your turf.",
      },
      {
        title: "Time the application",
        body: "Treatment is scheduled for the right growth stage and suitable weather, not sprayed before rain or in extreme heat.",
      },
      {
        title: "Apply selectively",
        body: "Even coverage across affected areas, or spot treatment for isolated outbreaks.",
      },
      {
        title: "Follow up",
        body: "A review visit to check the result and treat anything that survived the first pass.",
      },
    ],

    whyHeading: "Why Use a Contractor Instead of Supermarket Products",
    why: [
      "<strong>Correct identification</strong> — the wrong product on the wrong weed wastes time and money",
      "<strong>Turf-safe selection</strong> so buffalo and other sensitive grasses aren't damaged",
      "<strong>Seasonal weed control programs</strong> that hit the treatment window instead of missing it",
      "<strong>Fully insured</strong> — public liability cover on all chemical application",
      "<strong>Combined with mowing</strong> so treatment and cutting are coordinated rather than working against each other",
    ],

    galleryHeading: "Recent Weed Treatment Projects in the Lockyer Valley",
    galleryIntro:
      "Turf recovery and weed programs completed on properties around the region.",
    gallery: [
      {
        img: "clover-weeds",
        alt: "Weed-infested verge lawn before treatment in Laidley QLD",
        caption: "Bindii Program – Laidley",
      },
      {
        img: "verge-mown",
        alt: "Clover cleared from couch turf after treatment in Gatton QLD",
        caption: "Clover Treatment – Gatton",
      },
      {
        img: "weed-spray-yard",
        alt: "Nutgrass clumps spot sprayed on a back lawn in Plainland QLD",
        caption: "Nutgrass Control – Plainland",
      },
      {
        img: "backyard-before",
        alt: "Broadleaf weeds through kikuyu turf before spraying at Hatton Vale",
        caption: "Broadleaf Spray – Hatton Vale",
      },
      {
        img: "spraying",
        alt: "Spot spraying weeds on an acreage property at Regency Downs",
        caption: "Acreage Spot Spraying – Regency Downs",
      },
      {
        img: "backyard-after",
        alt: "Recovered thick turf after a weed control program in Kensington Grove",
        caption: "Turf Recovery Program – Kensington Grove",
      },
    ],

    areasHeading: "Where We Treat",
    areasBody: [
      "We provide weed treatment across Laidley, Plainland, Gatton, Regency Downs, Hatton Vale and Kensington Grove. Growing conditions through the Lockyer Valley mean weeds establish quickly after summer storms and again through the cooler months, so most properties here benefit from at least two treatments a year rather than a single reactive spray.",
      'Treatment works best alongside a <a href="{P}services/lawn-mowing/">regular mowing schedule</a> that keeps turf thick enough to crowd weeds out.',
    ],

    faqs: [
      {
        q: "What is lawn weed control?",
        a: "It's the selective treatment of unwanted plants in turf using herbicides that target the weed while leaving the grass unharmed. It differs from general weed spraying, which kills everything it touches and is used on driveways, fence lines and paths instead of lawns.",
      },
      {
        q: "How much does weed treatment cost in the Lockyer Valley?",
        a: "A single treatment is priced on lawn size and infestation level. Seasonal programs covering two or three applications a year work out cheaper per visit and give noticeably better long-term results, and we confirm the figure before any work starts.",
      },
      {
        q: "How long does it take for weeds to die after treatment?",
        a: "You'll usually see curling and yellowing within three to seven days, with full die-off in two to three weeks. Established weeds like nutgrass often need a second application. We avoid spraying immediately before rain, which would wash the product off before it's absorbed.",
      },
      {
        q: "When should bindii be treated?",
        a: "Late autumn to mid winter, while the plants are young and haven't formed prickles. This is the single most common mistake we see across Laidley and Gatton — people call in spring once they can feel it, by which point it has already seeded for next season.",
      },
      {
        q: "Is weed spray safe around children and pets?",
        a: "Once the application has dried, typically within a few hours, treated areas are generally safe for normal use. We'll advise a specific re-entry period on the day based on the product used and conditions. Keep pets and children off the lawn until it's fully dry.",
      },
      {
        q: "Why do the same weeds keep coming back?",
        a: "Usually because the underlying turf is thin, letting seed germinate in the gaps. Weed treatment removes the symptom; thicker, healthier grass prevents recurrence. We often pair treatment with adjusted mowing heights and a fertilising recommendation to close those gaps.",
      },
    ],

    ctaHeading: "Get Ahead of Next Season",
    ctaBody:
      "The best time to treat is before you can see the problem. Call and we'll tell you what's in your lawn and when to hit it.",
  },

  "fence-line-spraying": {
    h1: "Fence Line Spraying Lockyer Valley — Keep Your Boundaries Clear",
    metaTitle: "Fence Line Spraying Lockyer Valley | Callum's Mowing",
    metaDescription:
      "Fence line spraying across the Lockyer Valley. Keep boundaries, fences and driveways clear of growth in Laidley, Gatton and Plainland. Call 0408 765 657.",
    lede: "Stop growth swallowing your fences, gates and driveways. Clean, defined boundary lines on rural and residential properties across the region.",
    heroImage: "verge-mown",
    heroAlt:
      "Long boundary strip cleared beside a fence on a Lockyer Valley property",
    cta: "Get a Quote",
    schemaDescription:
      "Fence line and boundary spraying across the Lockyer Valley using knockdown and residual herbicides to keep fences, gates and driveways clear.",

    introHeading: "Why Boundaries Need Chemical Control, Not a Whipper Snipper",
    introBody: [
      "Boundary spraying across the Lockyer Valley uses a knockdown or residual herbicide to maintain a clear strip beneath and beside fencing, where a mower can't reach and trimming is slow, awkward and repetitive. On a long rural boundary, spraying does in one pass what would otherwise take hours of line trimming several times a season.",
      "There's a practical case beyond appearance. Growth against a fence traps moisture and accelerates corrosion on wire and steel posts. It hides damage, so you don't notice a break until stock are out. It carries fire straight along a boundary in summer. And on timber fencing it holds damp against the base of the palings, which is where rot starts. Regular treatment protects the asset, not just the look.",
    ],
    introImage: "sprayers",
    introAlt:
      "Backpack spray units used for fence line and boundary weed control",

    signsHeading: "Signs Your Boundaries Need Treatment",
    signs: [
      "Grass and weeds grown up through and over the wire, hiding the fence itself",
      "Vines and woody regrowth pulling on wire or leaning posts out of line",
      "Dry standing growth along the boundary heading into fire season",
      "Gates that no longer swing clear because of growth at the base",
      "Weeds pushing up through gravel driveways, around tanks and along shed edges",
      "Trimming the same fence line four or five times a season with no lasting result",
    ],

    stepsHeading: "Our Process",
    steps: [
      {
        title: "Walk the boundary",
        body: "We identify growth types, check for desirable plantings and note any sensitive areas like waterways, tanks or vegetable gardens.",
      },
      {
        title: "Select the product",
        body: "Knockdown for immediate clearing, or a residual mix where you want the strip to stay clear for months.",
      },
      {
        title: "Cut back heavy growth first",
        body: "Where necessary, so spray reaches the base of the plants rather than just the tops.",
      },
      {
        title: "Apply in suitable conditions",
        body: "Low wind to prevent drift, and no rain forecast that would wash off the application.",
      },
      {
        title: "Follow up",
        body: "A return pass on anything that survives, plus a scheduled repeat before growth re-establishes.",
      },
    ],

    whyHeading: "Why Use Us",
    why: [
      "<strong>Drift-conscious application</strong> — we work in the right conditions and protect adjacent plantings and pasture",
      "<strong>Residual options</strong> so boundaries stay clear for months rather than weeks",
      "<strong>Long runs handled efficiently</strong> — acreage boundaries done in a single visit",
      "<strong>Fully insured</strong> — public liability cover on chemical application",
      "<strong>Bundled with mowing</strong> so your whole property is handled by one contractor",
    ],

    galleryHeading: "Recent Boundary Projects in the Lockyer Valley",
    galleryIntro:
      "Fence and boundary work completed across rural and residential properties in the region.",
    gallery: [
      {
        img: "acreage-garden",
        alt: "Rural boundary strip cleared of growth at Hatton Vale",
        caption: "Rural Boundary Strip – Hatton Vale",
      },
      {
        img: "backyard-after",
        alt: "Residential fence line cleared at the base in Laidley QLD",
        caption: "Residential Fence Line – Laidley",
      },
      {
        img: "driveway-gate",
        alt: "Driveway edges sprayed clear of weeds in Gatton QLD",
        caption: "Driveway Edge Spraying – Gatton",
      },
      {
        img: "overgrown-block",
        alt: "Shed and tank surrounds cleared of growth in Plainland QLD",
        caption: "Shed &amp; Tank Surrounds – Plainland",
      },
      {
        img: "verge-mown",
        alt: "Fire break strip cut and sprayed along a property line at Regency Downs",
        caption: "Fire Break Strip – Regency Downs",
      },
      {
        img: "clover-weeds",
        alt: "Overgrown boundary restored to a clean strip at Kensington Grove",
        caption: "Boundary Reclaim – Kensington Grove",
      },
    ],

    areasHeading: "Areas We Cover",
    areasBody: [
      "We provide fence line spraying throughout Laidley, Plainland, Gatton, Regency Downs, Hatton Vale and Kensington Grove. Rural and lifestyle blocks across the Lockyer Valley often carry hundreds of metres of fencing, which makes this one of the highest-value services we offer — the time saved compared with trimming it by hand is substantial. Most owners pair it with an acreage mow so the whole property, boundaries included, is finished in a single visit rather than spread across separate bookings with different contractors.",
      'Inside the lawn itself, weeds are handled under <a href="{P}services/weed-control/">lawn weed control</a>.',
    ],

    faqs: [
      {
        q: "What is fence line spraying?",
        a: "It's the application of herbicide along a boundary to maintain a clear strip beneath and around fencing, where mowers can't reach. It keeps fences visible and accessible, reduces fire load, and prevents growth from damaging wire, posts and timber palings.",
      },
      {
        q: "How much does fence line spraying cost?",
        a: "Pricing is per linear metre, with rates dropping on longer runs. Heavily overgrown boundaries needing cutting back before spraying cost more on the first visit. We quote after walking the boundary so the figure is accurate rather than a guess over the phone.",
      },
      {
        q: "How long does it stay clear?",
        a: "A knockdown treatment keeps the line clear for roughly six to twelve weeks depending on rainfall. A residual product typically holds for four to six months. Most Lockyer Valley properties settle into two or three applications a year to stay on top of it.",
      },
      {
        q: "Will the spray drift onto my garden or pasture?",
        a: "Not if it's applied correctly. We spray in low wind conditions, use appropriate nozzles to reduce fine droplets, and shield sensitive areas. Point out any gardens, fruit trees or grazing paddocks when we quote and we'll adjust our approach accordingly.",
      },
      {
        q: "Is it safe around stock and pets?",
        a: "Once the application has dried, treated strips are generally safe. Withholding periods vary by product, so we'll give you a specific timeframe on the day — particularly important on rural blocks around Hatton Vale and Regency Downs where stock graze near boundaries.",
      },
    ],

    ctaHeading: "Reclaim Your Fence Lines",
    ctaBody:
      "Tell us roughly how many metres of boundary you've got and we'll give you a price per metre.",
  },

  hedging: {
    h1: "Hedge Trimming Laidley — Sharp Lines, Dense Screens",
    metaTitle: "Hedge Trimming Laidley &amp; Gatton | Callum's Mowing",
    metaDescription:
      "Professional hedge trimming in Laidley, Gatton and across the Lockyer Valley. Shaping, reduction and screening hedges maintained. Call 0408 765 657.",
    lede: "Shaping, reduction and ongoing maintenance for privacy screens, driveway hedges and formal borders across the Lockyer Valley.",
    heroImage: "backyard-neat",
    heroAlt:
      "Shaped hedge and screening along a property boundary in Laidley QLD",
    cta: "Book a Hedge Trim",
    schemaDescription:
      "Hedge trimming, shaping and height reduction across Laidley, Gatton and the Lockyer Valley for privacy screens, driveway hedges and formal borders.",

    introHeading: "Cutting for Density, Not Just Shape",
    introBody: [
      "Hedge trimming in Laidley is about more than taking the top off. A well-maintained hedge is cut so light reaches the lower foliage, which keeps the base dense and the screen solid. Cut it flat-sided or wider at the top and the bottom thins out, leaving the gappy, leggy look that ruins a privacy screen.",
      "We taper hedges slightly — marginally wider at the base than the top — so sunlight reaches the whole face. We also cut back into the growth rather than skimming the tips, which is what encourages branching and thickens the screen over time. Whether it's murraya, lilly pilly, photinia or viburnum, the same principle drives every hedge trimming job we take on in Laidley and the surrounding towns.",
    ],
    introImage: "acreage-garden",
    introAlt:
      "Dense screening hedge and shaped shrubs on a Lockyer Valley property",

    signsHeading: "Signs Your Hedge Needs Work",
    signs: [
      "Thin, woody bare patches at the base with foliage only near the top",
      "The hedge grown wider at the top than the bottom, shading out its own lower growth",
      "Growth pushing across paths, driveways, windows or over a neighbour's boundary",
      "An uneven, wandering top line that draws the eye for the wrong reasons",
      "Gaps in what's meant to be a privacy screen",
      "Dead or diseased sections that haven't been cut out",
    ],

    stepsHeading: "How We Trim",
    steps: [
      {
        title: "Assess the species and condition",
        body: "Different plants tolerate different levels of cutback, and timing matters for flowering varieties.",
      },
      {
        title: "Set the lines",
        body: "We agree the target height, width and profile before starting, using string lines on formal hedges for a true finish.",
      },
      {
        title: "Cut the faces first, then the top",
        body: "Working sides before the top gives a cleaner, more accurate final line.",
      },
      {
        title: "Taper the profile",
        body: "So the base sits slightly wider than the crown and lower foliage keeps its light.",
      },
      {
        title: "Clear and remove",
        body: "All clippings raked, blown down and taken off site.",
      },
    ],

    whyHeading: "Why Book Us",
    why: [
      "<strong>Species-appropriate hedge trimming</strong> — we don't cut a lilly pilly like a murraya",
      "<strong>Straight, level lines</strong> using string guides on formal and driveway hedges",
      "<strong>Clippings removed</strong> as standard, not left in a pile",
      "<strong>Fully insured</strong> — public liability cover including work at height",
      RATED,
    ],

    galleryHeading: "Recent Hedge Projects in Laidley and Surrounds",
    galleryIntro:
      "Screening, formal and boundary hedges we've shaped recently around the region.",
    gallery: [
      {
        img: "acreage-garden",
        alt: "Formal driveway hedge with sharp lines in Laidley QLD",
        caption: "Formal Driveway Hedge – Laidley",
      },
      {
        img: "backyard-neat",
        alt: "Tall privacy screen trimmed along a Gatton property boundary",
        caption: "Privacy Screen Trim – Gatton",
      },
      {
        img: "overgrown-yard",
        alt: "Overgrown hedge reduced in height on a Plainland property",
        caption: "Height Reduction – Plainland",
      },
      {
        img: "backyard-after",
        alt: "Boundary hedge squared along a fence at Hatton Vale",
        caption: "Boundary Hedge – Hatton Vale",
      },
      {
        img: "spraying",
        alt: "Lilly pilly screen restored to density at Regency Downs",
        caption: "Lilly Pilly Restoration – Regency Downs",
      },
      {
        img: "hero-fleet",
        alt: "Commercial entrance hedging maintained at Kensington Grove",
        caption: "Commercial Entry Hedging – Kensington Grove",
      },
    ],

    areasHeading: "Where We Work",
    areasBody: [
      "We trim hedges across Laidley, Plainland, Gatton, Regency Downs, Hatton Vale and Kensington Grove. Lilly pilly and murraya screens are everywhere through the Lockyer Valley, and both put on serious growth through our warm, wet summers — which is why most properties here need two to three cuts a year to hold a sharp line.",
      'Beds, borders and mulch around those hedges are covered under <a href="{P}services/garden-maintenance/">garden maintenance</a>.',
    ],

    faqs: [
      {
        q: "How much does hedge trimming cost in Laidley?",
        a: "Pricing depends on hedge length, height and how far it's been left to grow. Overgrown hedges needing major reduction cost more on the first visit, then drop to standard maintenance rates afterwards. You get a fixed figure before we start.",
      },
      {
        q: "How long does hedge trimming take?",
        a: "A single residential hedge usually takes one to two hours including clean-up and clipping removal. Long boundary screens or a full property of hedging can run half a day or more, particularly where access requires ladders or elevated platforms. A first cut on something badly overgrown always takes longer than the maintenance visits that follow it, because we're establishing the profile from scratch.",
      },
      {
        q: "How often should hedges be trimmed?",
        a: "Two to three times a year suits most hedges in the Lockyer Valley, with the main cut in late spring or early summer after the growth flush. Formal hedges where you want crisp lines year-round benefit from three or four visits.",
      },
      {
        q: "Can an overgrown hedge be brought back?",
        a: "Usually yes, though it takes patience. Hard reduction is done in stages across one to two seasons so the plant isn't shocked and can regenerate foliage on the cut faces. Some species regrow readily from bare wood; others need a gentler, staged approach.",
      },
      {
        q: "What are the signs a hedge has been trimmed badly?",
        a: "Bare woody legs with foliage only up top, sides that flare outward toward the crown, and torn rather than cleanly cut leaves. Ragged, browning leaf edges a week after trimming indicate blunt blades crushing the foliage instead of slicing it.",
      },
      {
        q: "Do you remove the clippings?",
        a: "Yes. Raking, blowing down and removing all clippings is included as standard on every hedge job we do around Laidley and Gatton. You're left with a clean finish rather than a green waste pile to deal with yourself.",
      },
    ],

    ctaHeading: "Get Your Hedges Back in Line",
    ctaBody:
      "Whether it's a single driveway hedge or a full property of screening, we'll quote it and get it sharp.",
  },
};

/* ------------------------------------------------------------- template -- */

function serviceTemplate(service, c) {
  return (p) => `
  <section class="hero hero--page">
    <img class="hero__media" src="${p}img/${c.heroImage}.webp" alt="${c.heroAlt}" width="1600" height="900" fetchpriority="high" decoding="async" />
    <div class="hero__scrim"></div>
    <div class="shell hero__body">
      <nav class="crumbs" aria-label="Breadcrumb" data-reveal>
        <a href="${p}">${site.name}</a> / <a href="${p}services/">Services</a> / ${service.title}
      </nav>
      <h1 class="h-page" data-reveal>${c.h1}</h1>
      <p class="lede" data-reveal>${c.lede}</p>
      <div data-reveal><a class="btn btn--lime" href="${site.phoneHref}">${c.cta}</a></div>
    </div>
  </section>

  <section class="section section--sm">
    <div class="shell grid-split">
      <div data-reveal>
        <h2 class="h-block">${c.introHeading}</h2>
        ${c.introBody.map((t) => `<p class="prose" style="margin-top:20px">${t}</p>`).join("\n        ")}
      </div>
      <img class="media-frame" src="${p}img/${c.introImage}.webp" alt="${c.introAlt}" width="900" height="700" loading="lazy" decoding="async" data-reveal />
    </div>
  </section>

  ${signsSection(c.signsHeading, c.signs)}
  ${stepsSection(c.stepsHeading, c.steps)}
  ${whySection(c.whyHeading, c.why)}
  ${gallerySection(p, {
    heading: c.galleryHeading,
    intro: c.galleryIntro,
    items: c.gallery,
  })}

  <section class="section section--sm">
    <div class="shell">
      <h2 class="h-block" data-reveal>${c.areasHeading}</h2>
      ${c.areasBody
        .map(
          (t) =>
            `<p class="prose" style="max-width:78ch;margin-top:18px" data-reveal>${t.replace(/\{P\}/g, p)}</p>`
        )
        .join("\n      ")}
      <div class="areas" style="margin-top:32px" data-reveal-group>
        ${areas.map((a) => `<div data-reveal>${a}</div>`).join("\n        ")}
      </div>
    </div>
  </section>

  ${faqSection(c.faqs)}
  ${ctaSection(p, { heading: c.ctaHeading, body: c.ctaBody })}`;
}

/* ---------------------------------------------------------------- export -- */

const servicePages = services.map((s) => {
  const c = serviceContent[s.slug];
  return {
    path: `services/${s.slug}`,
    title: c.metaTitle,
    description: c.metaDescription,
    ogImage: c.heroImage,
    breadcrumbs: [
      { name: "Services", path: "services" },
      { name: s.title.replace(/&amp;/g, "&"), path: `services/${s.slug}` },
    ],
    serviceSchema: {
      name: s.title.replace(/&amp;/g, "&"),
      description: c.schemaDescription,
    },
    faqs: c.faqs,
    body: serviceTemplate(s, c),
  };
});

const servicesIndex = {
  path: "services",
  title: "Lawn &amp; Garden Services Lockyer Valley | Callum's Mowing",
  description:
    "Lawn mowing, acreage mowing, edging, garden maintenance, weed control, fence line spraying and hedging across Laidley, Gatton and the Lockyer Valley.",
  breadcrumbs: [{ name: "Services", path: "services" }],
  body: (p) => `
  <section class="hero hero--page" style="background:var(--forest)">
    <div class="shell hero__body">
      <nav class="crumbs" aria-label="Breadcrumb" data-reveal><a href="${p}">${site.name}</a> / Services</nav>
      <h1 class="h-page" data-reveal>Our Services Across the Lockyer Valley</h1>
      <p class="lede" data-reveal>Seven core services, all handled by the same crew, so you're not chasing three different contractors to get your property sorted.</p>
      <div data-reveal><a class="btn btn--lime" href="${site.phoneHref}">Call ${site.phoneDisplay}</a></div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="cards" data-reveal-group>
        ${services
          .map(
            (s) => `<a class="service-tile" href="${p}services/${s.slug}/" data-reveal>
          <img src="${p}img/${s.tileImage}.webp" alt="${s.tileAlt}" width="800" height="500" loading="lazy" decoding="async" />
          <span class="service-tile__body">
            <b>${s.title}</b>
            <span>${s.tileBody}</span>
          </span>
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="section section--sand section--sm">
    <div class="shell">
      <h2 class="h-block" data-reveal>One Contractor for the Whole Property</h2>
      <p class="prose" style="max-width:78ch;margin-top:18px" data-reveal>Most customers start with a mow and add services as they need them. Because the same crew handles everything, your lawn, beds, boundaries and hedges get done on one visit, on one schedule, with one invoice — instead of chasing separate trades and hoping their timing lines up.</p>
      <p class="prose" style="max-width:78ch;margin-top:16px" data-reveal>We work throughout ${areaSentence}, all within our regular Lockyer Valley runs from our base in Laidley.</p>
      <div class="areas" style="margin-top:32px" data-reveal-group>
        ${areas.map((a) => `<div data-reveal>${a}</div>`).join("\n        ")}
      </div>
    </div>
  </section>

  ${ctaSection(p, {
    heading: "Not Sure What You Need?",
    body: "Tell us what the property looks like right now and we'll tell you what it needs — and what it doesn't.",
  })}`,
};

module.exports = { servicePages, servicesIndex };
