# data/

Les jeux de données du projet et ce qu'on en fait.

## Ce qu'on met ici

- `raw/` — les données brutes, **jamais modifiées à la main**.
- `processed/` — les données nettoyées, produites par un script reproductible.
- `notebooks/` — les analyses exploratoires.

## Ce qu'on ne met pas ici

- **Des données personnelles.** Réponses d'enquête nominatives, exports de contacts, listes d'emails : tout ça va dans `private/`, ignoré par Git.
- Des fichiers volumineux (> 50 Mo).

## Documentation obligatoire

Chaque dataset déposé dans `raw/` est décrit ici, dans le tableau ci-dessous, avant d'être utilisé.

| Fichier | Provenance | Date de collecte | Schéma / colonnes | Anonymisé |
|---|---|---|---|---|
| _(aucun pour l'instant)_ | | | | |

TODO: remplir ce tableau au premier dataset ajouté.

## Règle

Une donnée dans `processed/` doit être régénérable depuis `raw/` par un script de `scripts/`. Si ce n'est pas le cas, on a perdu la trace de ce qu'on a fait.
