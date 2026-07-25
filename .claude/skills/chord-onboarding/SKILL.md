---
name: chord-onboarding
description: À utiliser quand une personne découvre le projet Chord ou vient de cloner le dépôt, quand elle demande par où commencer, ce qu'est le projet, où en est le travail, ou quels fichiers lire selon son rôle. Couvre la présentation du projet, la vérification de la compréhension par questions, et l'orientation vers les fichiers pertinents.
---

# Onboarding Chord

## Rôle

Faire découvrir le projet à quelqu'un qui arrive, et **vérifier qu'il a compris** plutôt que de dérouler un exposé. Un onboarding réussi se termine par une personne capable de reformuler le projet et de dire ce qui n'est pas encore prouvé.

## Principe directeur

Ne pas présenter Chord comme un produit qui existe. Le projet est au stade de la recherche : zéro hypothèse testée, zéro entretien exploitable, zéro ligne de code. Une personne qui repart en croyant que le produit est en construction a été mal accueillie, et le découvrira mal.

## Méthode

### Étape 1 — Situer la personne

Avant tout contenu, demander : **qu'est-ce qui l'amène, et avec quel angle ?** Produit, recherche utilisateur, business, technique, design, ou simple curiosité. Le parcours diffère.

Une seule question à la fois. Attendre la réponse.

### Étape 2 — Le projet en trois minutes

Lire `docs/vision.md` et `docs/positioning.md` avant de parler. Ne pas résumer de mémoire.

Présenter dans cet ordre :

1. **Le problème** — le réseau décide des opportunités, les outils existants sont tous asynchrones ou planifiés.
2. **L'hypothèse** — il existe un réseau latent autour de chacun, en permanence.
3. **Le déclencheur** — c'est l'axe de différenciation. Montrer le tableau de `docs/positioning.md`.
4. **L'état réel** — 0 sur 7 hypothèses testées. Le dire tôt, pas à la fin.

### Étape 3 — Vérifier la compréhension

Poser deux ou trois questions, une à la fois, et attendre les réponses. Exemples :

- « Si tu devais expliquer Chord à quelqu'un en une phrase, tu dirais quoi ? »
- « À ton avis, qu'est-ce qui pourrait faire échouer ce projet ? »
- « Qu'est-ce qui différencie Chord de LinkedIn, selon ce que tu viens de lire ? »

Si la réponse est vague ou fausse, ne pas enchaîner : reprendre le point mal compris. C'est l'intérêt de l'exercice.

Si la personne identifie spontanément le problème de densité (Q1) ou celui du dernier mètre (Q2), le lui dire — elle a vu les deux vrais risques.

### Étape 4 — Orienter selon le rôle

| Angle | À lire dans cet ordre | Première contribution utile |
|---|---|---|
| Recherche utilisateur | `research/interviews/`, `product/experiment-board.md` | Réaliser un entretien et le traiter |
| Produit | `product/`, `brainstorm/open-questions.md` | Formuler un test pour H5 |
| Business | `business/`, `research/peer-review/` | Répondre à « qui a déjà payé ? » |
| Stratégie / critique | `brainstorm/objections.md`, `research/competitors/` | Enquêter sur pourquoi Shapr n'a pas percé |
| Design | `assets/brand/`, `product/user-stories.md` | Attendre : la phase design n'est pas ouverte |
| Technique | `docs/vision.md`, `product/roadmap.md` | Attendre : coder maintenant serait prématuré |

Sur les deux derniers, être franc : il n'y a rien à construire tant que H5 et H6 ne sont pas testées. Le dire vaut mieux que d'inventer une tâche.

### Étape 5 — Les règles du dépôt

Rappeler les trois règles non négociables (voir `CONTRIBUTING.md`) : aucune donnée personnelle, aucun secret, aucun chiffre sans source. Puis pointer `CLAUDE.md` pour la suite.

### Étape 6 — Clôturer sur une action

Terminer par **une** action concrète, pas une liste. La meilleure action à ce stade est presque toujours : réaliser un entretien, ou attaquer une hypothèse.

## Exemple

> **Personne** : Je viens de cloner le repo, c'est quoi ce projet ?
>
> **Claude** : Avant de te raconter, dis-moi ce qui t'intéresse le plus — le produit, la recherche utilisateur, le business, ou tu regardes par curiosité ? Ça change ce que je te montre en premier.
>
> **Personne** : Plutôt le produit.
>
> **Claude** : *[lit docs/vision.md et product/experiment-board.md]* Alors, le point de départ : le réseau professionnel décide d'une grande partie des opportunités, mais tous les outils qui servent à le construire sont asynchrones ou planifiés — tu envoies une invitation LinkedIn et tu attends, tu réserves un créneau Lunchclub. Chord fait le pari qu'il y a un réseau utile physiquement autour de toi en permanence, et que le révéler crée de la valeur.
>
> Ce qu'il faut que tu saches tout de suite : rien n'est validé. Sept hypothèses dans l'experiment board, zéro testée, un seul entretien réalisé et il n'est pas exploitable.
>
> Question pour toi : à ton avis, qu'est-ce qui peut tuer ce projet ?

## Ce qu'il ne faut pas faire

- Dérouler tout le contenu du dépôt sans jamais laisser la personne parler.
- Présenter le projet comme plus avancé qu'il n'est.
- Poser trois questions dans le même message.
- Donner une liste de dix fichiers à lire — personne ne les lira.
