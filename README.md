# Blagues Carambar

## Description

Une application web pour afficher des blagues Carambar aléatoires. Cette application utilise une API construite avec Node.js, Express, Sequelize et SQLite, déployée sur Render.com. La partie front-end est déployée via GitHub Pages.

## API Documentation

La documentation de l'API est disponible via Swagger [ici](https://blagues-carambar.onrender.com/api-docs).

## Endpoints

- `POST /api/blagues`: Ajouter une nouvelle blague
- `POST /api/blagues/multiple`: Ajouter plusieurs blagues
- `GET /api/blagues`: Obtenir toutes les blagues
- `GET /api/blagues/:id`: Obtenir une blague par ID
- `GET /api/blagues/aleatoire`: Obtenir une blague aléatoire

## Déploiements

- API: [Render.com](https://blagues-carambar.onrender.com)
- Front-end: [GitHub Pages](https://paramessou.github.io/blagues-carambar/)

## Installation locale

### Prérequis

- Node.js
- npm

### Étapes

1. Clonez le dépôt:
    ```bash
    git clone https://github.com/Paramessou/blagues-carambar.git
    cd votre-depot
    ```

2. Installez les dépendances:
    ```bash
    npm install
    ```

3. Démarrez le serveur:
    ```bash
    npm start
    ```

4. Ouvrez votre navigateur à l'adresse `http://localhost:3000`.

## Contribuer

Les contributions sont les bienvenues! Veuillez ouvrir une issue ou soumettre une pull request.
