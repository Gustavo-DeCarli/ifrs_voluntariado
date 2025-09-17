const express = require("express");
// Importa o framework Express
const {
  authenticateToken,
  authorizeRole,
} = require("../middlewares/auth.middleware");
//Importa o middleware que valida tokens JWT em rotas protegidas
const ProtectedController = require("../controllers/protected.controller");
// Importa o controller responsável por lidar com rotas protegidas por autenticação JWT
const router = express.Router();
// Cria uma nova instância do roteador do Express para definir as rotas protegidas
router.get(
  "/CadastroEvento",
  authenticateToken,
  authorizeRole("admin"),
  ProtectedController.adminOnly
);

// Define a rota GET /admin que chama o método adminOnly do ProtectedController
module.exports = router;
// Exporta o roteador configurado para ser utilizado na aplicação
