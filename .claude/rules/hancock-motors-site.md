---
description: Rules for editing the Hancock Motors marketing website
paths:
  - "index.html"
---

# Hancock Motors Website

Single-page French-language luxury car dealership site using **Tailwind CSS (CDN)** and vanilla JavaScript.

## Stack

- Tailwind loaded from CDN — no `tailwind.config.js`. Custom tokens are defined inline in the `tailwind.config` object inside `index.html`.
- No build step, no package manager.

## Brand Colours

| Token | Hex | Used for |
|---|---|---|
| `primary` | `#405FF2` | CTAs, price tags, accent labels, underlines |
| `primary-hover` | `#4E6CFB` | Button hover state |
| `dark` | `#050B20` | Nav background, headings, footer |

## Key JavaScript Behaviours

- **Mobile hamburger menu** — toggles nav on small screens.
- **Header opacity on scroll** — fades header as user scrolls.
- **Hero carousel** — auto-rotates every 5s; images from `hancockmotors.fr` WordPress CDN.

## Nav Dropdown — Required Pattern

Every page with a `.nav-group` dropdown **must** use the delay + clearTimeout pattern. The dropdown has `mt-3` (12px gap) between the trigger and the menu; without a delay, `mouseleave` fires in that gap and `pointer-events: none` is restored before the user can click a link.

```js
document.querySelectorAll('.nav-group').forEach(group => {
  const menu = group.querySelector('.dropdown-menu');
  if (!menu) return;
  let timer;
  group.addEventListener('mouseenter', () => { clearTimeout(timer); menu.classList.add('open'); });
  group.addEventListener('mouseleave', () => { timer = setTimeout(() => menu.classList.remove('open'), 200); });
});
```

Never use the simpler `mouseleave → remove('open')` pattern without a delay timer.

## Constraints

- All UI copy must be in **French**. Never introduce English copy.
- Do not change image URLs — all reference `hancockmotors.fr` CDN paths.
- Do not install Tailwind locally or add a `tailwind.config.js`.
