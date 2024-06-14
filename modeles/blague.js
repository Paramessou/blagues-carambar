const { DataTypes } = require('sequelize');
const sequelize = require('../configuration/baseDeDonnees');

const Blague = sequelize.define('Blague', {
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
