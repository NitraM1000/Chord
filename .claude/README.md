# .claude/

La configuration Claude propre à ce repo.

## Ce qu'on met ici

- `skills/` — les skills du projet, un dossier par skill contenant un `SKILL.md`.

## Ce qu'on ne met pas ici

- Des clés d'API ou une configuration contenant des secrets.
- Des instructions générales sur le projet → `CLAUDE.md`, à la racine, que Claude lit automatiquement.

## Comment ça marche

Quand quelqu'un clone ce repo et ouvre Claude dedans, `CLAUDE.md` est lu automatiquement et les skills de `skills/` deviennent disponibles. Chaque skill se déclenche selon le `description` de son frontmatter — c'est cette phrase qui détermine si Claude charge le skill au bon moment, donc elle décrit **quand** l'utiliser, pas seulement ce qu'il fait.

## Les skills disponibles

| Skill | Quand |
|---|---|
| `chord-onboarding` | Quelqu'un découvre le projet |
| `chord-debate` | On veut trancher une décision |
| `chord-devils-advocate` | On veut faire attaquer une idée |
| `chord-pitch-trainer` | On s'entraîne à pitcher |
| `chord-interview-analyst` | Un nouvel entretien arrive |
| `chord-doc-keeper` | Le repo dérive |

## Règle

Un skill qui n'a jamais servi en deux mois est soit mal décrit, soit inutile. On le corrige ou on le supprime.
