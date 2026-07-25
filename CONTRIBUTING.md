# Contribuer

Ce document décrit les conventions du dépôt. Elles existent pour qu'on retrouve les choses dans six mois, pas pour compliquer la vie.

## Avant de contribuer

1. Lire [`CLAUDE.md`](CLAUDE.md) — la carte du dépôt et les règles de fond.
2. Lire le `README.md` du dossier dans lequel on veut écrire.
3. Vérifier dans [`docs/decisions/`](docs/decisions/) que la question n'a pas déjà été tranchée.

## Les trois règles non négociables

**1 · Aucune donnée personnelle identifiante.** Le dépôt est public. Pas de nom complet, d'email, de téléphone, ni d'employeur permettant d'identifier une personne interviewée. Les personnes sont désignées par `interviewee-NN` ou par leur rôle. Les identités réelles vont dans `private/`, ignoré par Git.

**2 · Aucun secret.** Clés d'API, tokens, mots de passe : jamais dans un fichier suivi, y compris en exemple.

**3 · Aucun chiffre sans source.** Un chiffre de marché non sourcé se marque `TODO: sourcer`.

Avant chaque commit :

```bash
git status              # rien d'inattendu ?
git diff --staged       # relire ce qu'on publie
git check-ignore -v private/   # private/ est bien ignoré ?
```

## Nommage

- Fichiers et dossiers en **anglais**, en **`kebab-case`**, sans accents ni espaces.
- Décisions : `docs/decisions/NNNN-titre.md`, numérotation à quatre chiffres, jamais réutilisée.
- Entretiens : `research/interviews/interviewee-NN.md`.
- Réunions : `meetings/YYYY-MM-DD-sujet.md`.
- Archives d'idées : `brainstorm/archive/YYYY-MM-titre.md`.
- Assets : `chord-<objet>-<variante>@<densite>.<ext>`.

Le contenu des documents est en **français**. Seul le `README.md` racine est bilingue.

## Style des documents

- Un document commence par ce qu'il est et son statut, quand ce statut n'est pas évident.
- Une affirmation non vérifiée se signale comme hypothèse. Ne jamais laisser croire qu'une chose est acquise.
- Un contenu manquant s'écrit `TODO: ce qu'il faut faire` — pas un `TODO` nu, pas une phrase inventée.
- Les liens vers d'autres fichiers du dépôt sont relatifs et doivent fonctionner.
- Pas de fichier vide. Si le contenu manque, on écrit la structure et les `TODO:`.

## Branches

- `main` — l'état de référence, toujours cohérent.
- `docs/<sujet>` — travail sur la documentation.
- `research/<sujet>` — ajout de recherche, entretiens, analyse concurrentielle.
- `product/<sujet>` — specs, roadmap, experiment board.
- `fix/<sujet>` — corrections, nettoyage, réorganisation.

Sur un dépôt de documentation à un ou deux contributeurs, commiter directement sur `main` est acceptable pour les petites modifications. Une branche s'impose dès qu'un travail touche plusieurs fichiers ou remet en cause une décision.

## Commits

Format : `type(portée): description à l'infinitif`

Types utilisés :

| Type | Pour |
|---|---|
| `docs` | Documentation, contenu de fichiers |
| `research` | Ajout ou mise à jour de recherche |
| `product` | Roadmap, stories, specs, experiment board |
| `business` | Modèle, prix, go-to-market, métriques |
| `decision` | Nouvelle décision dans `docs/decisions/` |
| `chore` | Structure, configuration, nettoyage |
| `fix` | Correction d'une erreur ou d'une incohérence |

Exemples :

```
research(interviews): ajouter interviewee-02 et mettre a jour la synthese
decision(0003): trancher la zone de demarrage
docs(vision): preciser le statut hypothetique du segment cible
fix(competitors): corriger le lien casse vers comparison-table
```

Le message reste en français sans accents, pour éviter les problèmes d'encodage selon les environnements. Un commit fait une chose. « mise à jour » n'est pas un message de commit.

## Ajouter une décision

1. Copier `docs/decisions/0001-template.md`.
2. Le renommer avec le numéro suivant disponible.
3. Le remplir entièrement, section « ce qui nous ferait revenir dessus » comprise.
4. Mettre à jour les documents que la décision rend faux.

## Ajouter un entretien

Utiliser le skill `chord-interview-analyst`, qui prend en charge l'anonymisation, l'extraction des signaux et la mise à jour de la synthèse. À défaut, suivre `research/interviews/README.md`.

## Ajouter une objection

Toute objection entendue sur le projet va dans `brainstorm/objections.md`, **y compris quand on n'a rien à répondre**. Le statut `Sans réponse` est une information utile, pas un aveu de faiblesse.
