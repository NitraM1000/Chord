# data/raw/

Les données brutes, telles que reçues.

## Ce qu'on met ici

Les exports d'origine, non touchés : CSV d'enquête, exports d'outils, jeux de données publics.

## Ce qu'on ne met pas ici

- Des fichiers modifiés à la main. **Un fichier de `raw/` ne se modifie jamais.** Si une correction est nécessaire, elle se fait dans un script qui écrit vers `processed/`.
- Des données personnelles non anonymisées → `private/`.

## Règle

Chaque fichier ajouté ici est déclaré dans le tableau de `data/README.md` : provenance, date, schéma, statut d'anonymisation. Un fichier non déclaré est un fichier qu'on ne saura pas interpréter dans trois mois.
