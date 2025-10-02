const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API de Gerencia de Eventos de Voluntariado',
      version: '1.0.0',
      description: 'Uma API simples para gerenciar eventos.',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL base da sua API
        description: 'Servidor de desenvolvimento local',
      },
    ],
  },
  // Onde o JSDoc vai procurar os comentários
  apis: ['./src/routes/*.js', './src/models/*.js'], // Exemplo: procurar em todos os arquivos .js nas pastas routes e models
}

const specs = swaggerJsdoc(options)

module.exports = specs
