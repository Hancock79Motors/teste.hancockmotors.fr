# Règles annonces véhicules — Hancock Motors

S'applique à toute page d'annonce / fiche véhicule (actuellement `vehicule.html`).

## Titre de page (`<title>`) et meta sociales

Quand un visiteur copie le lien d'une fiche véhicule, le titre affiché dans l'onglet du navigateur (et la prévisualisation lors d'un partage en navigateur) doit être le **titre de la voiture**, pas un générique « Véhicule ».

### Exigences pour `vehicule.html`

- **Static `<title>`** : fallback neutre Hancock Motors (jamais juste « Véhicule »). Ex : `Fiche véhicule — Hancock Motors`.
- **Static meta tags** présents dans `<head>` (fallback pour les crawlers) :
  - `<meta name="description">`
  - `<meta property="og:type">`, `og:site_name`, `og:locale`, `og:title`, `og:description`, `og:image`
  - `<meta name="twitter:card">`, `twitter:title`, `twitter:description`
- **Mise à jour dynamique JS** au chargement quand l'objet `car` est résolu :
  - `document.title = ${car.titre} — Hancock Motors`
  - `og:title`, `twitter:title` ← même valeur
  - `og:description`, `twitter:description`, `meta[name="description"]` ← `car.description` tronquée à ~155 caractères
  - `og:image`, `twitter:image` ← URL absolue de `car.photos[0]`
  - `og:url` ← `location.href`

### Limite connue

Le site est statique (pas de SSR). Les crawlers de prévisualisation des messageries (WhatsApp, Messenger, iMessage, Facebook, LinkedIn…) **n'exécutent pas le JavaScript** : ils lisent uniquement le HTML brut. La mise à jour dynamique JS n'a donc effet **que pour le navigateur** (onglet + partage manuel).

Pour que le preview social affiche la bonne voiture, il faudrait :
- soit prérendre une page HTML dédiée par véhicule (`vehicule-porsche-928-s4.html`, etc.)
- soit ajouter une couche de SSR / prerender (Cloudflare Pages prerender, Netlify pre-render, build script statique)

Tant que ce refacto n'est pas fait, accepter ce compromis : navigateur OK, social preview = fallback générique Hancock Motors.

## Pages listing (`vehicules.html`, `vehicules-vendus.html`)

Le `<title>` reste statique (« Véhicules — Hancock Motors », etc.) — pas de mise à jour dynamique car la page représente le catalogue, pas un véhicule unique.
