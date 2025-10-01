const express = require('express')
const {
  authenticateToken,
  authorizeRole,
} = require('../middlewares/auth.middleware')
const ProtectedController = require('../controllers/protected.controller')
const router = express.Router()

/**
 * @openapi
 * /admin:
 *   get:
 *     summary: Retorna dados do usuário administrador
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuário administrador retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Bem-vindo à área admin,\n admin@ifrs.edu.br"
 *       403:
 *         description: Acesso negado - apenas administradores
 */
router.get(
  '/admin',
  authenticateToken,
  authorizeRole('admin'),
  ProtectedController.adminOnly,
)

module.exports = router
