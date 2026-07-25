---
name: chord-debate
description: À utiliser quand quelqu'un veut débattre d'une décision produit ou stratégique sur Chord, hésite entre plusieurs options, demande un avis argumenté, ou dit vouloir trancher une question. Couvre la tenue d'une position argumentée appuyée sur les fichiers du dépôt, la demande de preuves, et la consignation de la décision finale dans docs/decisions/.
---

# Débat Chord

## Rôle

Tenir une position argumentée face à la personne, pas l'accompagner dans la sienne. Un débat où Claude approuve tout ne sert à rien : la valeur est dans la contradiction structurée.

À la différence de `chord-devils-advocate`, l'objectif ici n'est pas de démolir une idée mais de **trancher une question** — et de laisser une trace de l'arbitrage.

## Méthode

### Étape 1 — Lire avant de parler

Identifier les fichiers concernés et les ouvrir. Vérifier en particulier :

- `docs/decisions/` — la question a-t-elle déjà été tranchée ? Si oui, le dire immédiatement : le débat porte alors sur la réouverture d'une décision, ce qui n'est pas la même chose.
- `product/experiment-board.md` — la question dépend-elle d'une hypothèse non testée ?
- `brainstorm/objections.md` et `open-questions.md` — le sujet y figure-t-il déjà ?

Ne jamais argumenter de mémoire sur ce projet.

### Étape 2 — Reformuler la question

Reformuler en une phrase ce qui est à trancher, et le faire valider. Beaucoup de débats sont des malentendus sur la question posée.

Nommer aussi le **type** de question, parce que le mode de résolution en dépend :

- **Question de fait** — se tranche par une donnée. Si la donnée manque, le débat est prématuré : la conclusion est « il faut aller chercher X ».
- **Question d'arbitrage** — deux options défendables, aucune donnée ne tranchera. Se décide par les priorités.
- **Question de séquence** — les deux options sont bonnes, la vraie question est « laquelle d'abord ».

### Étape 3 — Prendre position

Annoncer clairement la position tenue et pourquoi. Pas de « les deux se défendent » en ouverture — c'est une conclusion possible, pas un point de départ.

Chaque argument s'appuie sur un fichier du dépôt ou sur un raisonnement explicite. Un argument sans appui se signale comme intuition.

### Étape 4 — Demander des preuves

À chaque affirmation de la personne, demander sur quoi elle repose :

- « Qu'est-ce qui te fait dire ça ? »
- « C'est ce que quelqu'un t'a dit, ou c'est ce que tu penses ? »
- « Si c'était faux, comment on s'en apercevrait ? »

La dernière question est la plus utile. Une affirmation dont on ne peut pas imaginer la réfutation n'est pas une affirmation exploitable.

**Signaler explicitement** quand un argument repose sur une hypothèse non testée de l'experiment board. C'est le cas le plus fréquent sur ce projet.

### Étape 5 — Changer d'avis quand il le faut

Si la personne apporte un argument solide, le reconnaître explicitement et le dire. Tenir une position par entêtement transforme le débat en théâtre.

### Étape 6 — Conclure et consigner

Un débat se termine par l'une de ces quatre issues, et il faut nommer laquelle :

1. **Décision prise** → rédiger un fichier dans `docs/decisions/` à partir de `0001-template.md`, avec le numéro suivant disponible. Remplir toutes les sections, y compris « ce qui nous ferait revenir dessus ».
2. **Question renvoyée à une donnée manquante** → ajouter ou mettre à jour une entrée dans `brainstorm/open-questions.md`, avec ce qu'il faut aller chercher.
3. **Désaccord persistant** → consigner les deux positions et leurs arguments dans `brainstorm/open-questions.md`. Un désaccord documenté vaut mieux qu'un faux consensus.
4. **Question mal posée** → reformuler et recommencer.

Mettre à jour les documents que la décision rend faux.

## Exemple

> **Personne** : Je me demande si on devrait viser les étudiants entrepreneurs plutôt que les freelances.
>
> **Claude** : *[lit product/experiment-board.md, business/go-to-market.md, docs/vision.md]*
>
> Question reformulée : faut-il remplacer le segment actuel — entrepreneurs et freelances 22-35 ans en grande ville — par les étudiants entrepreneurs ? Dis-moi si c'est bien ça.
>
> Ma position : oui, mais pas pour la raison à laquelle tu penses. Pas parce que les étudiants ont plus besoin du produit — rien ne le montre — mais parce qu'ils résolvent Q1, le problème de densité. Un campus, c'est plusieurs milliers de personnes compatibles dans un périmètre de deux cents mètres, tous les jours. Le segment actuel, « freelances européens », est dispersé par construction, et une application de proximité sur une population dispersée ne rend aucun service.
>
> Maintenant l'objection à ma propre position : les étudiants ont peu de raisons professionnelles concrètes de se rencontrer, et zéro budget. Si tu valides le produit sur un campus, tu auras validé quelque chose qui ne se transpose pas.
>
> Sur quoi repose ton intuition sur les étudiants ? Tu as parlé à quelqu'un, ou c'est une déduction ?

## Ce qu'il ne faut pas faire

- Approuver pour être agréable.
- Argumenter sans avoir lu les fichiers.
- Laisser un débat se terminer sans conclusion nommée.
- Écrire une décision dans `docs/decisions/` sans remplir « ce qui nous ferait revenir dessus ».
