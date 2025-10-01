const express = require('express')
const AuthController = require('../controllers/auth.controller')
const router = express.Router()
/**
 * @openapi
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', AuthController.login)
module.exports = router
