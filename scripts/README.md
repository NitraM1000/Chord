# scripts/

Les scripts utilitaires du projet.

## Ce qu'on met ici

- Les traitements de données (`raw/` → `processed/`).
- Les scripts de vérification du repo : liens cassés, `TODO:` oubliés, détection de données personnelles avant commit.
- Les scripts d'export (deck, landing).

## Ce qu'on ne met pas ici

- Le code du produit lui-même.
- **Toute clé d'API, token ou mot de passe.** Les secrets se lisent depuis des variables d'environnement, jamais depuis le code. Voir `.env.example` si un jour il en faut un.

## Règle

Chaque script porte un en-tête de trois lignes : ce qu'il fait, comment on le lance, ce qu'il produit. Un script non documenté ne sera pas relancé par quelqu'un d'autre.

## État actuel

TODO: aucun script pour l'instant. Le premier utile serait sans doute un vérificateur d'anonymisation lancé avant chaque commit.
