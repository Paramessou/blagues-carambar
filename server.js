const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { initDB, sequelize } = require('./config/baseDeDonnees');
const blagueRoutes = require('./routes/blagueRoutes');
//const Blague = require('./modeles/blague'); // Importez le modèle Blague

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { // Route racine de l'API pour afficher un message de bienvenue
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

const PORT = process.env.PORT || 10000; // Utilise le port spécifié dans les variables d'environnement ou le port 3000 par défaut

const initializeApp = async () => {
    await initDB();
    await sequelize.sync({ force: true }); // Synchronise tous les modèles, { force: true } réinitialise la base de données à chaque démarrage

    // // Ajout d'un exemple de blague
    // await Blague.create({
    //     contenu: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?",
    //     chute: "Parce que sinon ils tombent dans le bateau."
    // });

    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
};

initializeApp();