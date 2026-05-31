# Case study cover images

Each file is named `{case-id}.jpg` (e.g. `blue-arrow.jpg`).

Replace any file with your own photo (same filename, JPG recommended, ~1200×675 or wider). The site reads from `/cases/covers/{id}.jpg` automatically.

To refresh placeholders from the script:

```bash
node scripts/download-case-covers.mjs
node scripts/build-cases-catalog.mjs
```
