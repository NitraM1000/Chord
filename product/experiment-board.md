# Experiment Board

> ⚠️ **Le segment et une partie des hypothèses datent du produit ambiant.** La décision `0003` du 15 septembre 2026 fait passer Chord en mode événement. Les lignes du tableau sont annotées en conséquence, mais le document n'a pas été refondu.

> Sources d'origine : `chord_project_files_Experiment_Board.md`, `chord_project_files_pour_slack.md`, juillet 2026.
> Le document central de la démarche : hypothèse → test → résultat → décision.

## Segment client

Le segment visé est constitué d'entrepreneurs, freelances, fondateurs de startups et profils créatifs travaillant dans l'innovation. Généralement 22 à 35 ans, vivant dans de grandes villes dynamiques : Paris, Berlin, Milan, Londres.

TODO: ce segment est large. « Entrepreneurs, freelances, fondateurs et créatifs de 22 à 35 ans dans les grandes villes européennes » désigne plusieurs centaines de milliers de personnes aux besoins très différents. Pour tester quoi que ce soit, il faut un segment assez étroit pour qu'on puisse aller frapper à sa porte.

Piste de resserrement : commencer par un lieu plutôt que par un profil. « Les personnes qui travaillent depuis le même espace de coworking à Barcelone » est un segment testable ; « les entrepreneurs européens » ne l'est pas.

## Le tableau

| # | Hypothèse | Type | Test prévu | Critère de réussite | Résultat | Décision |
|---|---|---|---|---|---|---|
| H1 | Le networking est essentiel pour les entrepreneurs | Problème | TODO | TODO | Non testé | — |
| H2 | Les outils actuels (LinkedIn, événements) sont vécus comme formels et planifiés | Problème | Entretiens, question spontanée | 4 personnes sur 6 le mentionnent **sans qu'on le suggère** | Non testé | — |
| H3 | Il existe un réseau professionnel utile physiquement à proximité, ignoré | Problème | TODO | TODO | Non testé | — |
| H4 | Les gens accepteraient d'être visibles professionnellement dans un lieu public | Solution | TODO | TODO | Non testé | — |
| H5 | Les gens accepteraient d'aborder un inconnu suite à une notification | Solution | TODO | TODO | Non testé | **Sans objet** depuis `0003` — le contact est asynchrone, il n'y a plus de dernier mètre |
| H6 | Une densité locale suffisante est atteignable au démarrage | Croissance | TODO | TODO | Non testé | **Résolue structurellement** par `0003` — l'événement borne le lieu et la durée |
| H7 | Quelqu'un paierait pour ce service | Revenu | TODO | TODO | Non testé | — |
| H8 | Les participants d'un événement ressentent une occasion ratée, sans qu'on la leur suggère | Problème | 10 personnes ayant assisté à un événement le mois dernier, récit libre, sans jamais mentionner de rencontre ratée | Au moins 4 sur 10 amènent le sujet seules **et** savent dire ce que ça leur a coûté | Non testé | — |
| H9 | Une proportion suffisante de participants renseigne une demande exploitable | Solution | Fixer un plancher, puis le mesurer sur le spike technique | TODO: fixer le plancher **avant** de mesurer | Non testé | — |
| H10 | La détection passive de croisement produit des données exploitables en usage réel | Technique | Spike technique : un événement, une balise contrôlée, ~40 personnes, iOS et Android | TODO: définir ce qu'est une donnée exploitable avant de commencer | Non testé | — |

## Lecture du tableau

**Aucune hypothèse n'est testée.** C'est l'état réel du projet et le tableau est là pour l'afficher, pas pour le masquer.

H1 est presque une évidence et sera confirmée quoi qu'il arrive — c'est le type d'hypothèse qui rassure sans rien apprendre. Depuis la décision `0003`, les hypothèses qui décident du sort du projet sont **H8, H9 et H10** : est-ce que le manque est ressenti, est-ce que les gens remplissent une demande, est-ce que la détection marche. H5 et H6 sont conservées pour mémoire — elles portaient le produit ambiant :

- **H5** parce que si les gens n'osent pas aborder l'inconnu que l'application leur a signalé, le produit ne produit rien. Toute la valeur est dans le dernier mètre.
- **H6** parce qu'une application de proximité sans proximité est une application vide, et qu'aucune quantité de marketing ne résout un problème de densité locale.

Ordre de test depuis `0003` : **H8, puis H10, puis H9**, puis le reste. On teste d'abord ce qui peut tuer le projet — et H8 ne coûte que dix conversations.

## Comment tester H5 sans application

Le test le plus informatif ne nécessite aucun code : reproduire manuellement le service dans un lieu unique. Repérer soi-même deux personnes qui gagneraient à se parler dans un espace de coworking, le leur dire, et observer ce qui se passe. Dix fois.

Si les gens se parlent, l'hypothèse tient. S'ils remercient poliment et ne se parlent pas, on a appris en une semaine ce qu'un an de développement aurait coûté à apprendre.

TODO: planifier ce test. C'est la prochaine action la plus utile du projet.

## Hypothèses formulées initialement

Reprises telles quelles des notes d'origine :

- Le networking est essentiel pour les entrepreneurs.
- Les outils actuels (LinkedIn, événements) sont formels et planifiés.

## Méthode

Une hypothèse entre dans ce tableau formulée de manière **réfutable**. « Les gens aiment rencontrer du monde » n'est pas réfutable. « Sur six entretiens, au moins quatre personnes mentionnent spontanément la difficulté à rencontrer des gens pertinents » l'est.

Le critère de réussite se fixe **avant** le test. Sinon le résultat sera lu dans le sens qui arrange.

Chaque ligne passée en « Décision » donne lieu à un fichier dans `docs/decisions/` si la décision est structurante.

## Note de méthode sur H8 — pourquoi le test proposé a été modifié

La note de recadrage du 15 septembre proposait de poser à dix personnes : « Combien de personnes potentiellement intéressantes penses-tu avoir croisées sans leur parler ? Et qu'est-ce que ça t'a coûté ? »

Cette question **suggère le problème**, ce que Q3 et H2 interdisent explicitement : on ne peut pas appeler « spontanée » une réponse à une question qu'on vient de poser. Et le critère annoncé — une occasion ratée citée sur dix personnes — vaut 10 %, ce qui serait un échec et non une validation.

Le test inscrit dans le tableau est donc reformulé : faire raconter le dernier événement professionnel sans jamais mentionner de rencontre manquée, et compter les personnes qui amènent le sujet seules. Le critère est fixé au même niveau d'exigence que H2 : 4 sur 10, avec le coût exprimé.
