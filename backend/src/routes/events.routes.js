const express = require('express')
const EventsController = require('../controllers/events.controller')
const {
  authenticateToken,
  authorizeRole,
} = require('../middlewares/auth.middleware')
const ProtectedController = require('../controllers/protected.controller')
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
router.get('/', EventsController.events)

/**
 * @openapi
 * /events:
 *   post:
 *     summary: Cria um novo evento
 *     tags:
 *       - Events
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do evento a ser criado
 *                 example: "Passeata 7 de setembro"
 *               data:
 *                 type: string
 *                 format: date-time
 *                 description: Data do evento no formato ISO 8601
 *                 example: "2025-10-05T03:00:00.000Z"
 *     responses:
 *       201:
 *         description: Evento criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       403:
 *         description: Acesso proibido
 *       500:
 *         description: Erro interno do servidor
 */
router.post(
  '/',
  authenticateToken,
  authorizeRole('admin'),
  EventsController.createEvent,
)

/**
 * @openapi
 * /events/{id}:
 *   delete:
 *     summary: Exclui um evento pelo ID
 *     tags:
 *       - Events
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do evento a ser excluído
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Evento excluído com sucesso
 *       404:
 *         description: Evento não encontrado
 *       500:
 *         description: Erro ao excluir o evento
 */
router.delete(
  '/:id',
  authenticateToken,
  authorizeRole('admin'),  // Garantir que só administradores possam excluir eventos
  EventsController.deleteEvents,  // Chama o método de exclusão no controller
);

/**
 * @openapi
 * /events/{id}:
 *   put:
 *     summary: Atualiza os detalhes de um evento existente
 *     tags:
 *       - Events
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do evento a ser atualizado
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Novo nome do evento
 *                 example: "Passeata 7 de setembro"
 *               data:
 *                 type: string
 *                 format: date-time
 *                 description: Nova data do evento no formato ISO 8601
 *                 example: "2025-10-10T03:00:00.000Z"
 *     responses:
 *       200:
 *         description: Evento atualizado com sucesso
 *       400:
 *         description: Dados inválidos ou parâmetros incorretos
 *       401:
 *         description: Não autorizado
 *       403:
 *         description: Acesso proibido
 *       404:
 *         description: Evento não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put(
  '/:id',
  authenticateToken,
  authorizeRole('admin'),
  EventsController.updateEvent,
);

module.exports = router
