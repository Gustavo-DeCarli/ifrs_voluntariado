const express = require('express')
const {
  authenticateToken,
  authorizeRole,
} = require('../middlewares/auth.middleware')
const ProtectedController = require('../controllers/protected.controller')
const router = express.Router()

/**
 * @openapi
 * components:
 * schemas:
 * User:
 * type: object
 * properties: 
 * name:
 * type: string
*/
router.get(
  '/admin',
  authenticateToken,
  authorizeRole('admin'),
  ProtectedController.adminOnly,
)

module.exports = router
