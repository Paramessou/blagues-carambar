const { Sequelize } = require('sequelize'); // Importation de la classe Sequelize depuis le module sequelize

const sequelize = new Sequelize({ // Création d'une instance de Sequelize
    dialect: 'sqlite', // Utilisation du dialecte SQLite pour communiquer avec la base de données
    storage: 'database.sqlite' // Stockage de la base de données dans un fichier database.sqlite
});

const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('La connexion a été établie avec succès.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
};

module.exports = { sequelize, initDB }; // Exportation de l'instance de Sequelize et de la fonction d'initialisation
