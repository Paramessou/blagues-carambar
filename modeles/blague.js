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
});

module.exports = Blague;
