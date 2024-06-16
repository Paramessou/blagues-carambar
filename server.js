const express = require('express'); // Importation du module express pour créer un serveur
const bodyParser = require('body-parser'); // Importation du module body-parser pour parser les requêtes HTTP. Que signifie parser ? Cela signifie analyser une chaîne de caractères pour en extraire des informations structurées.
const swaggerJSDoc = require('swagger-jsdoc'); // Importation du module swagger-jsdoc pour générer la documentation Swagger à partir des commentaires JSDoc
const swaggerUi = require('swagger-ui-express'); // Importation du module swagger-ui-express pour afficher la documentation Swagger dans une interface web
const { initDB } = require('./modeles'); // Importation de la fonction initDB du fichier modeles/index.js
const blagueRoutes = require('./routes/blagueRoutes'); // Importation du fichier blagueRoutes.js

const app = express(); // Création d'une application express

app.use(bodyParser.json()); // Utilisation de body-parser pour parser les requêtes HTTP

// Définition des options Swagger pour générer la documentation
const swaggerOptions = {
    swaggerDefinition: { // Définition de l'objet swaggerDefinition
        openapi: '3.0.0', // Version de l'OpenAPI Specification
        info: { // Informations sur l'API
            title: 'API Blagues Carambar', // Titre de l'API
            version: '1.0.0', // Version de l'API
            description: 'API pour gérer les blagues Carambar', // Description de l'API
        },
        servers: [ // Serveurs de l'API
            {
                url: 'https://blagues-carambar.onrender.com', // URL du serveur
            },
        ],
    },
    apis: ['./routes/*.js'], // Fichiers à scanner pour générer la documentation Swagger
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Route par défaut pour la racine
app.get('/', (req, res) => { // Définition de la route pour la racine
    res.send('Bienvenue à l\'API de Blagues Carambar'); // Envoi de la réponse
});

app.use('/api', blagueRoutes); // Utilisation des routes définies dans blagueRoutes

const PORT = process.env.PORT || 3000; // Définition du port du serveur (3000 par défaut)

initDB().then(() => { // Initialisation de la base de données
    app.listen(PORT, () => { // Démarrage du serveur
        console.log(`Serveur démarré sur le port ${PORT}`); // Affichage d'un message dans la console pour indiquer que le serveur a démarré avec succès sur le port spécifié
    });
});

