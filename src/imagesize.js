/**
 * Minimal WebP dimension reader — no dependencies.
 *
 * Used at build time so every <img> carries its real intrinsic width and
 * height. Accurate values let the browser reserve the right box before the
 * bytes arrive, which is what keeps Cumulative Layout Shift at zero.
 *
 * Handles the three WebP container variants: lossy (VP8 ), lossless (VP8L)
 * and extended (VP8X).
 */

const fs = require("fs");

function webpSize(buffer) {
  if (
    buffer.length < 30 ||
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    return null;
  }

  const format = buffer.toString("ascii", 12, 16);

  // Extended format: 24-bit canvas dimensions, stored minus one.
  if (format === "VP8X") {
    return {
      width: buffer.readUIntLE(24, 3) + 1,
      height: buffer.readUIntLE(27, 3) + 1,
    };
  }

  // Lossless: 0x2F signature, then 14 bits width-1 and 14 bits height-1.
  if (format === "VP8L") {
    if (buffer[20] !== 0x2f) return null;
    const bits =
      buffer[21] | (buffer[22] << 8) | (buffer[23] << 16) | (buffer[24] << 24);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }

  // Lossy: keyframe start code 0x9D 0x01 0x2A, then 14-bit dimensions.
  if (format === "VP8 ") {
    if (buffer[23] !== 0x9d || buffer[24] !== 0x01 || buffer[25] !== 0x2a) {
      return null;
    }
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  return null;
}

/** Reads dimensions for an image file, or null if it can't be determined. */
function sizeOf(filePath) {
  try {
    const fd = fs.openSync(filePath, "r");
    const buffer = Buffer.alloc(32);
    fs.readSync(fd, buffer, 0, 32, 0);
    fs.closeSync(fd);
    return webpSize(buffer);
  } catch {
    return null;
  }
}

module.exports = { sizeOf, webpSize };
