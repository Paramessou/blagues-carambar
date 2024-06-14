const { Blague } = require('../modeles');

const ajouterBlague = async (req, res) => {
    const { contenu, chute } = req.body;
    try {
        const blague = await Blague.create({ contenu, chute });
        res.status(201).json(blague);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenirToutesBlagues = async (req, res) => {
    try {
        const blagues = await Blague.findAll();
        res.status(200).json(blagues);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenirBlagueParId = async (req, res) => {
    const { id } = req.params;
    try {
        const blague = await Blague.findByPk(id);
        if (blague) {
            res.status(200).json(blague);
        } else {
            res.status(404).json({ error: 'Blague non trouvée' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenirBlagueAleatoire = async (req, res) => {
    try {
        const blague = await Blague.findOne({ order: sequelize.random() });
        if (blague) {
            res.status(200).json(blague);
        } else {
            res.status(404).json({ error: 'Aucune blague disponible' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { ajouterBlague, obtenirToutesBlagues, obtenirBlagueParId, obtenirBlagueAleatoire };
