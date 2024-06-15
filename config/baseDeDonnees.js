const { Sequelize } = require('sequelize'); // Importation de la classe Sequelize depuis le module sequelize

const sequelize = new Sequelize({ // Création d'une instance de Sequelize
    dialect: 'sqlite', // Utilisation du dialecte SQLite
    storage: './database.sqlite' // Stockage de la base de données dans un fichier database.sqlite
});

module.exports = sequelize; // Exportation de l'instance de Sequelize
