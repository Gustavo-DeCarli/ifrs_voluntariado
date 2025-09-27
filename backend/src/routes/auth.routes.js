const express = require('express')
const AuthController = require('../controllers/auth.controller')
const router = express.Router()
/**
* @openapi
* components:
* schemas:
* Login:
* type: object
* required: [email, password]
* properties:
* email:
* type: string
* example: gustavo.carli@ifrs.com
* password:
* type: string
* example: 1234
*/
router.post('/login', AuthController.login)
module.exports = router
