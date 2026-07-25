# Questions ouvertes

Les questions non résolues, par ordre de priorité. Une question de ce fichier est une question dont la réponse change ce qu'on fait.

Priorité : **P0** = bloque tout le reste · **P1** = à trancher dans les prochaines semaines · **P2** = importante mais pas urgente.

---

## Q1 — Comment atteindre une densité locale suffisante au démarrage ? · P0

Une application de proximité sans utilisateurs à proximité ne rend aucun service. Les cent premiers utilisateurs ouvriront une application vide.

**Pourquoi c'est P0** : aucune autre question n'a d'intérêt si celle-ci n'a pas de réponse. C'est le problème qui tue ce type de produit.

**Piste** : partir d'un lieu unique à forte densité naturelle (coworking, campus, incubateur) plutôt que d'un segment démographique. Voir `business/go-to-market.md`.

**Statut** : ouverte, non instruite.

---

## Q2 — Les gens osent-ils réellement aborder un inconnu ? · P0

Toute la valeur du produit se joue dans le dernier mètre. L'application peut identifier parfaitement la bonne personne : si l'utilisateur ne se lève pas, rien ne s'est passé.

**Pourquoi c'est P0** : c'est l'hypothèse H5 de `product/experiment-board.md`, et elle est testable sans écrire une ligne de code.

**Test possible** : reproduire le service à la main dans un lieu, dix fois, et compter combien de conversations ont réellement lieu.

**Statut** : ouverte, testable immédiatement. **C'est la prochaine action la plus utile du projet.**

---

## Q3 — Le problème est-il ressenti ou seulement reconnu ? · P0

Si on demande à quelqu'un « c'est dommage de rater des rencontres utiles, non ? », il répondra oui. Cela ne signifie pas qu'il vit ce manque comme un problème.

**Comment trancher** : en entretien, ne jamais suggérer le problème. Compter les personnes qui le mentionnent spontanément.

**Statut** : ouverte. Aucun entretien exploitable à ce jour, voir `research/interviews/synthesis.md`.

---

## Q4 — Comment traiter la vie privée sans vider le produit de sa valeur ? · P1

Le produit repose sur le fait de savoir qui est à proximité. C'est précisément ce que beaucoup de gens refuseront.

**Tension centrale** : plus on protège, moins le produit sert ; moins on protège, moins les gens l'installent.

**Piste** : ne jamais montrer de position, seulement un signal de pertinence. Voir `brainstorm/ideas.md`.

**Statut** : ouverte, non instruite. Voir `brainstorm/objections.md`.

---

## Q5 — Qui paie, et pour quoi ? · P1

Voir `business/business-model.md`. La sous-question la plus utile : **qui a déjà payé** pour résoudre ce problème, et dans quel contexte ?

**Statut** : ouverte.

---

## Q6 — Le nom « Chord » est-il disponible ? · P1

Marque déposée, nom de domaine, magasins d'applications : aucune vérification n'a été faite. La décision `0002` est acceptée mais repose sur du vide juridique.

**Statut** : ouverte, réponse obtenable en une heure.

---

## Q7 — Quel cadre institutionnel pour le projet ? · P2

Le projet a été présenté dans un cadre scolaire qui n'est plus le cadre actuel — le message de prise de contact aux personnes à interviewer mentionne encore un établissement qui n'est plus le bon. Voir `research/interviews/recruitment-message.md`.

**À trancher** : sous quel cadre le projet est présenté aux personnes contactées désormais.

**Statut** : ouverte, bloque l'envoi de nouveaux messages de recrutement.

---

## Q8 — Le projet est-il portable seul ? · P2

Un retour extérieur signalait l'équipe mono-compétence comme une erreur fréquente. Le projet est aujourd'hui porté par une personne au profil technique. Voir `research/peer-review/2026-07-conseil-financement-public.md`.

**Statut** : ouverte.

---

## Méthode

Une question qui trouve sa réponse quitte ce fichier et devient une décision dans `docs/decisions/`. Une question qui reste ouverte six mois sans avancer doit être soit priorisée, soit assumée comme un risque accepté.
