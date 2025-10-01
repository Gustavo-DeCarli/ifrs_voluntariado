const express = require('express')
const PublicController = require('../controllers/public.controller')
const router = express.Router()
/**
 * @openapi
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: Passeata 7 de setembro
 *         data:
 *           type: string
 *           format: date-time
 *           example: 2025-10-05T03:00:00.000Z
 *     EventListResponse:
 *       type: object
 *       properties:
 *         listagem:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Event'
 */

/**
 * @openapi
 * /events:
 *   get:
 *     summary: Retorna a lista de eventos públicos
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: Lista de eventos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EventListResponse'
 */
router.get('/events', PublicController.events)
module.exports = router
