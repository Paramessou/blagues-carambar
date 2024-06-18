const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { initDB, sequelize } = require('./config/baseDeDonnees');
const blagueRoutes = require('./routes/blagueRoutes');

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
