#!/usr/bin/env node
/**
 * Static site generator for callumsmowing.com.au
 *
 * Emits a complete HTML document per route (plus sitemap.xml and robots.txt)
 * so search engines and AI answer engines get fully rendered markup with no
 * JavaScript required. Run with `npm run build`.
 */

const fs = require("fs");
const path = require("path");

const { site } = require("./src/data");
const { render, urlFor } = require("./src/layout");
const { sizeOf } = require("./src/imagesize");
const { home } = require("./src/pages/home");
const { servicePages, servicesIndex } = require("./src/pages/services");
const { about, contact, thanks } = require("./src/pages/misc");

const ROOT = __dirname;

const pages = [
  home,
  servicesIndex,
  ...servicePages,
  about,
  contact,
  thanks,
];

/* --------------------------------------------------------------- helpers */

/* Real intrinsic dimensions, read once from the files in ./img. */
const imageDims = new Map();
const missingImages = new Set();

function dimsFor(name) {
  if (!imageDims.has(name)) {
    imageDims.set(name, sizeOf(path.join(ROOT, "img", `${name}.webp`)));
  }
  return imageDims.get(name);
}

/**
 * Replaces the width/height on every <img> pointing at img/<name>.webp with the
 * file's true dimensions. Templates therefore never have to hard-code sizes
 * that would silently drift as artwork is replaced.
 */
function applyRealImageDimensions(html) {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = tag.match(/src="[^"]*img\/([a-z0-9-]+)\.webp"/);
    if (!src) return tag;

    const dims = dimsFor(src[1]);
    if (!dims) {
      missingImages.add(src[1]);
      return tag;
    }

    return tag
      .replace(/\swidth="\d+"/, ` width="${dims.width}"`)
      .replace(/\sheight="\d+"/, ` height="${dims.height}"`);
  });
}

function writeFile(relPath, contents) {
  const target = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
  return relPath;
}

/** Highest-priority pages first, so the sitemap reads sensibly. */
function priorityFor(pagePath) {
  if (!pagePath) return "1.0";
  if (pagePath.startsWith("services/") && pagePath !== "services") return "0.9";
  if (pagePath === "services" || pagePath === "contact") return "0.8";
  return "0.7";
}

/* ----------------------------------------------------------------- build */

const written = [];

for (const page of pages) {
  const file = page.path ? `${page.path}/index.html` : "index.html";
  written.push(writeFile(file, applyRealImageDimensions(render(page))));
}

/* 404 reuses the home shell but is never indexed. */
written.push(
  writeFile(
    "404.html",
    applyRealImageDimensions(render({
      ...home,
      path: "",
      // Served from any missed URL, so its links must be root-absolute.
      prefix: "/",
      noindex: true,
      title: "Page Not Found | Callum's Mowing Laidley QLD",
      description:
        "That page doesn't exist. Head back to Callum's Mowing for lawn mowing, acreage mowing and garden maintenance across the Lockyer Valley.",
    }))
  )
);

/* sitemap.xml — only indexable pages. */
const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages
    .filter((p) => !p.noindex)
    .map(
      (p) =>
        `  <url>\n` +
        `    <loc>${urlFor(p.path)}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>monthly</changefreq>\n` +
        `    <priority>${priorityFor(p.path)}</priority>\n` +
        `  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;
written.push(writeFile("sitemap.xml", sitemap));

/* robots.txt — open to crawlers and to AI answer engines. */
written.push(
  writeFile(
    "robots.txt",
    `User-agent: *\nAllow: /\nDisallow: /thank-you/\n\nSitemap: ${site.origin}/sitemap.xml\n`
  )
);

console.log(`Built ${written.length} files.`);

if (missingImages.size) {
  console.warn(
    `\nWARNING: ${missingImages.size} image(s) missing from ./img — ` +
      `width/height left at template defaults:\n  ` +
      [...missingImages].sort().join("\n  ") +
      `\n\nRun \`npm run images\` to fetch them.\n`
  );
}
