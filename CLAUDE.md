# CLAUDE.md

Instructions pour Claude sur ce dépôt. Lu automatiquement à l'ouverture du projet.

## 1. Ce qu'est Chord

Chord est un projet d'application qui révèle les connexions professionnelles utiles **physiquement présentes autour de soi, à l'instant présent**. Là où LinkedIn gère le réseau déclaré et asynchrone et Lunchclub le réseau planifié, Chord vise le réseau latent et immédiat. La cible : entrepreneurs, freelances et créatifs de 22 à 35 ans en grande ville.

Le projet est au stade de la **recherche produit**. Aucun code, aucun entretien exploitable, aucune hypothèse testée.

Détail complet : [`docs/vision.md`](docs/vision.md).

## 2. Carte du dépôt

| Dossier | Contenu | Y écrire quoi |
|---|---|---|
| `docs/` | Ce qui est stabilisé | Vision, positionnement, glossaire, FAQ |
| `docs/decisions/` | Les arbitrages structurants | Un fichier daté et numéroté par décision |
| `research/` | Ce qu'on a appris du monde extérieur | Entretiens anonymisés, concurrents, marché, retours |
| `product/` | Ce qu'on construit et comment on le valide | Experiment board, stories, roadmap, specs |
| `business/` | Comment le projet tient économiquement | Modèle, prix, go-to-market, métriques |
| `brainstorm/` | Ce qui n'est pas tranché | Idées, questions ouvertes, objections, archive |
| `pages/` | Ce qui présente Chord à l'extérieur | Landing, pitchs, plan du deck |
| `assets/` | Les fichiers visuels | Logos, identité, captures, maquettes |
| `data/` | Les jeux de données | Brut, traité, notebooks |
| `meetings/` | Les comptes rendus | Un fichier par réunion |
| `scripts/` | Les utilitaires | Traitements, vérifications |
| `private/` | **Ignoré par Git** | Tout ce qui est confidentiel ou identifiant |

Chaque dossier a un `README.md` qui précise ce qu'on y met **et ce qu'on n'y met pas**. Le lire avant d'y écrire.

**Où écrire quoi, en cas de doute** : une idée non tranchée → `brainstorm/ideas.md`. Une chose apprise de quelqu'un d'extérieur → `research/`. Une chose décidée → `docs/decisions/`. Un fichier dont on ne sait rien → `research/inbox/` avec une note de classement.

## 3. Règles d'écriture

**Langue.** Tous les noms de fichiers et de dossiers en anglais, en `kebab-case`, sans accents ni espaces. Le contenu des documents est en français. Le `README.md` racine est bilingue, français d'abord.

**Aucune donnée personnelle. Jamais.** Le dépôt est public. Pas de nom complet, pas d'email, pas de numéro, pas d'employeur identifiant une personne interviewée. Les personnes sont désignées par `interviewee-NN` ou par leur rôle. La correspondance réelle vit dans `private/`, ignoré par Git. Avant de commiter un fichier contenant des informations sur une personne, vérifier qu'elle n'est pas identifiable.

**Aucun secret.** Pas de clé d'API, de token ou de mot de passe, y compris dans les exemples et les notebooks.

**Aucun chiffre financier confidentiel.** Les projections réelles, devis et échanges avec des financeurs vont dans `private/`.

**Une décision = un fichier.** Toute décision structurante donne lieu à un fichier numéroté dans `docs/decisions/`, à partir de `0001-template.md`. Une décision au statut `Acceptée` ne se modifie plus : si on change d'avis, on crée une nouvelle décision qui remplace l'ancienne.

**Aucun fichier vide.** Si le contenu manque, écrire la structure et des `TODO:` explicites. Un `TODO:` est toujours préférable à une phrase inventée pour combler un vide.

**Aucun chiffre de marché sans source et sans date.** Un chiffre non sourcé se marque `TODO: sourcer` plutôt que d'être laissé tel quel.

## 4. Mode de travail attendu

**Lire avant de répondre.** Quand quelqu'un pose une question sur le projet, ouvrir les fichiers concernés avant de répondre. Ce dépôt existe pour que les réponses viennent de son contenu et non de l'improvisation. Si l'information n'y est pas, le dire — c'est une information en soi.

**Distinguer hypothèse et fait.** Presque tout ce qui est écrit dans ce dépôt est une hypothèse. Ne jamais présenter une hypothèse non testée comme un acquis. Quand une affirmation est reprise d'un document, vérifier son statut : `research/interviews/synthesis.md` indique que zéro entretien est exploitable à ce jour.

**Challenger les raisonnements faibles.** Un raisonnement circulaire, une conclusion sans donnée, une objection contournée plutôt que traitée : le dire. La complaisance ne rend pas service à ce projet. Si une idée est bonne, le dire aussi — mais avec la raison.

**Ne jamais inventer un chiffre.** Aucune taille de marché, aucun pourcentage, aucun nombre d'utilisateurs sorti de nulle part, même « à titre d'ordre de grandeur ». Si un chiffre est nécessaire et absent, écrire `TODO: sourcer`.

**Anonymiser par défaut.** Devant un nom propre de personne dans un contenu à écrire, le remplacer par un rôle ou un code, sans attendre qu'on le demande.

**Mettre à jour ce qui devient faux.** Ce dépôt ne doit pas contenir deux versions contradictoires de la même chose. En repérant une contradiction, la signaler.

## 5. État du projet

**Rien n'est validé.** Sept hypothèses dans `product/experiment-board.md`, zéro testée. Un entretien réalisé, zéro exploitable. Aucun chiffre de marché. Aucune ligne de code. Aucun logo.

Ce n'est pas un problème en soi — c'est l'état normal d'un projet à ce stade. Le problème serait de l'oublier en écrivant.

**Les questions prioritaires** — détail dans [`brainstorm/open-questions.md`](brainstorm/open-questions.md) :

1. **Q1 · Densité au démarrage** — une application de proximité sans utilisateurs à proximité ne rend aucun service. Aucune réponse.
2. **Q2 · Les gens osent-ils aborder un inconnu ?** — toute la valeur est dans le dernier mètre. Testable immédiatement, sans code.
3. **Q3 · Le problème est-il ressenti ou seulement reconnu ?** — dépend d'entretiens qui n'ont pas eu lieu.

Les objections non traitées sont dans [`brainstorm/objections.md`](brainstorm/objections.md). Les lire avant tout travail de présentation du projet.

## 6. Les skills

Six skills sont disponibles dans `.claude/skills/`.

| Skill | Quand l'invoquer |
|---|---|
| `chord-onboarding` | Quelqu'un découvre le projet ou vient de cloner le dépôt |
| `chord-debate` | Une décision produit ou stratégique doit être tranchée |
| `chord-devils-advocate` | Une idée doit être attaquée avant d'être retenue |
| `chord-pitch-trainer` | Entraînement au pitch face à un interlocuteur difficile |
| `chord-interview-analyst` | Un nouvel entretien utilisateur arrive et doit être traité |
| `chord-doc-keeper` | Le dépôt dérive : contradictions, `TODO:` oubliés, fichiers mal rangés |

Chaque skill précise son déclencheur dans son frontmatter. Ils ne s'excluent pas : un débat qui aboutit peut enchaîner sur la rédaction d'une décision, une idée attaquée par l'avocat du diable peut alimenter les objections.

## 7. Ce qu'il ne faut pas faire sur ce dépôt

- Écrire une spec de fonctionnalité alors qu'aucune hypothèse n'est validée.
- Produire un pitch deck en comblant les slides bloqués par des affirmations non fondées.
- Remplir `research/` avec des conclusions non issues de données réelles.
- Ajouter le nom d'une personne réelle dans un fichier suivi par Git.
- Répondre à une question sur le projet sans avoir ouvert les fichiers concernés.
