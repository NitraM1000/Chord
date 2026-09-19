# Positionnement

> ⚠️ **Ce document décrit le produit *ambiant* (cafés, coworking, transports), qui n'est plus la direction du projet depuis le 15 septembre 2026.**
> Voir `docs/decisions/0003-mode-evenement-et-detection-de-proximite.md`. Ce document n'a pas encore été réécrit : le lire en sachant qu'il est en partie périmé.

> Source d'origine : `chord_project_files_Proposition_de_valeur.md`, juillet 2026.
> **Statut : hypothèse non validée.**

## Proposition de valeur

Chord propose une nouvelle manière de créer du réseau professionnel, en **révélant les connexions potentielles déjà présentes autour de soi dans la vie réelle**.

Elle repose sur trois éléments :

1. **Transformer les lieux du quotidien en opportunités de networking.** Un café, un espace de travail partagé, une file d'attente, un train deviennent des contextes de rencontre professionnelle.
2. **Faciliter les rencontres informelles et spontanées.** Sans créneau à bloquer, sans invitation à envoyer, sans attendre une réponse.
3. **Rendre visible un réseau qui existe déjà mais reste invisible.** La promesse n'est pas de créer des connexions, c'est de révéler celles qui sont déjà à portée.

## Différenciation

L'axe qui sépare Chord des acteurs existants est le **déclencheur de la rencontre**.

| Acteur | Déclencheur | Délai entre l'envie et la rencontre |
|---|---|---|
| LinkedIn | Recherche volontaire, invitation | Jours à semaines |
| Shapr | Affinité déclarée, matching | Jours |
| Lunchclub | Algorithme + créneau planifié | Jours |
| Événements physiques | Inscription à l'avance | Semaines |
| **Chord** | **Proximité physique, maintenant** | **Minutes** |

Personne ne se positionne sur la proximité en temps réel dans le contexte professionnel.

**Ce tableau est périmé depuis la décision `0003`.** En mode événement, les concurrents ne sont plus LinkedIn, Shapr et Lunchclub, mais les applications déployées par les organisateurs d'événements — Swapcard, Brella et les autres. Leur déclencheur est l'inscription, pas le croisement réel, mais ils occupent le même moment et le même public. TODO: refaire ce tableau avec ces acteurs, voir `research/competitors/event-networking-apps.md`.

**Attention.** Un espace vide n'est pas nécessairement un espace disponible. Il peut être vide parce que personne n'a réussi à y tenir. Cette hypothèse doit être traitée frontalement — voir `brainstorm/objections.md` et le skill `chord-devils-advocate`.

## Le nom

« Chord » — un accord musical, plusieurs notes jouées ensemble produisant ce qu'aucune ne produit seule. Voir `docs/decisions/0002-choix-du-nom-chord.md`.

## Les valeurs du produit

Cinq valeurs identifiées lors du travail sur le nom :

- **Spontanéité** — la rencontre n'est pas planifiée.
- **Proximité** — physique avant d'être thématique.
- **Rencontre** — le but est la rencontre réelle, pas la connexion en ligne.
- **Opportunité** — chaque lieu devient un contexte possible.
- **Authenticité** — sans la mise en scène des profils professionnels en ligne.

TODO: ces valeurs orientent-elles réellement des arbitrages produit ? Si aucune décision ne peut être tranchée en s'y référant, ce sont des mots et pas des valeurs. Les tester sur trois arbitrages concrets.

## Positionnement en une phrase

TODO: à écrire, puis à tester sur au moins cinq personnes hors du projet. Le test : après avoir entendu la phrase une fois, la personne sait-elle redire ce que fait le produit ? Si non, la phrase ne marche pas.

Voir `pages/copy/taglines.md`.

## Formulation de valeur — version du 15 septembre 2026

La formulation retenue par la décision `0003`, qui remplace « outil de mémoire » :

> **La rencontre qu'on n'a pas eu le temps de faire.** On ressort d'un événement avec le sentiment d'être passé à côté des bonnes personnes. Parmi les soixante personnes croisées hier, en voici trois dont le besoin du moment croise le tien. L'événement continue le lendemain.

Elle tient sur deux composants, dont aucun ne suffit seul :

| | Ce que ça apporte | Ce qui reste sans l'autre |
|---|---|---|
| **La demande** | La raison de contacter : il cherche un associé technique, on en est un | Sans proximité : un carnet d'adresses, valeur faible |
| **La proximité** | La légitimité et la brièveté de la liste : « on était au même point café à 16 h » | Sans demande : un annuaire de participants, valeur nulle |

**Statut : non testée.** Cette formulation n'a été éprouvée sur personne hors du projet. Le test prévu est décrit en Q10 de `brainstorm/open-questions.md`.

TODO: le test de mémorisation prévu plus haut — la personne sait-elle redire ce que fait le produit après l'avoir entendu une fois ? — s'applique à cette formulation aussi. Il n'a pas été fait.
