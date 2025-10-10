# Argent Bank

Argent Bank est une nouvelle banque en ligne qui souhaite offrir à ses clients une application moderne et sécurisée pour gérer leurs comptes bancaires.

## Phases du projet

### Phase 1 : Authentification des utilisateurs

- Implémentation de la connexion, déconnexion et affichage du profil
- Gestion du state avec Redux
- Intégration du backend existant via API Swagger

### Phase 2 : Transactions

- Spécification des endpoints d’API pour la gestion des transactions
- Documentation au format Swagger YAML

## Sommaire

1. [Installation](#installation)
2. [Fonctionnalités](#fonctionnalites)
3. [Technologies](#technologies)

## Installation

### Le backend

Pour installer le projet côté backend, je vous invite à suivre le readme du projet : [Lien vers le repo](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

### Le frontend

Pour installer le projet côté frontend, clonez le dépôt GitHub

Installez les dépendances :

```bash
pnpm install
```

Lancez le projet en mode développement :

```bash
pnpm dev
```

## Fonctionnalités

- **Page d’accueil** : Présente la marque Argent Bank et ses services.
- **Authentification utilisateur** : Connexion sécurisée via formulaire (email et mot de passe).
- **Gestion du profil** : Consultation et modification des informations du profil utilisateur.
- **Déconnexion** : L’utilisateur peut se déconnecter à tout moment.
- **Routing protégé** : Les pages du profil ne sont accessibles qu’après authentification.
- **State Management avec Redux** : Gestion globale de l’état de l’application.
- **Affichage responsive** : Adaptation automatique sur mobile, tablette et ordinateur.

## Technologies

- **React**
- **Redux**
- **Vite**
- **React Router**
- **JavaScript**
- **Sass**
- **Swagger**
