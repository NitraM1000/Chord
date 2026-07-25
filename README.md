# Chord

> Révéler le réseau professionnel qui est déjà autour de vous.

---

## 🇫🇷 Français

### Le projet

Le réseau décide d'une grande partie des opportunités professionnelles : un associé, un premier client, une collaboration. Mais les outils qui servent à le construire fonctionnent tous sur le même mode — asynchrone, déclaratif, planifié. On envoie une invitation et on attend. On s'inscrit à un événement trois semaines à l'avance.

Pendant ce temps, les personnes qu'on devrait rencontrer sont assises à trois tables de nous. On ne le sait pas.

**Chord part de l'hypothèse qu'il existe un réseau professionnel latent autour de chacun, en permanence, et que le rendre visible crée de la valeur.**

Détail : [`docs/vision.md`](docs/vision.md) · Différenciation : [`docs/positioning.md`](docs/positioning.md)

### État du projet

**Phase de recherche produit.** Pour être direct sur ce que contient ce dépôt :

| | |
|---|---|
| Hypothèses testées | 0 sur 7 |
| Entretiens exploitables | 0 |
| Chiffres de marché sourcés | 0 |
| Lignes de code | 0 |

Ce dépôt ne documente pas un produit. Il documente un travail de validation en cours, et il est structuré pour que ce travail soit fait sérieusement plutôt que contourné.

Ce qu'il faut lire pour comprendre où ça en est : [`product/experiment-board.md`](product/experiment-board.md) et [`brainstorm/open-questions.md`](brainstorm/open-questions.md).

### Structure du dépôt

| Dossier | Contenu |
|---|---|
| [`docs/`](docs/) | Ce qui est stabilisé : vision, positionnement, glossaire, FAQ, décisions |
| [`research/`](research/) | Ce qu'on a appris : entretiens anonymisés, concurrents, marché, retours de pairs |
| [`product/`](product/) | Ce qu'on construit et comment on le valide : experiment board, stories, roadmap |
| [`business/`](business/) | Modèle économique, prix, go-to-market, métriques |
| [`brainstorm/`](brainstorm/) | Ce qui n'est pas tranché : idées, questions ouvertes, objections |
| [`pages/`](pages/) | Landing, pitchs, plan du deck |
| [`assets/`](assets/) | Logos, identité visuelle, captures, maquettes |
| [`data/`](data/) | Jeux de données : brut, traité, notebooks |
| [`meetings/`](meetings/) | Comptes rendus de réunion |
| [`scripts/`](scripts/) | Utilitaires |
| [`.claude/`](.claude/) | Les skills Claude propres au projet |

Chaque dossier a un `README.md` qui précise ce qu'on y met et ce qu'on n'y met pas.

### Démarrer

```bash
git clone <url-du-depot>
cd chord
```

Aucune dépendance à installer : le dépôt ne contient que de la documentation.

**Pour comprendre le projet en dix minutes**, dans cet ordre :

1. [`docs/vision.md`](docs/vision.md) — le problème et l'hypothèse
2. [`docs/positioning.md`](docs/positioning.md) — pourquoi ce serait différent
3. [`product/experiment-board.md`](product/experiment-board.md) — ce qui reste à prouver
4. [`brainstorm/objections.md`](brainstorm/objections.md) — pourquoi ça pourrait ne pas marcher

**Avec Claude.** Le dépôt contient un [`CLAUDE.md`](CLAUDE.md) lu automatiquement et six skills dans [`.claude/skills/`](.claude/skills/) :

| Skill | Quand |
|---|---|
| `chord-onboarding` | Découvrir le projet |
| `chord-debate` | Trancher une décision, avec un contradicteur |
| `chord-devils-advocate` | Faire attaquer une idée avant de la retenir |
| `chord-pitch-trainer` | S'entraîner à pitcher face à un interlocuteur difficile |
| `chord-interview-analyst` | Traiter un nouvel entretien utilisateur |
| `chord-doc-keeper` | Nettoyer le dépôt quand il dérive |

### Contribuer

Voir [`CONTRIBUTING.md`](CONTRIBUTING.md). Les trois règles non négociables :

1. **Aucune donnée personnelle identifiante** — le dépôt est public, les personnes interviewées sont anonymisées en `interviewee-NN`.
2. **Aucun secret** — pas de clé d'API, jamais.
3. **Aucun chiffre sans source** — sinon `TODO: sourcer`.

La meilleure contribution à ce stade n'est pas d'ajouter une idée : c'est d'attaquer une hypothèse existante, ou de réaliser un entretien.

### Licence

MIT — voir [`LICENSE`](LICENSE).

---

## 🇬🇧 English

### The project

Professional networks drive a large share of opportunities: a co-founder, a first client, a collaboration. Yet every tool built to grow them works the same way — asynchronous, declarative, scheduled. You send an invitation and wait. You sign up for an event three weeks out.

Meanwhile, the people you should be meeting are sitting three tables away. You never find out.

**Chord starts from the hypothesis that a latent professional network surrounds each of us at all times, and that making it visible creates value.**

Details: [`docs/vision.md`](docs/vision.md) (in French).

### Project status

**Product research phase.** To be straightforward about what this repository contains:

| | |
|---|---|
| Hypotheses tested | 0 of 7 |
| Usable interviews | 0 |
| Sourced market figures | 0 |
| Lines of code | 0 |

This repository does not document a product. It documents ongoing validation work, and it is structured so that this work gets done properly rather than skipped.

### Repository structure

| Folder | Contents |
|---|---|
| [`docs/`](docs/) | Settled material: vision, positioning, glossary, FAQ, decisions |
| [`research/`](research/) | Findings: anonymised interviews, competitors, market, peer feedback |
| [`product/`](product/) | What we build and how we validate it: experiment board, stories, roadmap |
| [`business/`](business/) | Business model, pricing, go-to-market, metrics |
| [`brainstorm/`](brainstorm/) | Unsettled material: ideas, open questions, objections |
| [`pages/`](pages/) | Landing page, pitches, deck outline |
| [`assets/`](assets/) | Logos, brand, screenshots, mockups |
| [`data/`](data/) | Datasets: raw, processed, notebooks |
| [`meetings/`](meetings/) | Meeting notes |
| [`scripts/`](scripts/) | Utilities |
| [`.claude/`](.claude/) | Project-specific Claude skills |

Every folder has a `README.md` stating what belongs in it and what does not.

### Getting started

```bash
git clone <repository-url>
cd chord
```

No dependencies to install — this repository contains documentation only.

**Note on language.** File and folder names are in English; document contents are in French. This README is the only bilingual file.

### Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) (in French). Three non-negotiable rules:

1. **No personally identifying data** — this repository is public; interviewees are anonymised as `interviewee-NN`.
2. **No secrets** — never commit an API key.
3. **No figure without a source** — otherwise mark it `TODO: sourcer`.

### License

MIT — see [`LICENSE`](LICENSE).
