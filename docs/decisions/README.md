# docs/decisions/

Les décisions structurantes du projet, une par fichier. Format ADR léger (Architecture Decision Record).

## Ce qu'on met ici

Toute décision qu'on aurait du mal à réexpliquer dans six mois : le nom du produit, le segment cible, un pivot, l'abandon d'une fonctionnalité, le choix d'un modèle économique.

## Ce qu'on ne met pas ici

Les micro-arbitrages du quotidien, les décisions réversibles en cinq minutes, les comptes rendus de réunion (→ `meetings/`).

## Convention de nommage

`NNNN-titre-en-kebab-case.md`, numérotation à quatre chiffres, incrémentale et jamais réutilisée.

Exemple : `0002-choix-du-nom-chord.md`

## Comment faire

1. Copier `0001-template.md`.
2. Le renommer avec le numéro suivant disponible.
3. Le remplir. Une décision au statut `Acceptée` ne se modifie plus : si on change d'avis, on crée une nouvelle décision qui remplace l'ancienne et on passe l'ancienne en `Remplacée par NNNN`.
