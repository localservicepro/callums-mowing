# Site photography

The 17 WebP photographs the site references belong in this folder. They live in
the client's Google Drive folder:

<https://drive.google.com/drive/folders/1Rz-qRhh_m1Akv3Ax-ROxWWH6LbwjsgSK>

Fetch them all in one command:

```bash
bash scripts/fetch-images.sh
```

Filenames must match exactly — the pages reference them by name:

| File | Used by |
| --- | --- |
| `hero-fleet.webp` | Home hero, About hero, Contact, Acreage, Hedging galleries |
| `fleet-mowers.webp` | Home, About, Acreage, Lawn Mowing |
| `backyard-before.webp` | Home before/after slider, Weed Control gallery |
| `backyard-after.webp` | Home before/after slider, several galleries |
| `backyard-neat.webp` | Home, Lawn Mowing, Hedging hero, Thank You |
| `verge-before.webp` | Home before/after slider, Lawn Mowing gallery |
| `verge-after.webp` | Home, Edging, About, Services index |
| `verge-mown.webp` | Lawn Mowing hero, Fence Line hero, Services index |
| `acreage-garden.webp` | Acreage hero, Garden Maintenance hero, Hedging |
| `overgrown-yard.webp` | Home, Lawn Mowing, Edging, Hedging galleries |
| `overgrown-block.webp` | Acreage, Fence Line galleries |
| `weed-spray-yard.webp` | Home, Weed Control |
| `clover-weeds.webp` | Weed Control hero, Services index, Fence Line |
| `spraying.webp` | Home, Garden Maintenance, Services index |
| `sprayers.webp` | Fence Line, Garden Maintenance, Services index |
| `trailer-mower.webp` | Home, Acreage galleries |
| `driveway-gate.webp` | Edging hero, Garden Maintenance, Fence Line |

## Compression

Already done for the two oversized files:

| File | Drive original | Now |
| --- | --- | --- |
| `hero-fleet.webp` | 2500×970, 3174 KB | 1920×745, 279 KB |
| `fleet-mowers.webp` | 2500×1875, 1624 KB | 1200×900, 399 KB |

Total image weight is ~2.6 MB, down from 6.6 MB. Everything else was already
under 210 KB and was left untouched.

If you re-run `scripts/fetch-images.sh` it will overwrite these with the full-size
Drive originals again — re-compress the two above before committing.

## A note on resolution

Apart from `hero-fleet.webp`, the Drive files are fairly low resolution — mostly
429×572 to 572×762 portrait phone shots. Several are used as full-bleed hero
backgrounds, where they're upscaled around 3.4× at desktop widths.

The heavy dark scrim over the heroes hides this well and text stays perfectly
legible, so it isn't a blocker. But if Callum still has the original camera
files, dropping in higher-resolution versions of the hero shots — `verge-mown`,
`acreage-garden`, `driveway-gate`, `clover-weeds`, `backyard-neat` — would
visibly sharpen the service pages. Filenames just need to match; `build.js`
reads dimensions from the files themselves, so nothing else has to change.
