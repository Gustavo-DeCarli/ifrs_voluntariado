const express = require("express");
const PublicController = require("../controllers/public.controller");
const router = express.Router();
router.get("/events", PublicController.events);
module.exports = router;
