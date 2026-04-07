---
name: formulaire
description: Ajoute ou modifie un formulaire de contact/lead sur le site Hancock Motors
---

# Skill — Formulaire Hancock Motors

Utilise ce skill pour ajouter, modifier ou corriger un formulaire sur `index.html`.

## Comportement attendu

1. **Identifier l'emplacement** : repère la section cible dans `index.html` (ex. section contact, CTA, modal).
2. **Créer le formulaire** en HTML/Tailwind en respectant les contraintes du projet.
3. **Ajouter la validation JS** vanilla si nécessaire (pas de librairie externe).
4. **Tester la cohérence visuelle** avec le reste de la page.

## Contraintes obligatoires

- Tout le copy (labels, placeholders, messages d'erreur) doit être en **français**.
- Utiliser exclusivement des classes **Tailwind CDN** — pas de CSS inline arbitraire sauf pour les tokens custom.
- Couleurs à respecter :
  - Bouton de soumission : `bg-primary` (`#405FF2`) avec hover `bg-primary-hover` (`#4E6CFB`)
  - Fond sombre : `bg-dark` (`#050B20`)
  - Focus ring : `focus:ring-primary`
- Ne pas modifier les URLs d'images CDN.
- Ne pas ajouter de dépendances externes (pas de jQuery, pas de librairie de formulaires).

## Structure type d'un formulaire

```html
<form id="contact-form" class="flex flex-col gap-4" novalidate>
  <div>
    <label for="nom" class="block text-sm font-medium text-gray-300 mb-1">Nom complet</label>
    <input
      id="nom"
      name="nom"
      type="text"
      required
      placeholder="Jean Dupont"
      class="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Adresse e-mail</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      placeholder="jean@exemple.fr"
      class="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>

  <div>
    <label for="telephone" class="block text-sm font-medium text-gray-300 mb-1">Téléphone</label>
    <input
      id="telephone"
      name="telephone"
      type="tel"
      placeholder="+33 6 00 00 00 00"
      class="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      placeholder="Votre message…"
      class="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
    ></textarea>
  </div>

  <p id="form-error" class="hidden text-red-400 text-sm"></p>
  <p id="form-success" class="hidden text-green-400 text-sm">Votre message a bien été envoyé. Nous vous répondrons sous 24 h.</p>

  <button
    type="submit"
    class="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-lg transition-colors duration-200"
  >
    Envoyer
  </button>
</form>
```

## Validation JS vanilla type

```js
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const errorEl = document.getElementById('form-error');
  const successEl = document.getElementById('form-success');
  errorEl.classList.add('hidden');
  successEl.classList.add('hidden');

  const nom = this.nom.value.trim();
  const email = this.email.value.trim();

  if (!nom) {
    errorEl.textContent = 'Veuillez saisir votre nom.';
    errorEl.classList.remove('hidden');
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorEl.textContent = 'Veuillez saisir une adresse e-mail valide.';
    errorEl.classList.remove('hidden');
    return;
  }

  // TODO : intégrer l'appel API ou le service d'envoi ici.
  successEl.classList.remove('hidden');
  this.reset();
});
```

## Checklist avant de valider

- [ ] Tous les labels et messages sont en français
- [ ] Les classes Tailwind de couleur utilisent les tokens `primary` / `primary-hover` / `dark`
- [ ] Le formulaire est accessible (attributs `id`, `for`, `name`, `required`)
- [ ] La validation JS fonctionne sans librairie externe
- [ ] Aucune URL CDN d'image n'a été modifiée
