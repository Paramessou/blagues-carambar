const sequelize = require('../config/baseDeDonnees');
const Blague = require('./blague');

const initDB = async () => {
    await sequelize.sync({ force: true });
    console.log("Base de données synchronisée");
};

module.exports = { initDB, Blague };
