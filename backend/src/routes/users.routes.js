const express = require('express')
const UsersController = require('../controllers/users.controller')
const {
  authenticateToken,
  authorizeRole,
} = require('../middlewares/auth.middleware')
const router = express.Router()
/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Email do usuário
 *           example: "teste@gmail.com"
 *          password:
 *            type: string
 *            description: Senha do usuário
 *            example: "123456"
 *          role:
 *            type: string
 *            description: Tipo de role do usuário (user/admin)
 *            example: "admin"
 *     UserListResponse:
 *       type: object
 *       properties:
 *         listagem:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 */

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retorna a lista de usuários públicos
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserListResponse'
 */
router.get('/', UsersController.users)

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "teste@gmail.com"
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 description: Tipo de role do usuário (user/admin)
 *                 example: "admin"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
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
  UsersController.createUser,
)

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: Exclui um usuário pelo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do usuário a ser excluído
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao excluir o usuário
 */
router.delete(
  '/:id',
  authenticateToken,
  authorizeRole('admin'), 
  UsersController.deleteUsers,
)

/**
 * @openapi
 * /users/{id}:
 *   put:
 *     summary: Atualiza os detalhes de um usuário existente
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do usuário a ser atualizado
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
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "teste@gmail.com"
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 description: Tipo de role do usuário (user/admin)
 *                 example: "admin"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Dados inválidos ou parâmetros incorretos
 *       401:
 *         description: Não autorizado
 *       403:
 *         description: Acesso proibido
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put(
  '/:id',
  authenticateToken,
  authorizeRole('admin'),
  UsersController.updateUser,
)

module.exports = router
