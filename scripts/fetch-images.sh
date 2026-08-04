#!/usr/bin/env bash
#
# Downloads the 17 site photographs from the client's Google Drive folder into
# ./img. Run this once on a machine with normal internet access:
#
#   bash scripts/fetch-images.sh
#
# Source folder:
# https://drive.google.com/drive/folders/1Rz-qRhh_m1Akv3Ax-ROxWWH6LbwjsgSK
#
# The files must be shared as "Anyone with the link — Viewer" for this to work.
# If a download comes back as HTML rather than WebP, that sharing setting is the
# first thing to check.

set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p img

# filename<TAB>Google Drive file ID
FILES="
hero-fleet.webp	1ZOVPbP38CTDBeJV_Nyxf7phnU4_ZQryI
fleet-mowers.webp	1RpLQR4pRqRT3QI1t9q-lNgURv7gNvI4B
backyard-before.webp	17Qc-alWYxjRTaIOiNjTyWr8rnypgESqF
backyard-after.webp	1F1t_M9eXiacYfkSfKCu65VwHHx9UZKOD
backyard-neat.webp	1pMHwjVG2UwiILDEGJ7iY4sMswLK9rSV5
verge-before.webp	1f_x6exdziRCPZhO-jHgxKHaMTFQfiq1j
verge-after.webp	16_GLQDHRmkviDxAu_jeKqt-sguTne4zT
verge-mown.webp	1C035lW8NNLVqh9-2vJt9fTL_o0P6vkQj
acreage-garden.webp	1EdAagvCfbh-Y6Lof3e9FVk6GScwNV8iL
overgrown-yard.webp	1VwNfthzKJ9SOqs2LVzQc8x8IVxTJonzT
overgrown-block.webp	1dFVrJFEvH3YdQ-b_Y5Ukbqjxu4YPgPNr
weed-spray-yard.webp	1Drt0fJT9l8U4t_ymoWsJo9TBhJsYp1eA
clover-weeds.webp	1j8d5kK3nPXh8bENOKm8Joow1kg1GJWwO
spraying.webp	18wB3lqnMPI6WD7u9-mw0L92PJGW0Ia_w
sprayers.webp	1wFqGMsW-UiWjndyRrmcUJgM25NZU_Lyv
trailer-mower.webp	16l0jOOwh_-GbdWZ3EDE311YojdToy7El
driveway-gate.webp	1YQujo88BpYZQusUbhA75V3FrqBJmAJ1f
"

failures=0

while IFS=$'\t' read -r name id; do
  [ -z "${name:-}" ] && continue
  printf '  %-24s' "$name"

  curl -sSL --fail --retry 3 --retry-delay 2 \
    -o "img/$name" \
    "https://drive.usercontent.google.com/download?id=${id}&export=download" || {
      echo "FAILED (download error)"
      failures=$((failures + 1))
      continue
    }

  # Google serves an HTML interstitial instead of the file when a download is
  # blocked or the file is too large for the direct endpoint.
  if head -c 4 "img/$name" | grep -q '<'; then
    echo "FAILED (got HTML, not an image — check link sharing)"
    rm -f "img/$name"
    failures=$((failures + 1))
  else
    echo "ok ($(du -h "img/$name" | cut -f1))"
  fi
done <<< "$FILES"

echo
if [ "$failures" -eq 0 ]; then
  echo "All 17 images downloaded into ./img"
else
  echo "$failures image(s) failed — download those manually from the Drive folder"
  exit 1
fi
