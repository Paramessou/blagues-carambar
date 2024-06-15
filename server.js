const express = require('express'); // Importation du module express pour créer un serveur
const bodyParser = require('body-parser'); // Importation du module body-parser pour parser les requêtes HTTP. Que signifie parser ? Cela signifie analyser une chaîne de caractères pour en extraire des informations structurées.
const { initDB } = require('./modeles'); // Importation de la fonction initDB du fichier modeles/index.js
const blagueRoutes = require('./routes/blagueRoutes'); // Importation du fichier blagueRoutes.js

const app = express(); // Création d'une application express

app.use(bodyParser.json()); // Utilisation de body-parser pour parser les requêtes HTTP

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
