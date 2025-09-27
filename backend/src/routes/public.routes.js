const express = require('express')
const PublicController = require('../controllers/public.controller')
const router = express.Router()
/**
 * @openapi
 * components:
 * schemas:
 * Events:
 * type: object
 * properties: 
 * name:
 * type: string
*/
router.get('/events', PublicController.events)
module.exports = router
