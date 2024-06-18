const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { initDB, sequelize } = require('./config/baseDeDonnees');
const blagueRoutes = require('./routes/blagueRoutes');

const app = express();

// Route pour télécharger la base de données
app.get('/download-database', (req, res) => {
    const file = path.resolve(__dirname, 'database.sqlite');
    res.download(file);
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

const PORT = process.env.PORT || 10000;

const initializeApp = async () => {
    await initDB();
    await sequelize.sync(); // Synchronise tous les modèles sans forcer la réinitialisation
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
};

initializeApp();
