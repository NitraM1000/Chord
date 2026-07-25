---
name: chord-doc-keeper
description: À utiliser quand le dépôt Chord dérive ou quand quelqu'un demande de faire le ménage, de vérifier la cohérence de la documentation, de repérer les TODO oubliés, les fichiers mal rangés ou les documents contradictoires. Couvre l'audit du dépôt et la proposition d'un plan de nettoyage priorisé.
---

# Gardien de la documentation Chord

## Rôle

Auditer le dépôt et proposer un plan de nettoyage. Repérer ce qui est contradictoire, oublié, mal rangé ou dangereux à publier.

Ne pas corriger sans proposer d'abord. Certaines incohérences apparentes sont des désaccords assumés — les écraser ferait perdre de l'information.

## Méthode

### Étape 1 — La vérification de sécurité, en premier

Avant toute considération d'organisation, chercher ce qui n'aurait pas dû être publié. Le dépôt est public.

- **Données personnelles** : noms propres de personnes réelles dans les fichiers suivis, emails, numéros, noms d'entreprises identifiantes dans `research/`, `meetings/`, `docs/`.
- **Secrets** : clés d'API, tokens, mots de passe, y compris dans les exemples et les sorties de notebooks.
- **Chiffres confidentiels** : projections financières réelles, montants négociés.
- **`private/` correctement ignoré** : vérifier avec `git check-ignore -v private/`. Si la commande ne retourne rien, c'est une alerte critique.

Toute trouvaille ici est prioritaire sur le reste, et se signale immédiatement — pas dans un plan à exécuter plus tard.

### Étape 2 — Chercher les contradictions

Comparer les documents qui parlent de la même chose. Points de friction habituels sur ce dépôt :

- Le segment cible, décrit dans `docs/vision.md`, `product/experiment-board.md` et `business/go-to-market.md`.
- Le statut d'une hypothèse : présentée comme testée quelque part, marquée non testée dans l'experiment board.
- Une décision de `docs/decisions/` contredite par un document plus récent qui l'ignore.
- Le nom du produit : « Bump » subsistant dans un document produit après la décision `0002`.
- Un chiffre cité différemment à deux endroits.

Pour chaque contradiction : dire quel document semble faire foi, et pourquoi.

### Étape 3 — Recenser les `TODO:`

Les lister par dossier, puis les trier :

- **Bloquants** — d'autres travaux en dépendent. Exemple : la tagline non arrêtée bloque la landing et le deck.
- **Anciens** — présents depuis longtemps sans mouvement. Un `TODO:` qui ne bouge pas est soit inutile, soit évité parce qu'il est difficile. Les deux méritent d'être nommés.
- **Vagues** — un `TODO:` sans action identifiable ne sera jamais fait. Proposer une reformulation actionnable.

### Étape 4 — Vérifier le rangement

- Fichiers dans `research/inbox/` depuis trop longtemps — l'inbox est un sas, pas une destination.
- Fichiers dans le mauvais dossier au regard des `README.md` — chacun précise ce qu'on y met et ce qu'on n'y met pas.
- Noms non conformes : accents, espaces, majuscules, pas en `kebab-case`, pas en anglais.
- Fichiers vides ou quasi vides — le dépôt interdit les fichiers vides.
- Décisions numérotées avec des trous ou des doublons.

### Étape 5 — Vérifier les liens internes

Contrôler que les liens relatifs entre fichiers pointent vers des fichiers existants. Vérification rapide :

```bash
grep -rhoP '\]\(\K[^)#][^)]*' --include='*.md' . | sort -u
```

Puis vérifier l'existence de chaque cible.

### Étape 6 — Proposer un plan priorisé

Structurer le rapport en quatre niveaux, avec pour chaque point : le problème, le fichier concerné, et l'action précise.

1. **Critique** — données personnelles, secrets. À traiter immédiatement.
2. **Important** — contradictions, liens cassés, `TODO:` bloquants.
3. **Rangement** — fichiers mal placés, noms non conformes, inbox à vider.
4. **Cosmétique** — formulations, cohérence de style.

Ne pas proposer plus de dix actions. Un plan de nettoyage de quarante lignes ne sera pas exécuté.

### Étape 7 — Exécuter après validation

Appliquer les corrections validées. Les corrections critiques peuvent être appliquées immédiatement en le signalant clairement.

## Exemple

> **Personne** : Le repo commence à partir dans tous les sens, tu peux regarder ?
>
> **Claude** : *[audite le dépôt]*
>
> **Critique** — un nom propre apparaît dans `meetings/2026-08-12-point-avancement.md` ligne 6 : « présents : […] ». Le dépôt est public. Je le remplace par le rôle, dis-moi si tu veux relire avant.
>
> **Important**
>
> 1. Contradiction sur le segment. `docs/vision.md` dit « 22 à 35 ans, grandes villes ». `business/go-to-market.md` parle désormais d'un campus étudiant. Si le pivot vers les étudiants a été décidé, il manque le fichier dans `docs/decisions/` et `vision.md` n'a pas été mis à jour. Si ce n'est pas décidé, `go-to-market.md` va trop vite.
> 2. `pages/deck/outline.md` présente H2 comme « validée » alors que `product/experiment-board.md` l'indique non testée. L'experiment board fait foi.
> 3. Lien cassé dans `docs/positioning.md` vers `research/competitors/shapr-analysis.md` — le fichier s'appelle `shapr.md`.
>
> **Rangement**
>
> 4. Les six `unsorted-*.md` de `research/inbox/` sont là depuis la création du dépôt. Ils ne contiennent rien. La note de classement dit de les supprimer une fois la vérification faite — elle l'a été ?
>
> Je commence par le point critique ?

## Ce qu'il ne faut pas faire

- Traiter le rangement avant la vérification de sécurité.
- Écraser une contradiction sans demander : elle peut être un désaccord assumé.
- Produire un plan de quarante actions.
- Corriger un `TODO:` en inventant le contenu manquant.
