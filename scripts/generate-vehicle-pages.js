#!/usr/bin/env node
/**
 * Hancock Motors — Generate static per-vehicle HTML pages.
 *
 * Reads cars-data.js + vehicule.html (template), writes one
 * vehicule-{id}.html per car with og:* / twitter:* / canonical
 * meta tags hardcoded so social previews (WhatsApp, Facebook, etc.)
 * show the car photo instead of the generic logo.
 *
 * Usage:  node scripts/generate-vehicle-pages.js
 * Run after every change to cars-data.js. Idempotent.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SITE_ORIGIN = 'https://www.hancockmotors.fr';

const carsSrc = fs.readFileSync(path.join(ROOT, 'cars-data.js'), 'utf8');
const tmpl = fs.readFileSync(path.join(ROOT, 'vehicule.html'), 'utf8');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(carsSrc + '\n;this.CARS = CARS;', sandbox);
const CARS = sandbox.CARS;
if (!Array.isArray(CARS)) {
  console.error('Failed to load CARS array from cars-data.js');
  process.exit(1);
}

const escAttr = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const truncate = (s, n) => {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  return t.length <= n ? t : t.slice(0, n - 1).trimEnd() + '…';
};

function buildPage(car) {
  const pageTitle = `${car.titre} — Hancock Motors`;
  const desc = truncate(car.description, 155);
  const heroPath = (car.photos && car.photos[0]) || '';
  const heroAbs = heroPath ? `${SITE_ORIGIN}/${heroPath}` : `${SITE_ORIGIN}/assets/logo-blanc.png`;
  const pageUrl = `${SITE_ORIGIN}/vehicule-${car.id}.html`;

  let html = tmpl;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escAttr(pageTitle)}</title>`
  );
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${escAttr(desc)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"[^>]*>/,
    `<meta property="og:title" content="${escAttr(pageTitle)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${escAttr(desc)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"[^>]*>/,
    `<meta property="og:image" content="${escAttr(heroAbs)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${escAttr(pageTitle)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${escAttr(desc)}" />`
  );

  const extraMeta = [
    `<meta property="og:url" content="${escAttr(pageUrl)}" />`,
    `<meta name="twitter:image" content="${escAttr(heroAbs)}" />`,
    `<link rel="canonical" href="${escAttr(pageUrl)}" />`,
  ].join('\n  ');

  html = html.replace(
    /(<meta\s+name="twitter:description"[^>]*>)/,
    `$1\n  ${extraMeta}`
  );

  html = html.replace(
    /(<script src="cars-data\.js"><\/script>)/,
    `<script>window.__CAR_ID__ = ${JSON.stringify(car.id)};</script>\n  $1`
  );

  return html;
}

let count = 0;
const generatedFiles = [];
for (const car of CARS) {
  if (!car.id) continue;
  const out = buildPage(car);
  const filename = `vehicule-${car.id}.html`;
  fs.writeFileSync(path.join(ROOT, filename), out, 'utf8');
  generatedFiles.push(filename);
  count++;
}

console.log(`Generated ${count} vehicle pages.`);
console.log(generatedFiles.slice(0, 5).map(f => '  ' + f).join('\n') + (generatedFiles.length > 5 ? `\n  ... (${generatedFiles.length - 5} more)` : ''));
