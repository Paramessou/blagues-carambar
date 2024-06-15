const express = require('express');
const { ajouterBlague, ajouterBlagues, obtenirToutesBlagues, obtenirBlagueParId, obtenirBlagueAleatoire } = require('../controleurs/blagueControleur');

const router = express.Router();

router.post('/blagues', ajouterBlague);
router.post('/blagues/multiple', ajouterBlagues);
router.get('/blagues', obtenirToutesBlagues);
router.get('/blagues/:id', obtenirBlagueParId);
router.get('/blagues/aleatoire', obtenirBlagueAleatoire);

module.exports = router;
