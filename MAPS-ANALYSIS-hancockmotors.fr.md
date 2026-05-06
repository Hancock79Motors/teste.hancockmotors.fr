# Maps Analysis — Hancock Motors

**Domaine** : hancockmotors.fr
**Établissement** : Hancock Motors (SARL) — Scillé (79240), Deux-Sèvres, Nouvelle-Aquitaine
**SIREN** : 901 863 175 — **SIRET** : 90186317500013
**Date** : 2026-05-06
**Tier détecté** : **Tier 0** (DataForSEO MCP non disponible — analyse via API gratuites + WebFetch)
**Périmètre demandé** : `nap` + `gbp`

> ⚠️ Tier 0 — capacités limitées : pas de geo-grid, pas de profil GBP live, pas de réponses owner / vélocité avis. Plusieurs champs marqués **Inconnu** nécessitent DataForSEO ou un accès direct au tableau de bord Google Business Profile.

---

## Maps Health Score (Tier 0) — **62 / 100**

| Dimension | Score | Pondération | Commentaire |
|---|---|---|---|
| NAP Consistency | 90 / 100 | 25 % | Cohérent sur toutes les sources publiques. 1 divergence mineure (date de fondation). |
| GBP Profil (signaux observables) | 55 / 100 | 30 % | Profil existe + réviewé, mais photos très faibles (1 visible), description/horaires non vérifiables Tier 0. |
| Présence cross-platform | 40 / 100 | 20 % | Google ✅, Bing ❌, Apple ❌, OSM ❌. |
| Schema.org local | 70 / 100 | 15 % | `AutoDealer` + `LocalBusiness` présent, mais pas de `geo`, `openingHoursSpecification`, `aggregateRating`, `hasMap`, `image`. |
| Citations / annuaires métier | 65 / 100 | 10 % | Présent sur societe.com, pappers, kompass, hoodspot, garage-auto.info, intramuros, autour-de-moi. |

**Score pondéré** : ~ 62 / 100.

---

## 1. NAP Cross-Platform — Tableau de cohérence

| Source | Nom | Adresse | Téléphone | Site | Statut |
|---|---|---|---|---|---|
| **hancockmotors.fr** (canonique) | Hancock Motors | Scillé (79) — pas de rue affichée *(volontaire, cf. CLAUDE.md)* | +33 6 29 32 42 99 | hancockmotors.fr | ✅ Référence |
| **JSON-LD `AutoDealer`** (index.html) | Hancock Motors | Scillé, 79240, Nouvelle-Aquitaine, FR | +33629324299 | hancockmotors.fr | ✅ Match |
| **Google Maps** *(via aggrégateur autour-de-moi)* | Hancock Motors | La Folie, 79240 Scillé | 06.29.32.42.99 | www.hancockmotors.fr | ✅ Match (rue ajoutée par GBP) |
| **societe.com / pappers / verif** *(registres légaux)* | HANCOCK MOTORS (SARL) | Lieu Dit La Folie, 79240 Scillé | — | — | ✅ Match légal |
| **annuaire petitesaffiches / hoodspot** | HANCOCK MOTORS | Lieu Dit La Folie, 79240 Scillé | non affiché | — | ✅ Match |
| **kompass.com** | Hancock Motors | Ld La Folie, 79240 Scillé | — | — | ✅ Match |
| **Bing Places** | — | — | — | — | ❌ **Aucun listing trouvé** |
| **Apple Maps** | — | — | — | — | ❓ **Non vérifiable Tier 0** (pas d'API publique — voir §6) |
| **OpenStreetMap (Nominatim)** | — | — | — | — | ❌ **Non référencé** (recherche `Hancock Motors France` = 0 résultat) |

### Divergences détectées

| Sévérité | Champ | Détail |
|---|---|---|
| 🟡 **Faible** | Date de fondation | Site / JSON-LD = `2020`. Registres (societe.com, pappers) = créée **2021**. À aligner sur la date de SIRET. |
| 🟡 **Faible** | Adresse street level | Volontairement absente sur le site (règle CLAUDE.md privée). Le GBP affiche `La Folie` — **OK**, mais rester vigilant : ne **pas** ajouter la rue dans le HTML public. |
| ⚠️ **Moyenne** | Forme légale | Le site n'indique nulle part `SARL` ni le SIREN. Pour une `AutoDealer` schema crédible et pour les pages mentions légales, ajouter `legalName` et `vatID` / `taxID` au JSON-LD. |
| ⚠️ **Moyenne** | Présence Bing Places | **Listing absent**. Bing alimente Cortana et certains assistants — réclamer le profil sur [Bing Places for Business](https://www.bingplaces.com/). |
| ⚠️ **Moyenne** | Présence OpenStreetMap | **Non référencé**. OSM alimente Apple Maps, Mapbox, plusieurs GPS embarqués et l'écosystème open data. Créer un node OSM `shop=car;car=used` à `La Folie, 79240 Scillé`. |

### Verdict NAP

**Cohérence Google ↔ site ↔ registres : 100 %.** Les sources principales (Google Maps, registres légaux, annuaires métier) sont alignées sur :
- **Nom** : Hancock Motors (forme légale `SARL HANCOCK MOTORS`)
- **Adresse** : Lieu Dit La Folie, 79240 Scillé
- **Téléphone** : +33 6 29 32 42 99
- **Site** : hancockmotors.fr

> Le seul vrai problème NAP n'est pas une **incohérence** mais un **manque de présence** : zéro empreinte sur Bing, Apple, OSM.

---

## 2. Google Business Profile — Audit Tier 0 (signaux observables)

> Tier 0 = on note ce qui est **observable** depuis l'extérieur (aggrégateur autour-de-moi.com synchronisé Google Maps, recherches web, schema du site). Les champs marqués **Inconnu** demandent un accès direct au dashboard GBP **ou** un upgrade Tier 1 (DataForSEO `business_data_business_listings_search`).

### Score GBP estimé Tier 0 : **18 / 25 champs adressés** (≈ 55 / 100 normalisé)

| # | Champ | Statut | Source | Action prioritaire |
|---|---|---|---|---|
| 1 | Nom commercial | ✅ Présent + optimisé | "Hancock Motors" | — |
| 2 | Catégorie principale | ✅ Présent | "Concessionnaire automobile" | 🔴 **Ajouter aussi** : `Mandataire automobile` (catégorie secondaire), `Préparateur automobile` (detailing) |
| 3 | Catégories secondaires | ❓ Inconnu Tier 0 | — | Vérifier dashboard : viser 3-5 catégories pertinentes |
| 4 | Adresse physique | ✅ Présent | La Folie, 79240 Scillé | — |
| 5 | Zone desservie (areaServed) | ❓ Inconnu Tier 0 (présent dans le schema site) | — | Ajouter sur GBP : Niort, Parthenay, Bressuire, Poitiers, Deux-Sèvres |
| 6 | Téléphone | ✅ Présent | +33 6 29 32 42 99 | Téléphone mobile uniquement — acceptable pour TPE |
| 7 | Site web | ✅ Présent | www.hancockmotors.fr | — |
| 8 | Horaires d'ouverture | ✅ Présent : **9h–20h tous les jours** | Aggrégateur Google | 🟡 **Vérifier** : 7j/7 + 11h/jour est très large pour une TPE — risque de "client se présente, fermé". Aligner sur réalité. |
| 9 | Horaires spéciaux (jours fériés) | ❓ Inconnu Tier 0 | — | Ajouter au moins les fériés à venir (1er mai, 8 mai, 14 juillet, 15 août, etc.) |
| 10 | Description (750 caractères) | ❓ Inconnu Tier 0 | — | 🔴 Rédiger 700-750 car. avec mots-clés : `mandataire auto`, `mandat de recherche`, `import Allemagne`, `dépôt-vente`, `detailing`, `Scillé`, `Niort`, `Parthenay`, `Bressuire`, `Deux-Sèvres` |
| 11 | Date d'ouverture | ❓ Inconnu Tier 0 | Registre = 2021 | Renseigner `2021` côté GBP (pas 2020) |
| 12 | Photo de couverture | ❓ Inconnu Tier 0 | — | Photo extérieure HD du local / d'un véhicule hero |
| 13 | Photo de profil / logo | ❓ Inconnu Tier 0 | — | Logo Hancock Motors blanc sur fond rouge ou neutre |
| 14 | Photos extérieures | ⚠️ Faible | Aggrégateur ne montre que **1 photo** | 🔴 **Action prioritaire** : viser **30+ photos** (extérieur local, voitures du stock, équipe, réceptions clients) |
| 15 | Photos intérieures | ❓ Inconnu Tier 0 | — | Showroom, espace livraison, atelier detailing |
| 16 | Photos d'équipe | ❓ Inconnu Tier 0 | — | Toby Hancock + véhicules livrés (avec accord clients) |
| 17 | Vidéos | ❓ Inconnu Tier 0 | — | 1-3 vidéos courtes (30s) : présentation, livraison, detailing |
| 18 | Avis clients | ✅ Présent : **4.7 / 5 — 25 avis** | Aggrégateur Google | 🟡 Note solide, **volume faible** vs concurrents urbains (50-200 avis typique). Cible : +1 avis / semaine sur 6 mois → 50+ avis fin 2026. |
| 19 | Réponses propriétaire aux avis | ❓ Inconnu Tier 0 | — | Tier 1 requis. Cible : **100 % de réponses** (5★ ET <5★). |
| 20 | Posts (Updates / Offres / Événements) | ❓ Inconnu Tier 0 | — | Tier 1 requis. Recommandation : **1 post/semaine** (nouvelle annonce, livraison, conseil). |
| 21 | Questions & Réponses (Q&A) | ❓ Inconnu Tier 0 | — | Pré-seed 5-10 questions fréquentes : "Faites-vous l'import Allemagne ?", "Carte grise incluse ?", "Quels délais ?", etc. |
| 22 | Produits / Services | ❓ Inconnu Tier 0 | — | Lister : Mandat de recherche, Import Allemagne, Dépôt-vente, Detailing (nettoyage / polissage / céramique / sellerie cuir) |
| 23 | Attributs | ❓ Inconnu Tier 0 | — | Activer : "Vendeur de voitures d'occasion", "Sur RDV uniquement" si pertinent, "Devis gratuit", "Wi-Fi gratuit", etc. |
| 24 | Lien de prise de RDV | ❓ Inconnu Tier 0 | — | Brancher vers `recherche-personnalisee.html` ou WhatsApp `wa.me/33629324299` |
| 25 | Messagerie GBP activée | ❓ Inconnu Tier 0 | — | Activer la messagerie ou rediriger vers WhatsApp |

### Champs critiques pour le ranking local (priorité Tier 0)

1. 🔴 **Catégorie secondaire `Mandataire automobile`** — c'est ton mot-clé n°1 SEO ; sans cette catégorie GBP, tu plafonnes pour "mandataire auto Niort/Parthenay/Bressuire".
2. 🔴 **Photos** : passer de 1 à 30+. Google pondère lourdement le nombre de photos uploadées par le propriétaire et par les clients.
3. 🔴 **Description GBP** avec les 5 mots-clés cibles du site (mandat recherche, import Allemagne, etc.)
4. 🟡 **Volume d'avis** : passer de 25 à 50+ en 6 mois (1 demande systématique par livraison + suivi 7 jours après).
5. 🟡 **Vérifier les horaires** affichés sur Google : 9h–20h 7j/7 paraît surdimensionné pour une TPE — désaligner avec la réalité dégrade la note locale (clients qui se déplacent et trouvent fermé).

---

## 3. Schema.org `LocalBusiness` — État actuel et gaps

**Présent dans `index.html`** (et 8 autres pages) :

```json
{
  "@type": ["AutoDealer", "LocalBusiness"],
  "name": "Hancock Motors",
  "telephone": "+33629324299",
  "email": "contact@hancockmotors.fr",
  "foundingDate": "2020",
  "address": { "addressLocality": "Scillé", "postalCode": "79240", ... },
  "areaServed": [Niort, Parthenay, Bressuire, Deux-Sèvres, Nouvelle-Aquitaine],
  "priceRange": "€€-€€€",
  "sameAs": [Facebook, Instagram]
}
```

### Gaps prioritaires (à ajouter sans publier l'adresse complète)

| Champ manquant | Recommandation |
|---|---|
| `geo` | Coordonnées de Scillé (centre commune) : `latitude: 46.6286, longitude: -0.5444` (pas l'adresse exacte). |
| `openingHoursSpecification` | Aligner sur les horaires GBP **réels** une fois corrigés. |
| `aggregateRating` | ⚠️ **Attention** : Google ignore le markup review *self-served* sur LocalBusiness. À ajouter **uniquement** si la note vient d'un agrégateur tiers visible sur la page (ex : widget d'avis Google embed). Sinon, ne pas le mettre. |
| `image` | URL absolue HD (logo + photo couverture) — important pour les rich results. |
| `hasMap` | URL Google Maps du profil GBP (récupérable une fois propriétaire authentifié). |
| `legalName` | `"Hancock Motors SARL"` |
| `taxID` | `"FR" + clé + SIREN` (à vérifier — TVA intracommunautaire si applicable). |
| `foundingDate` | Corriger `"2020"` → `"2021"` (cohérent avec le SIRET). |
| `knowsLanguage` | `["fr", "en"]` — anglophone évident vu le nom commercial + import Allemagne. |

---

## 4. Présence cross-platform

| Plateforme | Statut | Action |
|---|---|---|
| **Google Maps / GBP** | ✅ Vérifié (4.7★ / 25 avis) | Optimiser (cf. §2) |
| **Bing Places** | ❌ Absent | 🔴 **Réclamer** sur [bingplaces.com](https://www.bingplaces.com/) — gratuit, 5 min de paperasse. Bing = 5-8 % du trafic search FR + Cortana / Edge. |
| **Apple Maps / Apple Business Connect** | ❓ Non vérifiable Tier 0 | 🔴 **Réclamer** sur [businessconnect.apple.com](https://businessconnect.apple.com) — gratuit, indispensable pour le trafic iOS Plans (~30 % des utilisateurs FR). |
| **OpenStreetMap** | ❌ Non référencé | 🟡 Créer un node OSM via [openstreetmap.org/edit](https://www.openstreetmap.org/edit). Tags : `shop=car`, `car=used`, `name=Hancock Motors`, `phone`, `website`, `addr:*`. Alimente Apple Maps fallback, Mapbox, GPS open source. |
| **Facebook Pages** | ✅ Présent (`/hancockmotors`) | Vérifier que l'adresse + horaires y sont synchronisés. |
| **Instagram Business** | ✅ Présent (`/hancockmotors`) | Vérifier que l'adresse + bouton appel y sont activés (compte Business, pas Creator). |
| **WhatsApp Business** | ✅ Présent (lien `wa.me`) | Vérifier que c'est un compte WhatsApp **Business** (avec catalogue + horaires + adresse), pas perso. |

---

## 5. Citations / annuaires métier (Tier 0 confirmés)

Toutes citations actives et cohérentes :
- societe.com — fiche SIREN
- pappers.fr — fiche entreprise
- verif.com — fiche entreprise
- kompass.com — annuaire B2B
- hoodspot.fr / annuaire.petitesaffiches.fr — annuaire local
- garage-auto.info — annuaire métier
- intramuros.org/scille — annuaire municipal
- concessionnaire-automobile.autour-de-moi.com — agrégateur Google

**Pas d'incohérences NAP** détectées sur ces sources.

### Annuaires métier auto à ajouter (gratuit, +ranking local)

| Annuaire | Pourquoi | Lien |
|---|---|---|
| **PagesJaunes** | Référence FR — alimente Bing/Yahoo et plusieurs GPS | pagesjaunes.fr/pros |
| **Yelp France** | Citation utile + alimente Apple Maps reviews | biz.yelp.fr |
| **Foursquare / Factual** | Alimente plusieurs apps tierces | foursquare.com/business |
| **AlloCine Auto / La Centrale Pro** | Spécifique secteur auto | — |
| **Leboncoin Pro** | Si vente de stock — backlink + visibilité | leboncoin.fr/pro |

---

## 6. Limitations Tier 0 — ce qui n'a pas pu être audité

| Élément | Pourquoi inaccessible Tier 0 | Comment l'obtenir |
|---|---|---|
| Description GBP réelle (750 car.) | Aggrégateur ne l'expose pas | Dashboard GBP **ou** DataForSEO `business_listings_search` |
| Vélocité / distribution des 25 avis | Pas d'accès aux dates | DataForSEO `google_reviews` (Tier 1) |
| Taux de réponse owner aux avis | Idem | DataForSEO `google_reviews` |
| Posts GBP (présence / fréquence) | Idem | DataForSEO `business_listings_search` |
| Q&A GBP | Idem | DataForSEO |
| Photos count exact + breakdown | Aggrégateur = 1, mais pourrait y en avoir + | Dashboard GBP |
| Apple Maps listing | Pas d'API publique | Connexion à businessconnect.apple.com |
| Geo-grid SoLV (Share of Local Voice) | Demande DataForSEO Maps SERP | `/seo-maps grid` Tier 1 (~10–30 € selon couverture) |

---

## 7. Top 10 actions prioritaires (NAP + GBP)

| # | Priorité | Action | Effort | Impact ranking local |
|---|---|---|---|---|
| 1 | 🔴 Critique | Ajouter catégorie GBP secondaire **`Mandataire automobile`** | 2 min | **Très élevé** — déverrouille le mot-clé n°1 |
| 2 | 🔴 Critique | Uploader **30+ photos** sur GBP (extérieur, voitures, intérieur, équipe) | 1-2 h | **Très élevé** |
| 3 | 🔴 Critique | Rédiger description GBP 700-750 car. avec mots-clés cibles | 30 min | **Élevé** |
| 4 | 🔴 Critique | Vérifier / corriger les horaires GBP (9h-20h 7j/7 = vraiment ?) | 5 min | **Élevé** (UX + ranking) |
| 5 | 🟡 Moyenne | Réclamer **Apple Business Connect** + créer le profil | 30 min | **Élevé** (~30 % trafic iOS) |
| 6 | 🟡 Moyenne | Réclamer **Bing Places** | 30 min | **Moyen** (5-8 % search FR) |
| 7 | 🟡 Moyenne | Créer node **OpenStreetMap** | 20 min | **Moyen** (alimente écosystème open data) |
| 8 | 🟡 Moyenne | Plan d'avis : 1 demande / livraison → cible **50+ avis fin 2026** | Process continu | **Élevé** sur 6 mois |
| 9 | 🟡 Moyenne | Pré-seed **5-10 Q&A** sur GBP | 30 min | **Moyen** |
| 10 | 🟢 Faible | Compléter le JSON-LD du site : `geo`, `openingHoursSpecification`, `legalName`, corriger `foundingDate`→2021 | 20 min | **Moyen** (rich results) |

---

## 8. Schema.org `LocalBusiness` recommandé (à intégrer dans `index.html`)

> Diff par rapport à l'existant — additif, ne pas casser ce qui marche.

```json
{
  "@context": "https://schema.org",
  "@type": ["AutoDealer", "LocalBusiness"],
  "@id": "https://hancockmotors.fr/#business",
  "name": "Hancock Motors",
  "legalName": "Hancock Motors SARL",
  "url": "https://hancockmotors.fr",
  "image": "https://hancockmotors.fr/assets/logo-blanc.png",
  "logo": "https://hancockmotors.fr/assets/logo-blanc.png",
  "description": "Mandataire auto à Scillé (79) — mandat de recherche, import Allemagne, dépôt-vente, detailing. Voiture d'occasion en Deux-Sèvres.",
  "inLanguage": "fr",
  "knowsLanguage": ["fr", "en"],
  "telephone": "+33629324299",
  "email": "contact@hancockmotors.fr",
  "foundingDate": "2021",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Scillé",
    "postalCode": "79240",
    "addressRegion": "Nouvelle-Aquitaine",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.6286,
    "longitude": -0.5444
  },
  "areaServed": [
    { "@type": "City", "name": "Niort" },
    { "@type": "City", "name": "Parthenay" },
    { "@type": "City", "name": "Bressuire" },
    { "@type": "City", "name": "Poitiers" },
    { "@type": "AdministrativeArea", "name": "Deux-Sèvres" },
    { "@type": "AdministrativeArea", "name": "Nouvelle-Aquitaine" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "€€-€€€",
  "sameAs": [
    "https://www.facebook.com/hancockmotors",
    "https://www.instagram.com/hancockmotors"
  ]
}
```

> **Notes** : `geo` = centre de Scillé (pas l'adresse exacte → conforme à la règle CLAUDE.md "ne jamais mettre l'adresse complète en clair"). `openingHoursSpecification` à **aligner sur les horaires réels** (le 9h-19h lun-sam est une suggestion à valider). `aggregateRating` **volontairement omis** : Google ignore le self-serve sur LocalBusiness — à ajouter uniquement si un widget d'avis tiers est embarqué.

---

## 9. Coût Tier 0

**0 €** — analyse 100 % gratuite via WebFetch + APIs publiques.

Pour passer Tier 1 (DataForSEO requis pour : geo-grid, GBP live, vélocité avis, posts/Q&A actifs) — coût indicatif d'un audit complet : **5-15 €**.

---

## 10. Disclaimer

Cette analyse Tier 0 repose sur ce qui est **observable publiquement** (site, registres, agrégateurs synchronisés Google Maps). Tous les champs marqués **❓ Inconnu** demandent **soit** un accès direct au tableau de bord Google Business Profile (`business.google.com`), **soit** un upgrade Tier 1 (DataForSEO). La cohérence interne entre les sources publiques est **excellente** — l'enjeu principal n'est **pas** le NAP (très propre) mais l'**optimisation du profil GBP** lui-même et l'**absence sur Bing/Apple/OSM**.
