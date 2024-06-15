const { DataTypes } = require('sequelize'); // Importation de la classe DataTypes depuis le module sequelize
const sequelize = require('../config/baseDeDonnees'); // Importation de l'instance de Sequelize

const Blague = sequelize.define('Blague', { // Définition du modèle Blague
    contenu: {
        type: DataTypes.STRING, // Type de la colonne contenu : chaîne de caractères
        allowNull: false // La colonne contenu ne peut pas être nulle (obligatoire)
    },
    chute: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Blague; // Exportation du modèle Blague pour pouvoir l'utiliser dans d'autres fichiers
