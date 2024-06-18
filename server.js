const express = require('express'); // Importation du module express pour créer l'application
const path = require('path'); // Importation du module path pour gérer les chemins de fichiers
const bodyParser = require('body-parser'); // Importation du module body-parser pour analyser les corps des requêtes HTTP
const cors = require('cors'); // Importation du module cors pour gérer les requêtes cross-origin
const swaggerJSDoc = require('swagger-jsdoc'); // Importation du module swagger-jsdoc pour générer la documentation Swagger
const swaggerUi = require('swagger-ui-express'); // Importation du module swagger-ui-express pour afficher la documentation Swagger
const { initDB, sequelize } = require('./config/baseDeDonnees'); // Importation de la fonction d'initialisation de la base de données
const blagueRoutes = require('./routes/blagueRoutes'); // Importation des routes pour les blagues

const app = express();

app.get('/download-database', (req, res) => {
    const file = path.resolve(__dirname, 'database.sqlite');
    console.log('Chemin du fichier:', file);

    res.download(file, (err) => {
        if (err) {
            console.error('Erreur lors du téléchargement du fichier:', err);
            res.status(500).send('Erreur interne du serveur');
        } else {
            console.log('Fichier téléchargé avec succès');
        }
    });
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Bienvenue à l\'API de Blagues Carambar');
});

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Blagues Carambar',
            version: '1.0.0',
            description: 'API pour gérer les blagues Carambar',
        },
        servers: [
            {
                url: 'https://blagues-carambar.onrender.com',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', blagueRoutes);

const PORT = process.env.PORT || 3000;

const initializeApp = async () => {
    await initDB();
    await sequelize.sync(); // Synchronise tous les modèles sans forcer la réinitialisation
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
};

initializeApp();
