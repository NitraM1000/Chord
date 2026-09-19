# Objections

Tous les contre-arguments entendus sur le projet, avec nos réponses — ou l'absence de réponse, assumée.

**Règle : une objection s'écrit ici même si on n'a rien à répondre.** Une objection non écrite reviendra, et on redécouvrira à ce moment-là qu'on n'avait pas de réponse.

Statut : **Sans réponse** · **Réponse partielle** · **Traitée** · **Acceptée comme risque** · **Sans objet** (l’objection portait sur un produit qu'on ne construit plus ; conservée, car elle revient si le produit y revient)

---

## O1 — « Une application de proximité sans personne à proximité ne sert à rien »

**Statut** : Traitée depuis le 2026-09-15 — voir la mise à jour en fin de section.

L'objection la plus dure. Le produit a besoin des deux côtés du réseau au même endroit et au même moment — problème de démarrage plus difficile qu'une place de marché classique, où l'offre peut préexister à la demande.

**Ce qu'on pourrait répondre** : partir d'un lieu unique à densité naturelle. Mais cette réponse est une piste, pas une démonstration.

**Ce qui la lèverait** : une zone où le produit fonctionne réellement, même petite.

**Mise à jour du 2026-09-15 — Traitée.** La décision `0003` fait passer Chord en mode événement : lieu borné, durée bornée, population connue, balise contrôlée. L'objection qui tuait ce type de produit ne s'applique plus telle quelle. Elle réapparaît sous une autre forme en O8.

---

## O2 — « Personne n'a envie qu'on l'aborde dans un café »

**Statut** : Sans objet depuis le 2026-09-15 — voir la mise à jour en fin de section. Conservée telle quelle, elle redevient valable si le produit réintroduit la mise en relation sur place.

Les lieux visés — cafés, espaces de travail, transports — sont des lieux où les gens sont souvent en train de travailler ou de décompresser. L'interruption par un inconnu y est généralement mal perçue, même bien intentionnée.

**Ce qui la lèverait** : le test manuel décrit dans `product/experiment-board.md`. Dix tentatives réelles trancheront mieux que n'importe quel raisonnement.

**Mise à jour du 2026-09-15 — Sans objet.** Le mode événement supprime l'abordage sur place : le tri et le contact se font le lendemain. L'objection revient intacte le jour où le produit réintroduirait une mise en relation immédiate.

---

## O3 — « Diffuser sa présence en continu, c'est non »

**Statut** : Sans réponse.

Le produit repose sur la visibilité de la présence. Une partie de la cible refusera par principe, indépendamment des garanties techniques offertes.

**Piste** : ne jamais exposer de position, seulement un signal de pertinence ; visibilité activée manuellement et temporaire.

**Tension à assumer** : chaque protection ajoutée réduit la densité effective, donc la valeur. Voir Q4 de `brainstorm/open-questions.md`.

---

## O4 — « Le modèle économique n'est pas défini »

**Statut** : Sans réponse.

Objection soulevée lors d'un retour extérieur en juillet 2026 — voir `research/peer-review/2026-07-conseil-financement-public.md`. Les trois questions posées (positionnement prix, qui a déjà payé, dans quel contexte) restent sans réponse.

---

## O5 — « L'équipe est mono-compétence »

**Statut** : Acceptée comme risque, temporairement.

Même source. Le projet est porté par une personne au profil technique, sans complément sur le design, le commercial ou la recherche utilisateur.

**Ce qu'on en fait** : à ce stade de validation, un porteur unique est viable. L'objection devient bloquante au moment de construire.

---

## O6 — « Si personne ne l'a fait, c'est peut-être que ça ne marche pas »

**Statut** : Sans réponse.

Le tableau de `docs/positioning.md` montre un espace vide sur le déclencheur « proximité en temps réel ». Un espace vide peut être une opportunité ou un cimetière.

**Ce qui la lèverait** : enquêter sur les acteurs qui s'en sont approchés et comprendre pourquoi ils ont échoué ou pivoté. Voir `research/competitors/shapr.md`.

**Mise à jour du 2026-09-15** : en mode événement, l'espace n'est plus vide du tout — il est occupé. L'objection se reformule en O10, qui est plus concrète et donc plus facile à instruire.

---

## O7 — « C'est une application de rencontre déguisée »

**Statut** : Réponse partielle.

Le mécanisme — proximité, profils, mise en relation — ressemble aux applications de rencontre. L'objection porte moins sur l'intention que sur l'usage réel : le produit sera-t-il détourné, et comment sera-t-il perçu ?

**Réponse partielle** : le contexte et le cadrage professionnel sont censés faire la différence.

**Ce qui manque** : rien ne montre que le cadrage suffit à empêcher le détournement. TODO: instruire.

---

## O8 — « Je me souviens de ceux qui comptent, et les autres je n'ai aucune raison de les contacter »

**Statut** : Sans réponse. **C'est désormais l'objection principale du projet.**

Formulée dans la note de recadrage du 15 septembre 2026, dans sa version la plus dure : si j'ai parlé à quelqu'un d'intéressant, je m'en souviens et on a échangé nos coordonnées sur place. Ceux que j'ai croisés sans leur parler, pourquoi je les contacterais ? « On était à deux mètres l'un de l'autre » n'est pas une raison.

**Ce que la note y répond** : la proximité ne justifie rien seule, c'est la **demande** qui justifie. La proximité ne fait que rendre la liste courte et le motif d'approche légitime.

**Pourquoi ça ne suffit pas** : cette réponse est un raisonnement, pas une donnée. Elle est appuyée sur zéro entretien.

**Ce qui la lèverait** : Q10 de `brainstorm/open-questions.md`.

---

## O9 — « Vos participants ne rempliront pas leur demande »

**Statut** : Sans réponse.

Le mode événement résout la densité de personnes et la remplace par une densité de contenu. Un paquet de trois personnes « dont le besoin croise le tien » suppose que ces besoins soient écrits. Rien ne dit que les participants d'un événement prennent ce temps.

C'est le même problème de démarrage que O1, déplacé du côté du contenu. Voir Q9.

**Ce qui la lèverait** : une mesure réelle lors du spike technique, contre un plancher fixé à l'avance.

---

## O10 — « Ce marché est déjà occupé »

**Statut** : Sans réponse.

Tant que Chord était ambiant, `docs/positioning.md` montrait un espace vide. En mode événement, l'espace est occupé : Swapcard, Brella et d'autres sont déjà déployés auprès des participants.

**Ce que la note de recadrage y répond** : ces produits font « ce que personne n'utilise ». **Aucune source ne l'établit.**

**Ce qui la lèverait** : des chiffres d'usage — pas de déploiement — sur ces produits, et une explication de leur échec ou de leur succès. Voir `research/competitors/event-networking-apps.md`.

---

## O11 — « Le BLE en tâche de fond ne marchera pas assez bien »

**Statut** : Sans réponse, et **assumée comme telle par la décision `0003`**.

La détection passive de croisement est la fonctionnalité première : si elle produit des données trop bruitées ou trop lacunaires en usage réel — iOS en arrière-plan, diversité des appareils Android, densité de la salle — le produit n'a plus d'avantage sur un annuaire de participants.

**Ce qu'on en fait** : c'est exactement l'objet du spike technique, mené avant le produit. C'est la bonne manière de traiter cette objection.

**Ce qui la lèverait** : le résultat du spike, mesuré contre une définition de « donnée exploitable » écrite avant de commencer.

---

## Comment utiliser ce fichier

Avant de défendre le projet devant qui que ce soit, relire cette liste. Une objection à laquelle on ne sait pas répondre en réunion est une objection qu'on aurait dû préparer ici.

Le skill `chord-devils-advocate` alimente ce fichier.
