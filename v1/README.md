# v1 — prototype cliquable

> **Statut : prototype jetable.** Ce dossier contient du code, ce qui est une rupture avec le reste du dépôt. Il n'est pas un début de produit : c'est un support d'entretien. Il doit pouvoir être supprimé sans regret.

## Ce que ce dossier n'est pas

Le reste du dépôt est explicite : `product/roadmap.md` dit qu'aucun développement ne devrait démarrer avant que H5 et H6 soient testées, `CLAUDE.md` dit qu'on n'écrit pas de spec avant validation. Rien de tout cela n'a changé.

Ce prototype existe sous une hypothèse de travail assumée : **on fait comme si les arbitrages déjà pris étaient les bons**, pour avoir quelque chose à mettre devant quelqu'un. Ce n'est pas la même chose que les avoir validés.

TODO: si une seule chose doit être retenue de ce README, c'est celle-ci — ne pas laisser ce dossier se transformer en « le produit » par simple effet d'existence.

## Périmètre

**Dans le périmètre :** la création de profil, et rien d'autre.

| Écran | Rôle |
|---|---|
| Accueil | Une phrase de contexte, et l'aveu que c'est un prototype |
| Étape 1 — Qui vous croise | Prénom, activité en une ligne, ville |
| Étape 2 — En ce moment | Le signal du moment, et sa fraîcheur |
| Étape 3 — Ce que vous cherchez | Trois réponses maximum |
| Étape 4 — Ce que vous offrez | Trois réponses maximum |
| Vérification | La carte telle qu'un inconnu la verrait |
| Mon profil | La même carte, modifiable |

**Explicitement hors du périmètre**, et à ne pas ajouter sans décision préalable :

- Le radar des personnes autour (US-01).
- Les réglages de visibilité (US-02) — pourtant la story notée comme la plus importante dans `product/user-stories.md`. Son absence ici est un choix de périmètre, pas un oubli.
- La mise en relation et l'ice-breaker (US-03), qui porte H5.
- Tout backend, toute authentification, toute géolocalisation.

## Le pari du parcours

Une seule idée structure ces quatre étapes : **le signal du moment passe avant le métier**. Un profil Chord répond à « sur quoi tu es en ce moment », pas à « quel est ton poste ». C'est ce qui distingue la carte d'une fiche LinkedIn, et c'est ce que le prototype sert à mettre à l'épreuve.

Deux contraintes en découlent, toutes deux discutables :

- **Trois réponses maximum** aux étapes 3 et 4. Chercher sept choses, c'est n'en chercher aucune. TODO: le plafond de 3 est une intuition, pas un résultat de test.
- **Une question sur ce qu'on offre**, symétrique de ce qu'on cherche. TODO: c'est l'étape la plus susceptible d'être abandonnée en cours de route ; vérifier en entretien si elle est vécue comme légitime.

## Ce qu'on peut en faire

Il sert à poser une question précise en entretien, écran en main : *« voilà ce que les autres verraient de vous — est-ce que ça vous donnerait envie d'aborder quelqu'un, et est-ce que ça vous gênerait d'être vu comme ça ? »*

Il ne sert pas à démontrer que Chord fonctionne. Il ne teste ni la densité (H6), ni le passage à l'acte (H5).

## Lancer le prototype

```bash
cd v1
npm install
npm run dev
```

L'application s'ouvre sur `http://localhost:5173`. Aucune clé d'API, aucun compte, aucun réseau : le profil saisi reste dans le stockage local du navigateur et n'est envoyé nulle part — conforme à la règle 1 de [`CONTRIBUTING.md`](../CONTRIBUTING.md).

Pour produire une version statique partageable :

```bash
npm run build     # verifie les types puis construit dans v1/dist/
npm run preview
```

`node_modules/` et `dist/` sont déjà ignorés par le [`.gitignore`](../.gitignore) racine.

## Choix techniques

| Choix | Raison |
|---|---|
| React + TypeScript + Vite | Démarrage en une commande, pas de configuration à maintenir |
| Aucune dépendance UI | Cinq écrans ne justifient pas une bibliothèque de composants |
| CSS unique dans `src/styles.css` | Un fichier à lire, pas un système de design à apprendre |
| `localStorage`, pas de backend | Un prototype ne doit pas pouvoir stocker les données d'une personne réelle |
| Web plutôt que natif | Se teste depuis n'importe quel téléphone en ouvrant un lien |

La palette de couleurs est une **proposition** et n'engage rien : `assets/brand/brand-guidelines.md` indique qu'aucune identité visuelle n'est définie. TODO: arbitrer la palette dans ce fichier-là, pas ici.

## Structure

```
v1/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx            point d'entrée
    ├── App.tsx             navigation entre les écrans
    ├── types.ts            le modèle de profil, commenté
    ├── styles.css          toute la mise en forme
    ├── data/options.ts     les listes de choix (inventées, à remplacer)
    ├── lib/storage.ts      persistance locale
    ├── components/         briques réutilisées
    └── screens/            un fichier par écran
```

## Ce qu'il faudrait faire avant d'aller plus loin

1. Montrer ce parcours à six personnes du segment visé et noter où elles hésitent.
2. Remplacer les listes de `src/data/options.ts` par les formulations réellement employées en entretien.
3. Trancher la question de la visibilité (US-02) dans `docs/decisions/`, avant de coder l'écran correspondant.
4. Mettre à jour `product/roadmap.md` : ce dossier contredit sa phase 3, il faut soit l'assumer par une décision, soit le retirer.
