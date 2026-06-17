const express = require("express");
const router = express.Router();

const {
    getLivres,
    getLivresEmpruntesByEmail
} = require("../controllers/livresController");

/**
 * @swagger
 * /api/livres:
 *   get:
 *     summary: Récupère tous les livres disponibles
 *     responses:
 *       200:
 *         description: Liste des livres
 */
router.get("/", getLivres);

/**
 * @swagger
 * /api/livres/emprunts:
 *   get:
 *     summary: Récupère les emprunts par email
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des emprunts
 *       400:
 *         description: Email requis
 */
router.get("/emprunts", getLivresEmpruntesByEmail);

module.exports = router;