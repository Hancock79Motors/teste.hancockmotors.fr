---
description: Rules for managing car stock photos
paths:
  - "cars-data.js"
  - "Photos voiture/**"
---

# Stock Photos — Hancock Motors

## Folder structure

Photos live in `Photos voiture/[Nom du dossier]/` where the folder name matches the car (e.g. `Mercedes-Benz CLA 220d`).

## SEO file naming

When adding photos for a new car, always rename the files before referencing them in `cars-data.js`:

```
[marque]-[modele]-[couleur]-[n].jpg
```

Examples:
- `mercedes-cla-220d-amg-line-noir-cosmos-1.jpg`
- `porsche-911-carrera-rouge-1.jpg`
- `bmw-m4-cabriolet-gris-1.jpg`

Rules:
- Lowercase only
- Hyphens, no spaces or underscores
- Include marque, modèle, couleur extérieure, and sequential number
- Numbered from `1` upward (`-1`, `-2`, `-3` …)

## cars-data.js paths

Reference photos with the relative path from the site root. **URL-encode all spaces as `%20`** — raw spaces break `src` attributes in HTML.

```js
photos: [
  'photos%20voiture/Mercedes-Benz%20CLA%20220d/mercedes-cla-220d-amg-line-noir-cosmos-1.jpg',
  'photos%20voiture/Mercedes-Benz%20CLA%20220d/mercedes-cla-220d-amg-line-noir-cosmos-2.jpg',
  // ...
],
```

The first photo in the array is used as the thumbnail on the listing page.
