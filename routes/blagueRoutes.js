const express = require('express');
const { ajouterBlague, ajouterBlagues, obtenirToutesBlagues, obtenirBlagueParId, obtenirBlagueAleatoire } = require('../controleurs/blagueControleur');

const router = express.Router();

/**
 * @swagger
 * /api/blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - contenu
 *               - chute
 *             properties:
 *               contenu:
 *                 type: string
 *               chute:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.post('/blagues', ajouterBlague);

/**
 * @swagger
 * /api/blagues/multiple:
 *   post:
 *     summary: Ajouter plusieurs blagues
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               required:
 *                 - contenu
 *                 - chute
 *               properties:
 *                 contenu:
 *                   type: string
 *                 chute:
 *                   type: string
 *     responses:
 *       201:
 *         description: Blagues ajoutées avec succès
 *       500:
 *         description: Erreur serveur
 */
router.post('/blagues/multiple', ajouterBlagues);

/**
 * @swagger
 * /api/blagues:
 *   get:
 *     summary: Obtenir toutes les blagues
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *       500:
 *         description: Erreur serveur
 */
router.get('/blagues', obtenirToutesBlagues);

/**
 * @swagger
 * /api/blagues/{id}:
 *   get:
 *     summary: Obtenir une blague par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de la blague
 *       404:
 *         description: Blague non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/blagues/:id', obtenirBlagueParId);

/**
 * @swagger
 * /api/blagues/aleatoire:
 *   get:
 *     summary: Obtenir une blague aléatoire
 *     responses:
 *       200:
 *         description: Blague aléatoire
 *       404:
 *         description: Aucune blague disponible
 *       500:
 *         description: Erreur serveur
 */
router.get('/blagues/aleatoire', obtenirBlagueAleatoire);

module.exports = router;
