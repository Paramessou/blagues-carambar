const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/baseDeDonnees'); // Importez sequelize correctement

const Blague = sequelize.define('Blague', { // Définition du modèle Blague
    contenu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chute: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Blagues' // S'assure que le modèle utilise la table 'Blagues'
});

module.exports = Blague; // Exportez le modèle Blague pour pouvoir l'utiliser dans d'autres fichiers