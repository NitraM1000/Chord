# Abandonnée — une v1 sans détection de proximité

- **Date d'abandon** : 2026-09-15
- **Origine** : note de décisions du 27 août 2026 (absente du dépôt, voir `docs/decisions/0003-mode-evenement-et-detection-de-proximite.md`)

## L'idée

Livrer une première version sans BLE, pour dé-risquer techniquement : les participants d'un événement consultent la liste des inscrits et trient les personnes qui les intéressent. Si le tri a lieu, le comportement est validé et on investit ensuite dans la détection de proximité.

## Pourquoi elle est abandonnée

Elle prétendait tester « est-ce que les gens trient leurs rencontres après l'événement ? » sur un paquet **sans contexte de croisement**. Or c'est le croisement qui donne au paquet sa raison d'être trié. Sans lui, il reste une liste d'inscrits — ce que font déjà Swapcard et Brella.

Le test aurait donc produit un faux négatif quasi certain : les gens ne trient pas, on en conclut que le comportement n'existe pas, et le produit est tué sur un essai qui ne testait pas le produit.

## Ce qu'on en garde

La distinction, elle, est utile et a survécu : dé-risquer techniquement le BLE reste nécessaire, mais cela s'appelle un **spike technique** et se fait hors produit — un événement réel, une balise contrôlée, une quarantaine de personnes, iOS et Android, et on mesure la qualité des données produites. Voir la décision 0003.

## Ce qui la ferait revenir

Rien d'identifié. Si le spike technique montre que la détection de proximité n'est pas exploitable, ce n'est pas cette idée qui revient — c'est le produit entier qui est à reposer.
