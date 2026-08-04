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

## Before committing

`hero-fleet.webp` is ~3.2 MB and `fleet-mowers.webp` ~1.7 MB in the Drive
originals. Both are used above the fold, so compress them to roughly 200–400 KB
at 1600px wide before shipping — otherwise they'll dominate Largest Contentful
Paint on mobile.
