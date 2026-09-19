# Questions ouvertes

Les questions non résolues, par ordre de priorité. Une question de ce fichier est une question dont la réponse change ce qu'on fait.

Priorité : **P0** = bloque tout le reste · **P1** = à trancher dans les prochaines semaines · **P2** = importante mais pas urgente.

---

## Q1 — Comment atteindre une densité locale suffisante au démarrage ? · P0

Une application de proximité sans utilisateurs à proximité ne rend aucun service. Les cent premiers utilisateurs ouvriront une application vide.

**Pourquoi c'est P0** : aucune autre question n'a d'intérêt si celle-ci n'a pas de réponse. C'est le problème qui tue ce type de produit.

**Piste** : partir d'un lieu unique à forte densité naturelle (coworking, campus, incubateur) plutôt que d'un segment démographique. Voir `business/go-to-market.md`.

**Statut** : **structurellement résolue** par la décision `0003` du 15 septembre 2026. Un événement professionnel borne le lieu, la durée et la population, avec une balise qu'on contrôle. C'est le gain principal du passage en mode événement.

**Ce qui reste** : la densité de personnes est réglée, la densité de **contenu** ne l'est pas. Voir Q9.

---

## Q2 — Les gens osent-ils réellement aborder un inconnu ? · P0

Toute la valeur du produit se joue dans le dernier mètre. L'application peut identifier parfaitement la bonne personne : si l'utilisateur ne se lève pas, rien ne s'est passé.

**Pourquoi c'est P0** : c'est l'hypothèse H5 de `product/experiment-board.md`, et elle est testable sans écrire une ligne de code.

**Test possible** : reproduire le service à la main dans un lieu, dix fois, et compter combien de conversations ont réellement lieu.

**Statut** : **sans objet** depuis la décision `0003`. En mode événement, le contact se fait le lendemain, de manière asynchrone : il n'y a plus de dernier mètre à franchir.

Cette question était désignée comme « la prochaine action la plus utile du projet ». Elle ne l'est plus, et c'est la conséquence la plus lourde du recadrage : le projet a changé de risque principal. Le nouveau est Q10.

**À ne pas oublier** : si le produit réintroduit un jour une mise en relation sur place, cette question revient intacte.

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

**Statut** : ouverte — mais **plus simple** depuis `0003`. En mode événement, l'organisateur devient un payeur plausible : la mise en relation entre participants est un service qu'il achète déjà. Cette piste figurait dans `business/business-model.md` et dans `brainstorm/ideas.md` sous la forme « facturer les lieux, pas les utilisateurs ».

TODO: la note de recadrage ne mentionne pas cette conséquence. La reprendre dans le modèle économique.

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

## Q9 — Combien de participants renseignent une demande exploitable ? · P0

La formulation de valeur retenue par `0003` promet « trois personnes dont le besoin du moment croise le tien ». Cela suppose que les participants aient écrit une demande, et qu'elle soit assez précise pour qu'un croisement ait un sens.

**Pourquoi c'est P0** : le mode événement résout la densité de personnes et la remplace par une densité de contenu. Sur soixante personnes croisées, si cinq ont rempli quelque chose d'exploitable, le paquet du lendemain est vide et le produit n'a rien à montrer.

**Ce qu'il faut faire** : fixer un plancher — quelle proportion de demandes renseignées rend le paquet crédible ? — **avant** de mesurer quoi que ce soit. Puis le mesurer lors du spike technique.

**Statut** : ouverte, non instruite. Hypothèse H9 de `product/experiment-board.md`.

---

## Q10 — L'occasion ratée est-elle ressentie, ou seulement plausible ? · P0

Version en mode événement de Q3. Tout le monde acquiescera à « c'est dommage de rater des gens intéressants ». Personne ne sait dire spontanément ce que ça lui a coûté.

**L'objection dans sa version la plus forte** : si j'ai parlé à quelqu'un d'intéressant, je m'en souviens et on a échangé nos coordonnées sur place. Ceux que j'ai croisés sans leur parler, pourquoi je les contacterais ?

**Comment trancher** : dix personnes ayant assisté à un événement professionnel le mois dernier. Les faire raconter, sans jamais mentionner de rencontre manquée. Compter celles qui amènent le sujet seules et savent dire ce que ça leur a coûté. Critère fixé à l'avance : 4 sur 10.

**Attention** : la formulation proposée initialement — « combien de personnes intéressantes penses-tu avoir croisées sans leur parler ? » — suggère le problème et invalide le test. Voir la note de méthode dans `product/experiment-board.md`.

**Statut** : ouverte, testable immédiatement, sans code. **C'est la prochaine action la plus utile du projet.**

---

## Méthode

Une question qui trouve sa réponse quitte ce fichier et devient une décision dans `docs/decisions/`. Une question qui reste ouverte six mois sans avancer doit être soit priorisée, soit assumée comme un risque accepté.
