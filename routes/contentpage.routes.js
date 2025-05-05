const express = require("express");
const contentController = require('../controllers/content.controller')
const router = express.Router();

// Home Page Route
router.get("/dsa", contentController.getdsapage)

module.exports = router;
