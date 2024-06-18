const Blague = require('../modeles/blague');
const { Sequelize } = require('sequelize');

const ajouterBlague = async (req, res) => {
    try {
        const { contenu, chute } = req.body;
        const nouvelleBlague = await Blague.create({ contenu, chute });
        res.status(201).json(nouvelleBlague);
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la blague:', error);
        res.status(500).json({ error: error.message });
    }
};

const ajouterBlagues = async (req, res) => {
    try {
        const blagues = req.body;
        const nouvellesBlagues = await Blague.bulkCreate(blagues);
        res.status(201).json(nouvellesBlagues);
    } catch (error) {
        console.error('Erreur lors de l\'ajout des blagues:', error);
        res.status(500).json({ error: error.message });
    }
};

const obtenirToutesBlagues = async (req, res) => {
    try {
        const blagues = await Blague.findAll();
        res.status(200).json(blagues);
    } catch (error) {
        console.error('Erreur lors de la récupération des blagues:', error);
        res.status(500).json({ error: error.message });
    }
};

const obtenirBlagueParId = async (req, res) => {
    try {
        const blague = await Blague.findByPk(req.params.id);
        if (blague) {
            res.status(200).json(blague);
        } else {
            res.status(404).json({ error: 'Blague non trouvée' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
        res.status(500).json({ error: error.message });
    }
};

const obtenirBlagueAleatoire = async (req, res) => {
    try {
        console.log('Tentative de récupération d\'une blague aléatoire');
        const [results] = await sequelize.query('SELECT * FROM Blagues ORDER BY RANDOM() LIMIT 1;');
        const blague = results[0];
        console.log('Blague récupérée:', blague);
        if (blague) {
            res.status(200).json(blague);
        } else {
            console.log('Aucune blague disponible');
            res.status(404).json({ error: 'Aucune blague disponible' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague aléatoire:', error);
        res.status(500).json({ error: error.message });
    }
};

// const obtenirBlagueAleatoire = async (req, res) => {
//     try {
//         console.log('Tentative de récupération d\'une blague aléatoire');
//         const blague = await Blague.findOne({
//             order: Sequelize.literal('RANDOM()') // Utilisation de Sequelize.literal pour obtenir un enregistrement aléatoire
//         });
//         console.log('Blague récupérée:', blague);
//         if (blague) {
//             res.status(200).json(blague);
//         } else {
//             console.log('Aucune blague disponible');
//             res.status(404).json({ error: 'Aucune blague disponible' });
//         }
//     } catch (error) {
//         console.error('Erreur lors de la récupération de la blague aléatoire:', error);
//         res.status(500).json({ error: error.message });
//     }
// };

module.exports = { ajouterBlague, ajouterBlagues, obtenirToutesBlagues, obtenirBlagueParId, obtenirBlagueAleatoire };