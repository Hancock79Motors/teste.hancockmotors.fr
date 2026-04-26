# CLAUDE.md

This file provides project-wide guidance to Claude Code. Component-specific rules live in `.claude/rules/`.

---

## Project Overview

Static multi-page web project: **Hancock Motors** — French-language car dealership site.

**Location**: Scillé, 79240, Nouvelle-Aquitaine, France
**Founded**: 2020
**Structure**: TPE — one-person operation. Tone must reflect a serious, passionate independent professional — not a corporation.

**Business focus** (priority order):
1. **Mandat / recherche personnalisée** — flagship service (primary SEO target)
2. Vente de véhicules (stock)
3. Dépôt-vente
4. Detailing (groupe de services : nettoyage, polissage, céramique, sellerie cuir)

No build system, package manager, or test runner. All dependencies are CDN-hosted.
GitHub-connected, auto-deployed.

---

## File Map

| File | Role |
|---|---|
| `index.html` | Homepage — services overview |
| `recherche-personnalisee.html` | **PRIORITY SEO PAGE** — mandat de recherche & import Allemagne |
| `vehicules.html` | Stock listing + individual vehicle adverts |
| `vehicules-vendus.html` | Sold vehicles archive (social proof) |
| `vendez-votre-voiture.html` | Trade-in / consignment landing |
| `detailing.html` | Detailing hub — groupe de services (nettoyage, polissage, céramique, sellerie cuir) |
| `nettoyage.html` | Sous-page nettoyage & soins (entrée de gamme detailing) |
| `assets/shifting-nav.js` | Sticky/scroll nav behaviour — **do not touch** |
| `assets/mobile-nav.js` | Mobile menu open/close — **do not touch** |
| `assets/logo-blanc.png` | Logo white version (do not rename) |
| `Photos voiture/*` | Vehicle photos (see naming convention below — do not rename without following the convention) |
| `Contrat_Mandat_Long_Final.docx` | Legal contract template — reference only, not web-served |
| `hancockmotors_fr__.html` | PDF-to-HTML artifact — **do not edit, ever** |

---

## Brand Colours

| Token | Hex | Used for |
|---|---|---|
| `primary` | `#E52427` | CTAs, accents, price tags, badges, underlines |
| `primary-hover` | `#F03336` | Button hover state |
| `dark` | `#050B20` | Nav background, headings, footer |
| `surface` | `#0D1530` | Cards, elevated surfaces |

> ⚠️ Legacy pages may reference `#405FF2` (old blue token). When touching any page, normalise to `#E52427`.

---

## Typography

- Font: **DM Sans** (Google Fonts CDN — weights 300/400/500/600/700/800)
- Loaded in `<head>` of every page
- Tailwind font config: `fontFamily: { sans: ['DM Sans', 'sans-serif'] }`

---

## Project-Wide Constraints

- **No build tooling** — Tailwind and all dependencies are CDN-loaded.
- Tailwind config is inline in each `<head>` — keep it consistent across pages.
- Vehicle images live in `Photos voiture/` (local) or reference `hancockmotors.fr` CDN URLs — never rename without updating the HTML.
- `hancockmotors_fr__.html` is auto-generated — never edit it.
- Multi-page site: every nav link must point to an existing file. Check before renaming anything.

---

## Critical IDs & Integrations — DO NOT BREAK

Renaming or removing these IDs breaks live production integrations.

### Form — `recherche-personnalisee.html`

| Element | Value |
|---|---|
| Form ID | `rp-main-form` |
| Field IDs | `f-marque`, `f-modele`, `f-budget`, `f-nom`, `f-prenom`, `f-ville`, `f-cp`, `f-email`, `f-tel`, `f-carburant`, `f-boite`, `f-annee`, `f-km`, `f-puissance`, `f-couleur`, `f-options` |
| EmailJS service | `service_o41pfif` |
| EmailJS template | `template_n3z29ws` |
| EmailJS public key | `J4kN91J3N0qwBdAVA` |
| Make webhook | `https://hook.eu1.make.com/1qqcpa38k4xnmh6xu71b2imwv7ghxjm1` |

### Component classes (preserve exactly)

- `.rp-slide`, `.rp-dot` — hero carousel
- `.steps-slide`, `#steps-area`, `#steps-sticky-wrapper` — 3D process carousel
- `.pack-card`, `.pack-tab`, `.couleur-pill` — pack selection UI
- `.form-step`, `#form-success` — multi-step form states
- `data-i`, `data-content`, `data-step` — JS hooks

### Contact info (canonical)

- Phone: `+33 6 29 32 42 99`
- Instagram: `https://www.instagram.com/hancockmotors`
- Facebook: `https://www.facebook.com/hancockmotors`

---

## SEO

### `recherche-personnalisee.html` — highest priority

Target keywords (in order):
1. mandat recherche automobile
2. mandataire automobile Allemagne
3. import voiture Allemagne
4. recherche véhicule personnalisée
5. mandataire auto Niort / Nouvelle-Aquitaine

Required elements — must always be present:
- `<title>` ≤ 60 chars, contains "Mandat" or "Mandataire"
- `<meta name="description">` ≤ 160 chars
- Single `<h1>` containing primary keyword
- `<link rel="canonical">` absolute URL: `https://www.hancockmotors.fr/recherche-personnalisee`
- Complete `<meta property="og:*">` (title, description, url, image, type, locale, site_name)
- `<script type="application/ld+json">` with `FAQPage` schema
- All `<img>` have descriptive `alt` with keyword where relevant

### Other pages

| Page | Priority keywords |
|---|---|
| `index.html` | voiture occasion Niort, mandataire auto Deux-Sèvres |
| `vehicules.html` | voiture occasion Scillé, stock auto Hancock Motors |
| `vehicules-vendus.html` | véhicules vendus, références Hancock Motors |
| `vendez-votre-voiture.html` | déposer voiture en vente, dépôt-vente auto Niort |
| `detailing.html` | detailing auto Niort, polissage céramique, restauration sellerie |
| `nettoyage.html` | nettoyage voiture Niort, lavage auto Scillé |

### Local SEO

- Business location: **Scillé (79)** — Deux-Sèvres, Nouvelle-Aquitaine
- Zone de chalandise à couvrir dans les meta et le contenu: **Niort**, **Parthenay**, **Bressuire**, **Nouvelle-Aquitaine**
- Ne jamais mettre l'adresse complète en clair dans le HTML public

---

## Photo Naming Convention (SEO)

### Format
```
[marque]-[modele]-[finition-ou-motorisation]-[couleur]-[numéro].jpg
```

### Rules
- Lowercase only
- Hyphens only — no spaces, no underscores
- Remove accents (é→e, è→e, ê→e, à→a, ç→c, ô→o, û→u)
- Number from 1 (not 01)
- Suffix `-interieur` for interior shots

### Examples
```
volkswagen-golf-r-rouge-1.jpg
volkswagen-golf-r-rouge-interieur-tableau-de-bord-1.jpg
bmw-m2-competition-bleu-estoril-1.jpg
audi-rs3-abt-gris-nardo-interieur-siege-conducteur-1.jpg
mercedes-gla-250-amg-line-gris-mat-1.jpg
porsche-911-gt3-touring-gris-craie-1.jpg
```

### Alt text pattern
```
[Marque] [Modèle] [couleur] — [description de la vue] | Hancock Motors Scillé
```
Example: `alt="Volkswagen Golf R rouge — trois quarts avant | Hancock Motors Scillé"`

---

## Photo Order — Vehicle Adverts

Canonical order for every vehicle listing. Shoot and sort in this sequence.

### Exterior
1. **Trois quarts avant** — 45° angle driver side. This is always the **hero / main photo**.
2. **Face avant** — straight on, bonnet visible
3. **Profil** — driver side, full car in frame
4. **Trois quarts arrière** — 45° angle driver side rear
5. **Face arrière** — straight on from behind
6. Exterior equipment in logical order:
   - Jantes / roues
   - Optiques (phares avant, feux arrière if notable)
   - Toit ouvrant / toit vitré (if present)
   - Calandre / diffuseur / spoiler (if notable)
   - Any other distinctive exterior feature

### Interior
7. **Vue conducteur** — taken from rear seat, looking forward: steering wheel + full dashboard
8. **Siège conducteur** — front left seat, backrest and adjustment visible
9. **Sièges arrière** — rear bench, legroom visible
10. Interior equipment in logical order:
    - Console centrale / gear selector / shifter
    - Écran / système multimédia (close-up)
    - Compteurs / instrumentation (virtual cockpit, HUD if present)
    - Volant (detail shot)
    - Toit intérieur / alcantara (if notable)
    - Coffre (if a selling point or if relevant)

---

## Vehicle Advert Rules

### Structure
Follow exactly the same component format already used in `vehicules.html`. Do not invent a new layout.

### Copy tone
- Factual and precise — no empty superlatives
- Mention only confirmed, actual equipment
- One known defect = mention it. Builds trust, filters bad leads.
- Never: "RARE !!!", "OCCASION UNIQUE", "À SAISIR", "Coup de cœur"

### Pricing
- Display the price clearly — no "prix sur demande", no ranges
- Never write "prix négociable" (attracts pressure)
- Justify the price through equipment, history, condition — not marketing words
- CTA wording: **"Nous contacter pour une visite"** — not "Faites une offre"

### Lead quality — balancing volume vs. bad leads
- Showing the price filters out people asking for a 40 000€ car at 10 000€
- Mentioning minor defects reduces abusive negotiation attempts
- Highlight value (options, service history, condition) to anchor the price
- Never hide mileage, year, or known issues

### Mandatory fields per listing

| Field | Required |
|---|---|
| Marque + Modèle + Finition | ✅ |
| Année + Kilométrage | ✅ |
| Motorisation (cylindrée, puissance ch, carburant) | ✅ |
| Boîte de vitesse | ✅ |
| Couleur (exact shade if known) | ✅ |
| Prix TTC | ✅ |
| Liste équipements | ✅ |
| Localisation | ✅ Scillé (79) |
| Contrôle technique (date + résultat) | ✅ |
| Historique entretien | ✅ if available |

### Never in adverts
- ❌ "Prix négociable"
- ❌ "À saisir" / "Coup de cœur" / "Pépite"
- ❌ Photos of an uncleaned vehicle
- ❌ Blurry or poorly lit hero photo
- ❌ Description copied from manufacturer configurator
- ❌ Full street address in the public HTML

### Location in adverts
- Display: **Scillé (79)** or **Scillé, Deux-Sèvres**
- SEO meta only: also include "Niort" and "Nouvelle-Aquitaine" for local reach

### Vehicle advert SEO
- Title tag: `[Marque] [Modèle] [Finition] [Année] — [Prix] € | Hancock Motors`
- Meta description: 1 sentence describing the car + price + location ≤ 160 chars
- Schema recommended on individual listings: `Car` + `Offer` (schema.org)

---

## Content Rules — Never Oversell

These rules are legally and commercially critical.

### Carte grise
- ✅ "Démarches administratives incluses" — we handle the paperwork
- ❌ "Carte grise incluse" — the **cost** is always the **client's** responsibility (regional taxes, malus, etc.)
- Always provide a written cost estimate before purchase

### Délais (mandat)
- ✅ "Première réponse sous 48h"
- ✅ "Quelques jours à 3 semaines" — common configs
- ✅ "4 à 8 semaines" — rare / specific configs
- ❌ Never promise a specific delivery date upfront

### Garantie
- ✅ "Solde de garantie constructeur européenne, valable en France"
- ✅ "Extension de garantie possible en option selon l'âge et le kilométrage"
- ❌ Never claim a blanket "garantie 24 mois" without per-vehicle context

### History check
- ✅ "Rapport d'historique européen demandé lorsqu'il est disponible"
- ✅ "Vérification VIN, carnet d'entretien, cohérence kilométrage"
- ❌ "Carfax systématique" — Carfax is US-only; not always available in Europe

### Pricing claims
- ❌ Never quote specific comparison prices (e.g. "Tiguan 28k€ en France vs 23k€ en Allemagne")
- ✅ Qualitative language only: "souvent moins cher", "mieux optionné", "choix plus large"
- ✅ "Jusqu'à -15%" or "-15 à -25%" acceptable as a range estimate

### Brand positioning
- Hancock Motors is **not** a luxury-only or six-figure dealer
- Core inventory: VW Golf, Tiguan, Audi Q3, BMW Série 3, Mercedes Classe A/GLA, etc.
- Premium/sports (M, AMG, RS, Porsche) = a bonus, not the core identity
- Copy must speak to both segments — never make a Golf buyer feel out of place

### General tone
- "On" rather than "Nous" in informal copy
- No empty superlatives: "le meilleur", "unique en France", "incontournable"
- Honesty > marketing
- A small business run with passion and rigour — not a corporate dealership

---

## Design Rules

- **Mobile-first** — breakpoints: `md:` 768px, `lg:` 1024px, `xl:` 1280px
- **H1** must contain the primary SEO keyword for that page
- **Animations** (GSAP) must respect `prefers-reduced-motion: reduce`
- **Accessibility**: every `<button>` and icon-only link needs `aria-label`
- **Images**: every `<img>` needs a descriptive `alt` — never leave empty or use filename
- **Lazy loading**: add `loading="lazy"` to all images below the fold
- **Tap targets**: 44×44px minimum on mobile

---

## Workflow — Modifications

1. **Branch first**: `git checkout -b feat/short-name` (or `fix/`, `chore/`)
2. **Read** the target file fully before editing
3. **Use `str_replace`** — never rewrite an entire file when a targeted edit is enough
4. **One commit per logical change** — conventional commits:
   - `feat(rp): add trust badges to hero`
   - `fix(seo): correct meta description vehicules.html`
   - `chore: normalise primary colour to #E52427`
5. **Verify** critical IDs and classes are intact before committing
6. **Push** the branch
7. **Open a PR** via `gh pr create` — always request user confirmation before merging to `main`

---

## Convention Nommage Photos (SEO)

Format : `[marque]-[modele]-[finition]-[couleur]-[numéro].jpg`
- Minuscules uniquement
- Tirets uniquement (pas d'espaces ni underscores)
- Sans accents (é→e, à→a, ç→c, ô→o)
- Numérotation à partir de 1 (pas 01)
- Suffixe `-interieur` pour les photos intérieures

Exemples corrects :
```
volkswagen-golf-r-rouge-1.jpg
bmw-m2-competition-bleu-estoril-1.jpg
audi-rs3-abt-gris-nardo-interieur-tableau-de-bord-1.jpg
```

Pattern alt text :
`[Marque] [Modèle] [couleur] — [description vue] | Hancock Motors Scillé`
Exemple : `alt="Volkswagen Golf R rouge — trois quarts avant | Hancock Motors Scillé"`

---

## Ordre Photos — Fiches Véhicules

Extérieur (obligatoire dans cet ordre) :
1. **Trois quarts avant** — 45° côté conducteur → TOUJOURS la photo principale
2. **Face avant** — de face, capot visible
3. **Profil** — côté conducteur, voiture entière dans le cadre
4. **Trois quarts arrière** — 45° côté conducteur
5. **Face arrière** — de dos, droit
6. Équipements extérieurs dans l'ordre logique : jantes, optiques, toit ouvrant, calandre/diffuseur, détails notables

Intérieur (obligatoire dans cet ordre) :
7. **Vue conducteur** — prise depuis la banquette arrière, volant + tableau de bord complet
8. **Siège conducteur** — siège avant gauche, dossier et réglages visibles
9. **Sièges arrière** — banquette, espace aux jambes
10. Équipements intérieurs dans l'ordre logique : console centrale, écran multimédia, instrumentation/virtual cockpit, volant (détail), toit intérieur si notable, coffre si argument de vente

---

## Règles Fiches Véhicules

Suivre exactement le format des fiches existantes dans `vehicules.html` et `vehicule.html`.
Source de vérité du stock : `cars-data.js` — toujours modifier ce fichier pour ajouter/modifier un véhicule.

### Champs obligatoires par fiche

| Champ | Obligatoire |
|---|---|
| Marque + Modèle + Finition | ✅ |
| Année + Kilométrage | ✅ |
| Motorisation (cylindrée, puissance ch, carburant) | ✅ |
| Boîte de vitesse | ✅ |
| Couleur (teinte exacte si connue) | ✅ |
| Prix TTC (affiché clairement, jamais "prix sur demande") | ✅ |
| Liste équipements (réels uniquement) | ✅ |
| Localisation : Scillé (79) | ✅ |
| Contrôle technique (date + résultat) | ✅ |
| Historique entretien si disponible | ✅ |

### Ton copy annonces

- Factuel, précis, sans superlatifs vides
- Un défaut connu = le mentionner (filtre les mauvais leads, construit la confiance)
- CTA : **"Nous contacter pour une visite"** — jamais "Faites une offre"
- Jamais : "prix négociable", "à saisir", "coup de cœur", "rare !!!"
- Jamais : photos sans nettoyage, photo principale floue ou mal éclairée
- Justifier le prix par les équipements et l'état — pas par du marketing

### Gestion leads / prix

- Prix affiché = filtre naturel contre les demandes hors budget
- Mentionner les défauts mineurs réduit les négociations abusives
- Mettre en valeur les options et l'entretien pour ancrer le prix
- Ne jamais masquer le kilométrage, l'année ou les défauts connus

### Localisation dans les annonces

- Affichage : **Scillé (79)** ou **Scillé, Deux-Sèvres**
- Meta SEO : inclure aussi "Niort" et "Nouvelle-Aquitaine" pour la zone de chalandise
- Ne jamais mettre l'adresse complète en clair dans le HTML public

### SEO fiches

- Title : `[Marque] [Modèle] [Finition] [Année] — [Prix] € | Hancock Motors`
- Meta description : 1 phrase véhicule + prix + localisation ≤ 160 caractères
- Schema recommandé : `Car` + `Offer` (schema.org)

---

## Never

- Work directly on `main` — always branch first
- Rename any file without updating every `<a href>` and nav reference that points to it
- Touch `assets/*.js` without explicit instruction
- Edit `hancockmotors_fr__.html`
- Remove `alt` attributes from any image
- Reword legal/commercial copy (carte grise, délais, garantie) without checking content rules above
- Use placeholder content (`Lorem ipsum`, `TODO`, `XXX`) in pushed code
- Add specific competitor price comparisons to copy
- Write "prix négociable" or "à saisir" in any vehicle advert

---

## Rules

- **`.claude/rules/hancock-motors-site.md`** — page-by-page rules (French copy patterns, Tailwind class conventions, JS behaviour specs)

---

## Useful Commands

```bash
# Open the site locally (no build step)
open index.html                      # macOS
start index.html                     # Windows
xdg-open index.html                  # Linux

# Check for broken internal links
grep -rEho 'href="[^"]+\.html"' *.html | sort -u

# Find pages still using the legacy blue token
grep -rn "#405FF2" *.html

# HTML validation (if installed globally)
npx html-validate *.html
```
