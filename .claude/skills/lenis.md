---
name: lenis
description: Configure ou modifie le scroll Lenis (smooth scroll) sur les pages du site Hancock Motors
---

# Skill — Lenis Smooth Scroll

Utilise ce skill pour configurer, ajuster ou déboguer le scroll Lenis sur `index.html` ou `recherche-personnalisee.html`.

## Chargement CDN

Lenis est chargé via CDN en bas de page, avant le script principal :

```html
<script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
```

## Initialisation type

```js
const lenis = new Lenis({ lerp: 0.18, smoothWheel: true });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

## Paramètres clés

| Paramètre | Valeur actuelle | Rôle |
|---|---|---|
| `lerp` | `0.18` | Vitesse d'interpolation — plus élevé = plus rapide/réactif. Valeur par défaut Lenis : `0.1`. Ne pas dépasser `0.3` (effet trop brusque). |
| `smoothWheel` | `true` | Active le lissage sur molette souris. |

## Exposition globale (recommandé)

Expose toujours l'instance Lenis globalement pour pouvoir l'utiliser dans d'autres scripts :

```js
window._lenis = new Lenis({ lerp: 0.18, smoothWheel: true });
```

Permet ensuite de faire `window._lenis.scrollTo(target, { immediate: true })` pour sauter instantanément à une position sans interpolation.

## Intégration GSAP ScrollTrigger

Si ScrollTrigger est présent sur la page, synchronise-le avec Lenis :

```js
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

## Piège connu — window.scrollTo + Lenis

**Ne jamais utiliser `window.scrollTo()` comme alternative à Lenis.**  
Lenis intercepte `window.scrollTo` et l'anime lui-même, ce qui crée un double-animation et des conflits avec `getBoundingClientRect()`.

À la place, utiliser :
```js
window._lenis.scrollTo(targetY, { immediate: true }); // saut sans animation
window._lenis.scrollTo(targetY, { duration: 0.8 });    // saut avec animation Lenis
```

## Piège connu — écouteur `wheel` manuel

**Ne pas ajouter un écouteur `wheel` pour forcer le changement d'étape** dans les sections scroll-driven.  
Cela entre en conflit avec Lenis qui gère déjà la molette. Résultat : comportement erratique, scroll qui "remet comme avant".

La bonne approche pour les sections scroll-driven est :
1. Calculer la progression depuis `getBoundingClientRect().top` dans le callback `lenis.on('scroll', ...)` ou via `requestAnimationFrame`.
2. Augmenter `lerp` si la réactivité est insuffisante.

## Désactiver le scroll sur une section

Pour bloquer temporairement Lenis (ex. modal ouverte) :
```js
window._lenis.stop();
// ...plus tard :
window._lenis.start();
```

## Sections exclues du scroll GSAP

Si des sections utilisent `position: sticky` avec scroll-driven JS (ex. `#how-it-works`), les exclure du fade GSAP automatique :

```js
document.querySelectorAll('section:not(#how-it-works)').forEach(sec => {
  // animation GSAP ici
});
```
