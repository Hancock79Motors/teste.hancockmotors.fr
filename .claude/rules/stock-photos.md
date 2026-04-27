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

## Ordre des photos — OBLIGATOIRE pour chaque nouvelle annonce

À chaque ajout d'un véhicule dans `cars-data.js`, le tableau `photos:` **doit être trié dans l'ordre canonique** ci-dessous (cf. CLAUDE.md § Ordre Photos), et les fichiers renommés en conséquence (`-1.jpg` = trois quarts avant, `-2.jpg` = face avant, etc.).

### Si les photos brutes ne sont pas nommées sémantiquement
Il faut **inspecter visuellement chaque image** avec le Read tool (Claude est multimodal) avant de :
1. décider du numéro à attribuer à chaque fichier
2. renommer les fichiers
3. remplir le tableau `photos:`

Ne jamais ré-utiliser l'ordre alphabétique brut du dossier. Le numéro `-1` est réservé au trois quarts avant, point.

### Ordre canonique (rappel — voir CLAUDE.md pour le détail)
1. Trois quarts avant (hero / vignette)
2. Face avant
3. Profil
4. Trois quarts arrière
5. Face arrière
6. Équipements extérieurs (jantes, optiques, toit, calandre, détails)
7. Vue conducteur (volant + tableau de bord depuis l'arrière)
8. Siège conducteur
9. Sièges arrière
10. Équipements intérieurs (console, écran, instrumentation, volant détail, coffre)

### Suffixe `-interieur`
Optionnel mais recommandé pour clarté : numéroter les photos intérieures séparément.
```
ford-mustang-gt-fastback-1968-noir-1.jpg          (trois quarts avant)
ford-mustang-gt-fastback-1968-noir-2.jpg          (face avant)
…
ford-mustang-gt-fastback-1968-noir-interieur-1.jpg (vue conducteur)
ford-mustang-gt-fastback-1968-noir-interieur-2.jpg (siège conducteur)
```

### Checklist avant commit d'une nouvelle annonce
- [ ] Photos brutes inspectées visuellement si nommage non sémantique
- [ ] Fichiers renommés selon la convention SEO **dans l'ordre canonique**
- [ ] Tableau `photos:` dans `cars-data.js` trié dans le même ordre
- [ ] Première entrée du tableau = trois quarts avant
