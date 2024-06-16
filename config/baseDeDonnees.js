const { Sequelize } = require('sequelize'); // Importation de la classe Sequelize depuis le module sequelize

const sequelize = new Sequelize({ // Création d'une instance de Sequelize
    dialect: 'sqlite', // Utilisation du dialecte SQLite
    storage: './database.sqlite' // Stockage de la base de données dans un fichier database.sqlite
});

const initDB = async () => { // Définition de la fonction initDB pour initialiser la base de données SQLite
    try { // Gestion des erreurs avec try...catch
        await sequelize.authenticate(); // Authentification à la base de données SQLite (vérifie si la connexion est établie)
        console.log('Connexion établit avec succès.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
};

module.exports = { sequelize, initDB }; // Exportation de l'instance de Sequelize et de la fonction d'initialisation
