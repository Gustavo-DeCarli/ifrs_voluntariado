require('dotenv').config()
const app = require('./src/app')
const swaggerUi = require('swagger-ui-express')
const swaggerSpecs = require('./swagger')
const PORT = process.env.PORT || 3000
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log(
    `Documentação da API disponível em http://localhost:${PORT}/api-docs`,
  )
})
