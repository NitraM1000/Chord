# Glossaire

Le vocabulaire interne du projet. Un mot qui figure ici a un sens précis dans le dépôt et ne doit pas être employé pour autre chose.

## Termes du produit

**Chord** — le nom du produit. Voir `docs/decisions/0002-choix-du-nom-chord.md`. À écrire avec une majuscule quand on parle du produit, en minuscule (`chord`) pour le nom du dépôt et des fichiers.

**Bump** — l'ancien nom de travail du projet, abandonné. On peut le rencontrer dans les fichiers de recherche d'origine. **Ne plus l'utiliser.** Si vous le croisez dans un document récent, c'est un oubli à corriger.

**Réseau latent** — l'ensemble des personnes physiquement à portée à un instant donné, avec lesquelles une rencontre professionnelle aurait de la valeur, et dont on ignore la présence. C'est l'objet même du produit.

**Déclencheur** — ce qui provoque la mise en relation. LinkedIn a pour déclencheur la recherche volontaire, Lunchclub la planification, Chord la proximité physique. C'est l'axe de différenciation principal, voir `docs/positioning.md`.

**Densité** — le nombre d'utilisateurs actifs dans une zone géographique donnée. Métrique structurante : une application de proximité sans densité locale ne rend aucun service, quel que soit son nombre total d'utilisateurs.

TODO: définir la maille de mesure de la densité (quartier, ville, lieu). Voir `research/market/market-sizing.md`.

## Termes de méthode

**Hypothèse** — une affirmation qu'on croit vraie mais qu'on n'a pas testée. Dans ce dépôt, une hypothèse est toujours signalée comme telle.

**Signal** — un élément issu d'un entretien ou d'une donnée réelle qui confirme ou infirme une hypothèse. Un signal a une source identifiable.

**Verbatim** — une citation exacte d'une personne interviewée, non reformulée. Les verbatims sont la matière première de `research/interviews/`.

**Experiment board** — le tableau qui relie hypothèse, test, résultat et décision. Voir `product/experiment-board.md`.

**Objection** — un contre-argument entendu sur le projet. Consignée dans `brainstorm/objections.md`, qu'on y ait répondu ou non.

**Décision** — un arbitrage structurant, consigné dans `docs/decisions/` sous forme de fichier numéroté.

## Termes de dépôt

**`interviewee-NN`** — le code anonyme d'une personne interviewée. La correspondance réelle vit dans `private/`, ignoré par Git.

**`TODO:`** — marque un contenu manquant assumé. Un `TODO:` est préférable à une phrase inventée pour combler un vide.

**`private/`** — le dossier ignoré par Git, où va tout ce qui ne doit pas être publié.

## À ajouter

TODO: ce glossaire grandira avec le projet. Règle : dès qu'un mot est employé deux fois dans un sens particulier au projet, il entre ici.
