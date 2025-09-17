const express = require("express");
// Importa o framework Express
const PublicController = require("../controllers/public.controller");
// Importa o controller responsável por lidar com rotas públicas da aplicação
const router = express.Router();
// Cria uma nova instância do roteador do Express para as rotas públicas
router.get("/listagem", PublicController.listagem);
// Define a rota GET /listagem que chama o método listagem do PublicController
module.exports = router;
// Exporta o roteador configurado para ser utilizado na aplicação
