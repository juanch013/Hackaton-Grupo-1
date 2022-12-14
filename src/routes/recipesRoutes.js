const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");

router.get('/', recipeController.listar);

router.post('/:id/ingredients',recipeController.ingredients);

router.get('/ingrediente', recipeController.buscarIngrediente);

module.exports = router; 