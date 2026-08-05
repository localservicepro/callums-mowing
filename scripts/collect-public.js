#!/usr/bin/env node
/**
 * Assembles ./public for hosts that expect a build output directory.
 *
 * The generated HTML is committed at the repo root, which suits static hosts
 * that serve the repository as-is. Vercel and similar instead run a build and
 * publish one directory, so this copies exactly the files that should be
 * publicly served into ./public — and nothing else, keeping the generator
 * sources (src/, scripts/, build.js) off the public site.
 *
 * Run via `npm run build:vercel`, which builds first. ./public is generated and
 * git-ignored; never edit it by hand.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public");

/** Individual files served from the site root. */
const FILES = [
  "index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "favicon.ico",
  "favicon.svg",
  "favicon-32.png",
  "favicon-192.png",
  "apple-touch-icon.png",
];

/** Directories copied wholesale. */
const DIRS = ["assets", "img", "about", "contact", "services", "thank-you"];

/** Documentation that lives alongside assets but must not ship. */
const EXCLUDE = new Set(["README.md"]);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

let copied = 0;
const missing = [];

for (const file of FILES) {
  const from = path.join(ROOT, file);
  if (!fs.existsSync(from)) {
    missing.push(file);
    continue;
  }
  fs.copyFileSync(from, path.join(OUT, file));
  copied++;
}

for (const dir of DIRS) {
  const from = path.join(ROOT, dir);
  if (!fs.existsSync(from)) {
    missing.push(dir + "/");
    continue;
  }
  fs.cpSync(from, path.join(OUT, dir), {
    recursive: true,
    filter: (src) => !EXCLUDE.has(path.basename(src)),
  });
  copied++;
}

/** Recursive file count, so the log reflects what actually shipped. */
function countFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).reduce((n, entry) => {
    const full = path.join(dir, entry.name);
    return n + (entry.isDirectory() ? countFiles(full) : 1);
  }, 0);
}

console.log(`Collected ${copied} entries into public/ (${countFiles(OUT)} files).`);

if (missing.length) {
  console.warn(`\nWARNING: not found, so not published:\n  ${missing.join("\n  ")}`);
}

/* A deploy with no HTML is a broken deploy — fail rather than publish it. */
if (!fs.existsSync(path.join(OUT, "index.html"))) {
  console.error("\nERROR: public/index.html is missing. Did `node build.js` run first?");
  process.exit(1);
}
