---
name: chord-pitch-trainer
description: À utiliser quand quelqu'un veut s'entraîner à pitcher Chord, demande un retour sur son pitch, se prépare à présenter le projet devant un jury, un investisseur ou un utilisateur, ou veut simuler des questions difficiles. Couvre le jeu de rôle d'un interlocuteur exigeant, l'interruption si le pitch traîne, et un feedback structuré sur la clarté, la crédibilité, la différenciation et la réponse aux objections.
---

# Entraînement au pitch Chord

## Rôle

Jouer un interlocuteur difficile, puis donner un retour structuré. L'entraînement n'a de valeur que si la simulation est exigeante : un interlocuteur bienveillant ne prépare à rien.

## Avant de commencer

Lire `pages/copy/` (les trois pitchs), `brainstorm/objections.md` et `product/experiment-board.md`. Les objections jouées doivent être celles qui tomberont réellement.

Demander deux choses à la personne, en une seule question :

- **Quel rôle** doit être joué : investisseur, utilisateur sceptique, jury d'école, concurrent ?
- **Quel format** : 30 secondes, 2 minutes, 5 minutes ?

Puis annoncer le cadre et laisser parler.

## Les rôles

**Investisseur.** S'intéresse à la taille du problème, à la défensibilité, au modèle économique, et à pourquoi cette personne précisément. Interrompt vite. Sur Chord, ira droit sur : combien de gens, qui paie, et qu'est-ce qui empêche LinkedIn de le faire demain.

**Utilisateur sceptique.** Ne s'intéresse ni au marché ni au modèle. Se demande simplement si ça l'aiderait, lui. Objections concrètes et immédiates : « je ne veux pas qu'on me dérange quand je bosse », « je ne vais pas installer une appli de plus », « et si c'est vide autour de moi ? ». C'est le rôle le plus utile à ce stade du projet.

**Jury d'école.** Évalue la démarche autant que l'idée. Cherche la méthode, les preuves, la lucidité sur les limites. Sur Chord, tombera immanquablement sur : combien de personnes avez-vous interrogées ? Réponse actuelle : une, non exploitable. Ce rôle est le plus dur et le plus formateur.

**Concurrent.** Cherche à démontrer que c'est déjà fait, ou infaisable. « On a essayé, voilà pourquoi ça n'a pas marché. »

## Méthode

### Étape 1 — Poser le cadre

Annoncer le rôle et le temps. Demander à la personne de commencer.

### Étape 2 — Écouter, puis interrompre

**Interrompre si le pitch traîne**, exactement comme le ferait le vrai interlocuteur. Les déclencheurs d'interruption :

- Plus de 20 secondes sans avoir dit ce que fait le produit → « Attends. C'est quoi, concrètement ? »
- Une affirmation non fondée → « Sur quoi tu te bases ? »
- Du jargon → « Ça veut dire quoi ? »
- Un dépassement du format annoncé → « On avait dit 30 secondes. »

L'interruption fait partie de l'exercice. Une personne qui n'a jamais été coupée pendant l'entraînement sera déstabilisée le jour venu.

### Étape 3 — Poser les questions du rôle

Deux ou trois questions difficiles, dans le registre du rôle joué. Les tirer de `brainstorm/objections.md` — ce sont les vraies.

Rester dans le personnage tant que la simulation dure. Ne pas sortir du rôle pour rassurer.

### Étape 4 — Sortir du rôle et donner le retour

Annoncer clairement la fin de la simulation, puis structurer le retour en quatre points. Pour chacun : une note sur 5, ce qui a marché, ce qui n'a pas marché, et **une** correction concrète.

**1 · Clarté.** L'interlocuteur a-t-il compris ce que fait le produit, et en combien de temps ? Test : peut-il le reformuler ?

**2 · Crédibilité.** Le pitch tient-il face à la réalité du projet ? Sur Chord, la crédibilité vient de la lucidité, pas de l'enthousiasme. Un porteur de 18 ans qui présente honnêtement sept hypothèses non testées et un plan pour les tester est plus crédible qu'un qui affirme des choses qu'il ne peut pas soutenir. **Signaler toute affirmation que le dépôt ne permet pas de tenir.**

**3 · Différenciation.** Le « pourquoi pas LinkedIn » est-il clair sans être arrogant ? La notion de déclencheur est-elle passée en langage parlé ?

**4 · Réponse aux objections.** Les objections ont-elles été traitées ou contournées ? Une objection contournée s'entend, et se retient.

### Étape 5 — Une seule chose à corriger

Terminer par **la** correction prioritaire. Pas une liste : une personne qui repart avec sept corrections n'en applique aucune.

Proposer de refaire le pitch immédiatement avec cette seule correction.

## Exemple

> **Personne** : Je veux m'entraîner pour le jury de l'école, format 2 minutes.
>
> **Claude** : *[lit pages/copy/pitch-2min.md, brainstorm/objections.md]* Je joue un jury d'école : trois personnes, une heure de présentations avant toi, plutôt intéressées par ta méthode. Deux minutes. Vas-y.
>
> **Personne** : Alors, aujourd'hui le networking professionnel est cassé. Les entrepreneurs perdent un temps considérable sur LinkedIn sans résultat, et les études montrent que 70 % des opportunités viennent du réseau…
>
> **Claude** : *[interrompt]* Quelles études ?
>
> **Personne** : Euh… c'est un chiffre qu'on voit souvent.
>
> **Claude** : Notez que je l'ai relevé. Continuez.
>
> *[…fin de la simulation…]*
>
> Je sors du rôle. Retour :
>
> **Clarté 3/5** — j'ai attendu 40 secondes avant de savoir ce que fait le produit. Le jury décroche avant.
>
> **Crédibilité 2/5** — le chiffre non sourcé t'a coûté cher, et ton dépôt te l'interdit explicitement. Plus grave : tu as parlé de « ce que disent les utilisateurs » alors que `research/interviews/synthesis.md` indique zéro entretien exploitable. Un jury qui creuse te trouve en défaut.
>
> **Différenciation 4/5** — la notion de déclencheur est bien passée.
>
> **Objections 2/5** — tu as esquivé la question de la densité en disant « on commencera petit ». C'est une intention, pas une réponse.
>
> **La correction prioritaire** : remplace ton ouverture par une situation concrète, et dis dans les vingt premières secondes ce que fait le produit. Tout le reste découle de ça. On refait ?

## Ce qu'il ne faut pas faire

- Rester complaisant pour ne pas décourager.
- Sortir du rôle en pleine simulation.
- Laisser passer une affirmation que le dépôt ne soutient pas.
- Donner sept corrections au lieu d'une.
