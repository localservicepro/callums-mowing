#!/usr/bin/env node
/**
 * Regenerates the raster favicons from favicon.svg.
 *
 * Only needed when the logo changes. Requires a one-off Playwright install,
 * which is why it is not a project dependency:
 *
 *   npm i -D playwright && node scripts/make-favicons.js
 *
 * Produces:
 *   favicon.ico          32x32, for the automatic /favicon.ico request
 *   favicon-32.png       standard tab icon
 *   favicon-192.png      Android home screen
 *   apple-touch-icon.png 180x180 — iOS ignores SVG, so this must be a PNG
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SIZES = [
  { file: "favicon-32.png", size: 32 },
  { file: "favicon-192.png", size: 192 },
  // iOS composites this over its own background and renders any transparency
  // as black, so it is drawn opaque with the plate colour bled to the edges.
  { file: "apple-touch-icon.png", size: 180, opaque: "#0F2E1E" },
];

/** Wraps a PNG in a single-image ICO container (supported since Vista). */
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 means 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette size
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // colour planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(header.length + entry.length, 12); // offset to payload

  return Buffer.concat([header, entry, png]);
}

(async () => {
  const { chromium } = require("playwright");
  const svg = fs.readFileSync(path.join(ROOT, "favicon.svg"), "utf8");

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const { file, size, opaque } of SIZES) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(
      `<body style="margin:0;background:${opaque || "transparent"}">${svg.replace(
        'width="40" height="40"',
        `width="${size}" height="${size}"`
      )}</body>`
    );
    const png = await page.screenshot({ omitBackground: !opaque });
    fs.writeFileSync(path.join(ROOT, file), png);
    console.log(`${file.padEnd(22)} ${size}x${size}  ${png.length} bytes`);

    if (size === 32) {
      const ico = pngToIco(png, 32);
      fs.writeFileSync(path.join(ROOT, "favicon.ico"), ico);
      console.log(`${"favicon.ico".padEnd(22)} 32x32  ${ico.length} bytes`);
    }
  }

  await browser.close();
})();
