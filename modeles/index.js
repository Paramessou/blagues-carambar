const sequelize = require('../config/baseDeDonnees'); // Importation de l'instance de Sequelize depuis le fichier config/baseDeDonnees
const Blague = require('./blague'); // Importation du modèle Blague depuis le fichier modeles/blague

const initDB = async () => { // Définition de la fonction initDB pour initialiser la base de données
    await sequelize.sync({ force: true }); // Synchronisation de la base de données avec les modèles (force: true pour recréer les tables à chaque démarrage)
    console.log("Base de données synchronisée"); // Affichage d'un message dans la console pour indiquer que la base de données a été synchronisée avec succès
};

module.exports = { initDB, Blague }; // Exportation de la fonction initDB et du modèle Blague pour pouvoir les utiliser dans d'autres fichiers
