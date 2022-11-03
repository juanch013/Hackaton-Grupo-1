const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");

router.get('/', recipeController.listar);
router.get('/:id/ingredients',recipeController.ingredients);


module.exports = router; 