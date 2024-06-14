const express = require('express');
const { ajouterBlague, obtenirToutesBlagues, obtenirBlagueParId, obtenirBlagueAleatoire } = require('../controleurs/blagueControleur');

const router = express.Router();

router.post('/blagues', ajouterBlague);
router.get('/blagues', obtenirToutesBlagues);
router.get('/blagues/:id', obtenirBlagueParId);
router.get('/blagues/aleatoire', obtenirBlagueAleatoire);

module.exports = router;
