# Vision

> ⚠️ **Ce document décrit le produit *ambiant* (cafés, coworking, transports), qui n'est plus la direction du projet depuis le 15 septembre 2026.**
> Voir `docs/decisions/0003-mode-evenement-et-detection-de-proximite.md`. Ce document n'a pas encore été réécrit : le lire en sachant qu'il est en partie périmé.

> Sources d'origine : `chord_project_files_Concept.md`, `chord_project_files_Experiment_Board.md`, juillet 2026.
> **Statut : hypothèse.** Rien dans ce document n'est encore validé par des données d'entretien. Voir `research/interviews/synthesis.md`.

## Le problème

Le réseau professionnel décide d'une grande partie des opportunités : un stage, un associé, un premier client, une collaboration. Mais les outils qui servent à le construire fonctionnent tous sur le même mode — asynchrone, déclaratif, planifié.

On envoie une invitation et on attend. On s'inscrit à un événement trois semaines à l'avance. On remplit un profil décrivant qui on aimerait rencontrer.

Pendant ce temps, les gens qu'on devrait rencontrer sont assis à trois tables de nous, dans le même café, le même espace de travail, la même salle d'attente. On ne le sait pas. On ne le saura jamais.

**L'hypothèse centrale de Chord : il existe un réseau professionnel latent autour de chacun, en permanence, et le rendre visible crée de la valeur.**

## Pour qui

Le segment visé, tel que défini dans `product/experiment-board.md` :

- Entrepreneurs, freelances, fondateurs de startups, profils créatifs travaillant dans l'innovation.
- Approximativement 22 à 35 ans.
- Vivant dans de grandes villes denses : Paris, Berlin, Milan, Londres, Barcelone.

Le point commun n'est pas le métier, c'est la **situation** : des personnes dont l'activité dépend directement des rencontres qu'elles font, et qui n'ont pas de structure pour les organiser à leur place.

TODO: ce segment est déclaré, pas observé. Aucun entretien exploitable ne le confirme à ce jour.

## Pourquoi maintenant

TODO: cette section est la plus faible du document et doit être écrite sérieusement. Un projet qui ne sait pas répondre à « pourquoi ça n'existait pas il y a cinq ans, pourquoi ça marcherait aujourd'hui » a un problème de fond.

Pistes à instruire, aucune n'est démontrée :

- Le travail distribué a dispersé les lieux de travail : les rencontres qui se faisaient au bureau ne se font plus nulle part.
- La fatigue vis-à-vis des réseaux sociaux professionnels asynchrones, saturés de prospection.
- Les technologies de proximité (Bluetooth basse consommation, UWB) sont banalisées et peu coûteuses.

Contre-argument à traiter dans la même section : si la technologie est disponible depuis dix ans et que le besoin existe, pourquoi personne n'a réussi ? Voir `research/competitors/shapr.md`.

## Ce que Chord n'est pas

- Ce n'est pas une application de rencontre.
- Ce n'est pas un remplaçant de LinkedIn : LinkedIn gère le réseau déclaré et durable, Chord viserait le réseau latent et immédiat.
- Ce n'est pas un agenda de mise en relation planifiée — c'est précisément ce que fait Lunchclub, et Chord fait le pari inverse.

## Ce qui reste à démontrer

Trois choses, par ordre de difficulté :

1. **Que le problème existe** en tant que problème ressenti, et pas seulement en tant qu'observation juste. Voir `research/interviews/synthesis.md`.
2. **Que la proximité physique est un bon déclencheur** de rencontre professionnelle, alors que tous les acteurs existants ont choisi un autre déclencheur.
3. **Que la densité minimale est atteignable.** Une application de proximité sans utilisateurs à proximité ne rend aucun service. C'est le problème de démarrage le plus dur du projet.

Voir `brainstorm/open-questions.md` pour l'état de ces questions.

## Le recadrage de septembre 2026

Le produit décrit plus haut est **ambiant** : il révèle le réseau latent dans les lieux du quotidien, et la rencontre est immédiate. La décision `0003` lui substitue un produit de **mode événement** : la détection est passive pendant un événement professionnel, et le tri se fait le lendemain, de manière asynchrone.

Ce qui survit de cette vision :

- L'hypothèse centrale — il existe un réseau professionnel latent autour de chacun, et le rendre visible crée de la valeur.
- Le déclencheur par la proximité physique réelle, qui reste ce qui sépare Chord de tous les acteurs existants.
- Le refus du réseau déclaré et planifié.

Ce qui tombe :

- Le café, le train, la file d'attente comme terrain de jeu.
- La rencontre « en minutes » et le dernier mètre — voir `brainstorm/objections.md`, O2.

Ce qui change de nature : la valeur ne se formule plus comme la révélation d'un réseau latent en continu, mais comme **la rencontre qu'on n'a pas eu le temps de faire** pendant un événement. Voir `docs/positioning.md`.

TODO: réécrire ce document entièrement pour le mode événement, plutôt que de lui ajouter une section corrective. Une vision qui a besoin d'un erratum n'est pas une vision.
