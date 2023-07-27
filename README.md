# ResaSport

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Readme - Application de Réservation de Séances de Sport

## Description du Projet

Ce projet consiste en la création d'une application permettant aux utilisateurs de réserver des séances de sport dans différents établissements d'une chaîne de salles de sport. L'application offre les fonctionnalités suivantes :

- Consulter les séances de sport disponibles : Les utilisateurs peuvent parcourir la liste des séances de sport disponibles dans les différents établissements de la chaîne.

- Réserver une séance de sport : Les utilisateurs peuvent réserver une séance de sport en fonction de la disponibilité et des places disponibles.

- Voir les détails des séances de sport : Les utilisateurs peuvent consulter les détails des séances de sport, notamment les horaires, la localisation, le coach, la capacité et le thème.

- Annuler les réservations : Les utilisateurs peuvent annuler leurs réservations de séances de sport.

## Fonctionnalités Implémentées

- Une page d'accueil (ProductListComponent) affiche la liste des séances de sport disponibles avec leurs informations (nom, prix).

- Un composant de détails de produit (ProductDetailsComponent) permet aux utilisateurs de consulter les détails d'une séance de sport spécifique en cliquant sur le bouton "Détails".

- Un formulaire de réservation (ProductReservationComponent) permet aux utilisateurs de réserver une séance de sport spécifique en remplissant le formulaire avec leur nom, la date et l'heure de réservation.

- Un composant de liste des réservations (ReservationsListComponent) affiche toutes les réservations effectuées par les utilisateurs.

## Architecture et Organisation du Code

- Les modèles de données tels que Product et Reservation sont définis dans des fichiers de modèle (product.model.ts et reservation.model.ts).

- Le service ProductService est responsable de la gestion des produits et de l'interaction avec le serveur backend.

- Le service ReservationService gère les réservations et l'interaction avec le backend.

- Les routes et la navigation sont gérées dans le module de routage (app-routing.module.ts).

- Les composants Angular sont organisés dans des modules spécifiques (app.module.ts et reservations.module.ts).

- Les fichiers HTML, CSS et TypeScript des composants sont regroupés dans des dossiers respectifs (product-list, product-details, product-reservation et reservations-list).

## Installation et Exécution du Projet

1. Cloner le projet depuis le référentiel Git :

- git clone <URL_DU_REPOSITORY>

2. Naviguer vers le répertoire du projet :

- cd nom_du_projet

3. Installer les dépendances :

- npm install

4. Lancer l'application :

- ng serve

5. Ouvrir le navigateur et accéder à l'URL http://localhost:4200 pour accéder à l'application.

## Conclusion

Ce projet a implémenté une application de réservation de séances de sport offrant différentes fonctionnalités pour les utilisateurs. L'application a été développée en utilisant le framework Angular et suit les principes de conception responsives pour une expérience utilisateur optimale sur les appareils mobiles et de bureau.


