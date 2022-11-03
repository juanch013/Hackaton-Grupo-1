const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");

router.get('/', recipeController)

router.get('/ingrediente')

module.exports = router; 