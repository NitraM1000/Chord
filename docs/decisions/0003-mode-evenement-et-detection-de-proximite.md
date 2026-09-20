# 0003 — Mode événement, détection de proximité en fonctionnalité première

- **Date** : 2026-09-15
- **Statut** : Proposée
- **Décideurs** : porteur du projet, un contributeur produit

> Source : note de recadrage interne du 15 septembre 2026, elle-même en réponse à une note de décisions du 27 août 2026.
> TODO: la note de décisions du 27 août 2026 **n'existe pas dans ce dépôt**. Tant qu'elle n'y est pas, quatre décisions qu'elle contiendrait — « les deux horloges », « le mode événement », « le paquet fini », « les données locales » — sont citées sans être consultables. Les retranscrire ou les abandonner.

## Contexte

Jusqu'en août 2026, le dépôt décrit un produit **ambiant** : révéler le réseau latent dans les lieux du quotidien — cafés, espaces de travail, files d'attente, transports — avec une rencontre déclenchée dans les minutes qui suivent. C'est ce que disent encore `docs/vision.md`, `docs/positioning.md` et `product/experiment-board.md`.

Deux objections ont été formulées sur la note de décisions d'août :

1. Le document plaçait au même rang une architecture cible (mode événement avec BLE) et une proposition de dé-risquage technique (une v1 sans BLE), ce qui donnait deux plans contradictoires.
2. La valeur fondamentale, formulée comme un « outil de mémoire », était jugée faible.

Les deux sont reconnues comme justes. Cette décision consigne le recadrage qui en découle — et, incidemment, le fait que le produit décrit n'est plus le produit ambiant du dépôt.

## Options envisagées

### Option A — Produit ambiant (état documenté du dépôt)

Détecter la proximité professionnelle en continu, dans les lieux du quotidien, et déclencher une rencontre immédiate.

- Pour : c'est la promesse d'origine, celle qui rend le positionnement unique sur l'axe « déclencheur ».
- Contre : porte les deux objections les plus dures du dépôt, aucune des deux résolue — O1 (densité au démarrage) et O2 (personne ne veut être abordé dans un café). Toute la valeur dépend du « dernier mètre », hypothèse H5, non testée.

### Option B — Mode événement, tri le lendemain

Détecter passivement, pendant un événement professionnel, les personnes réellement croisées et la durée du croisement. Le lendemain, présenter un paquet fini de ces personnes avec leur demande du moment, à trier avant une échéance commune.

- Pour : l'événement borne la densité dans l'espace et dans le temps, avec une balise qu'on contrôle. Le contact étant asynchrone, il n'y a plus de dernier mètre à franchir.
- Contre : c'est un autre produit que celui décrit dans le dépôt, et un marché où plusieurs acteurs existent déjà (Swapcard, Brella). Déplace le problème de densité sans le supprimer, voir Conséquences.

### Option C — Une v1 sans détection de proximité

Une liste d'inscrits à faire défiler, pour tester le comportement de tri avant d'investir dans le BLE.

- Pour : aucun risque technique.
- Contre : abandonnée. Sans contexte de croisement, le paquet à trier n'a aucune raison d'être trié — le test produirait un faux négatif et tuerait le produit sur un mauvais essai. Voir `brainstorm/archive/2026-09-v1-sans-ble.md`.

## Décision

**Option B.** Chord devient un produit de mode événement, et la **détection passive de proximité** (BLE, réveil par balise) est la fonctionnalité première : sans elle, il n'y a pas de produit.

Trois éléments jusqu'ici confondus sont séparés :

| Élément | Statut |
|---|---|
| Détection de proximité (BLE + réveil par balise) | Fonctionnalité première, présente dès la v1 |
| Spike technique (un événement réel, une balise contrôlée, ~40 personnes, iOS et Android, mesure de la qualité des données) | Expérience d'ingénierie **avant** le produit, hors roadmap produit. Ce n'est pas une version du produit |
| Check-in à l'entrée | Mode dégradé quand la détection d'un téléphone échoue. Jamais une stratégie de v1 |

## Raison

La valeur n'est pas la mémoire — la mémoire est un mécanisme. La valeur est **la rencontre qu'on n'a pas eu le temps de faire** : ressortir d'un événement avec le sentiment d'être passé à côté des bonnes personnes.

Elle repose sur deux composants dont aucun ne suffit seul :

- **La demande** donne la raison de contacter. Ce n'est pas la proximité qui justifie d'écrire à quelqu'un, c'est qu'il cherche un associé technique et qu'on en est un.
- **La proximité** rend la liste courte, crédible et légitime. « On était au même point café à 16 h » est un motif d'approche ; « on est tous les deux inscrits » n'en est pas un.

Sans proximité → annuaire de participants, valeur nulle. Sans demande → carnet d'adresses, valeur faible. Les deux → une raison précise de contacter une personne précise.

**Cette décision repose sur un raisonnement, pas sur une donnée.** Aucun entretien ne l'appuie. Voir « Ce qui nous ferait revenir dessus ».

## Conséquences

Ce que la décision règle :

- **O1 / Q1 — densité au démarrage** : structurellement résolue. Un événement est un lieu borné, une durée bornée, une balise contrôlée. C'est le gain principal du recadrage, et la note source ne le revendique pas.
- **O2 — « personne ne veut être abordé dans un café »** : sans objet, il n'y a plus de café.
- **Q2 / H5 — « les gens osent-ils aborder un inconnu ? »** : sans objet dans ce produit. Le contact est asynchrone, le lendemain. Cette hypothèse était pourtant désignée comme « la prochaine action la plus utile du projet » : elle ne l'est plus.

Ce que la décision ouvre :

- **Un nouveau problème de densité, de contenu cette fois.** « Trois personnes dont le besoin du moment croise le tien » suppose que les participants aient renseigné une demande exploitable. Sur soixante personnes croisées, combien ? Voir Q9 dans `brainstorm/open-questions.md`. Un plancher doit être fixé avant de construire.
- **Un modèle économique plus simple.** En mode événement, l'organisateur devient un payeur plausible, ce que `business/business-model.md` listait déjà et que la note source ne mentionne pas. Voir Q5.
- **Un marché occupé.** Swapcard et Brella sont cités comme des produits que personne n'utilise ; aucune source ne l'établit. Voir `research/competitors/event-networking-apps.md`.

Ce qu'il faut mettre à jour dans le dépôt — fait à la date de cette décision, sauf mention contraire :

- `docs/vision.md`, `docs/positioning.md`, `product/experiment-board.md` : signalés comme décrivant le produit ambiant, avec renvoi ici.
- `brainstorm/open-questions.md`, `brainstorm/objections.md` : statuts revus, nouvelles entrées.
- `product/roadmap.md` : TODO: la roadmap de validation est construite autour de H5 et H6, dont l'une disparaît. À réécrire.
- `v1/` : TODO: le prototype d'onboarding reste-t-il pertinent en mode événement ? Le parcours « le signal du moment avant le métier » y survit, le reste est à réexaminer.

## Ce qui nous ferait revenir dessus

- Le test décrit en Q10 revient négatif : personne ne cite spontanément d'occasion ratée en événement, et personne ne sait dire ce qu'elle lui a coûté.
- Le spike technique montre que la qualité des données de croisement est insuffisante sur iOS ou Android en usage réel — sans donnée de croisement fiable, l'option B perd son seul avantage sur l'option C.
- Le taux de demandes renseignées par événement reste sous le plancher fixé en Q9.
