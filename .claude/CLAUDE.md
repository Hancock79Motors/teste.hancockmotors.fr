# CLAUDE.md

This file provides project-wide guidance to Claude Code. Component-specific rules live in `.claude/rules/`.

## Project Overview

Static web project: **Hancock Motors** (`index.html`) — French-language luxury car dealership marketing site.

No build system, package manager, or test runner. All dependencies are CDN-hosted.

## File Map

| File | Role |
|---|---|
| `index.html` | Hancock Motors marketing site (single-page) |
| `hancockmotors_fr__.html` | PDF-to-HTML artifact — **do not edit** |

## Brand Colours

| Token | Hex | Used for |
|---|---|---|
| `primary` | `#405FF2` | CTAs, price tags, accent labels, underlines |
| `primary-hover` | `#4E6CFB` | Button hover state |
| `dark` | `#050B20` | Nav background, headings, footer |

## Project-Wide Constraints

- No build tooling — Tailwind and all other dependencies are CDN-loaded.
- All images reference `hancockmotors.fr` CDN URLs — do not change these.
- `hancockmotors_fr__.html` is auto-generated — never edit it.

## Rules

- **`.claude/rules/hancock-motors-site.md`** — applies to `index.html` (French copy, brand tokens, Tailwind CDN, JS behaviours)
