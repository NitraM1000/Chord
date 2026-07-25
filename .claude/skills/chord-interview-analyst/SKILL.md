---
name: chord-interview-analyst
description: À utiliser quand un nouvel entretien utilisateur Chord arrive, quand quelqu'un fournit des notes ou une transcription d'entretien à traiter, ou demande d'analyser ce qu'un utilisateur a dit. Couvre l'anonymisation, l'extraction des signaux (douleurs, verbatims, contradictions avec les hypothèses) et la mise à jour de la synthèse des entretiens.
---

# Analyse d'entretien Chord

## Rôle

Transformer des notes brutes en matière exploitable : anonymisée, structurée, et confrontée aux hypothèses du projet.

Le point critique n'est pas de résumer l'entretien. C'est de repérer ce qui **contredit** ce qu'on croit. Un entretien qui confirme tout ce qu'on pensait a probablement été mal mené ou mal lu.

## Méthode

### Étape 1 — Anonymiser, avant toute autre chose

**Cette étape passe en premier et sans exception.** Le dépôt est public.

Retirer systématiquement :

- Nom, prénom, surnom.
- Email, téléphone, comptes sociaux, pseudonymes identifiants.
- Nom de l'entreprise ou du projet si la personne peut être retrouvée à partir de là.
- Ville, si combinée au reste elle rend l'identification possible.
- Tout détail biographique singulier permettant de reconnaître la personne.

Conserver et généraliser :

- Le rôle : « fondatrice, ~28 ans, secteur média, France ».
- Les verbatims, en remplaçant les éléments identifiants par `[…]`.
- Les faits, les comportements, les dates approximatives.

Attribuer le code `interviewee-NN` suivant disponible dans `research/interviews/`. La numérotation ne se réutilise jamais.

**Rappeler à la personne** de reporter la correspondance code ↔ identité dans `private/interviewees.md`, qui est ignoré par Git. Ne jamais écrire cette correspondance ailleurs.

### Étape 2 — Créer le fichier d'entretien

Créer `research/interviews/interviewee-NN.md` avec les sections : profil, verbatims, questions posées, signaux extraits, contradictions, note d'anonymisation. Prendre `interviewee-01.md` comme modèle de structure.

**Les verbatims sont la matière première.** Les recopier exactement, sans les lisser. Une phrase maladroite dite par un utilisateur vaut plus qu'une reformulation élégante.

### Étape 3 — Extraire les signaux

Un signal est un élément qui confirme ou infirme une hypothèse. Trois catégories :

**Douleurs.** Ce qui pose problème à la personne, dans sa vie réelle. Distinguer impérativement :

- Une douleur **spontanée** — la personne l'a mentionnée sans qu'on la suggère. C'est un vrai signal.
- Une douleur **suggérée** — la personne a acquiescé quand on la lui a proposée. Ce n'est pas un signal, et le noter comme tel serait se mentir.

**Comportements actuels.** Ce que la personne fait aujourd'hui pour résoudre le problème, même de façon bancale. La solution en place est le vrai concurrent.

**Contradictions.** Ce qui va contre nos hypothèses. **C'est la section la plus importante du fichier.** Si elle est vide après un entretien, se demander sérieusement si l'entretien a été mené sans orienter les réponses.

### Étape 4 — Confronter à l'experiment board

Ouvrir `product/experiment-board.md` et vérifier, hypothèse par hypothèse, ce que l'entretien apporte. Signaler explicitement :

- Une hypothèse renforcée, et de combien — un entretien ne valide rien à lui seul.
- Une hypothèse fragilisée.
- Une hypothèse manquante que l'entretien fait apparaître.

Ne jamais faire passer une hypothèse en « validée » sur la base d'un entretien unique.

### Étape 5 — Mettre à jour la synthèse

Mettre à jour `research/interviews/synthesis.md` :

- Les compteurs — entretiens réalisés, exploitables, planifiés.
- Les douleurs, avec le décompte « mentionnée spontanément par N personnes sur M ».
- Les verbatims marquants.
- Les contradictions.

### Étape 6 — Conclure sur ce qui a été appris

Dire en trois lignes ce que cet entretien change, et ce qu'il ne change pas. Si l'entretien n'apprend rien, le dire — c'est une information sur le guide d'entretien, qui doit alors être revu.

## Signaux d'alerte à mentionner

- **Un entretien qui confirme tout.** Soit la personne était complaisante — cas fréquent avec le réseau personnel, voir `research/interviews/recruitment-pipeline.md` — soit les questions étaient orientées.
- **Des réponses au futur.** « J'utiliserais sûrement ça » ne prédit rien. Le signaler et ne pas le compter comme signal.
- **Le produit présenté trop tôt.** Si le produit a été mentionné avant la fin, tout ce qui suit est biaisé. Le noter dans le fichier.

## Exemple

> **Personne** : J'ai fait un entretien avec Marie Dupont, fondatrice de [entreprise], voilà mes notes : […]
>
> **Claude** : Je traite ça. D'abord l'anonymisation : le fichier sera `research/interviews/interviewee-02.md`, profil « fondatrice, ~30 ans, secteur X, grande ville européenne ». Le nom et l'entreprise ne figureront nulle part dans le dépôt — pense à reporter la correspondance dans `private/interviewees.md`, qui n'est pas suivi par Git.
>
> *[crée le fichier, extrait les signaux]*
>
> Ce que cet entretien apporte :
>
> **Douleur spontanée** — elle a mentionné d'elle-même, sans qu'on l'y amène, avoir raté une collaboration parce qu'elle ignorait qu'une personne travaillait sur un sujet proche dans le même espace pendant six mois. C'est le premier signal spontané du projet.
>
> **Contradiction** — elle dit ne jamais aborder quelqu'un dans un lieu de travail, « ce serait déplacé ». Ça fragilise H5 directement : elle vit le problème et refuse quand même la solution.
>
> **Ce que ça change** : H3 gagne son premier appui réel. H5 recule. C'est exactement le type de résultat qui doit faire réfléchir avant de construire — la douleur existe, mais le geste que le produit demande n'est peut-être pas celui-là.
>
> Je mets à jour `synthesis.md` : 2 entretiens réalisés, 1 exploitable.

## Ce qu'il ne faut pas faire

- Écrire un nom réel dans un fichier suivi par Git, même temporairement.
- Lisser les verbatims.
- Compter une douleur suggérée comme une douleur spontanée.
- Valider une hypothèse sur un seul entretien.
- Laisser la section « contradictions » vide sans s'interroger.
