const express = require("express");
const fileHelpers = require('../data/fileHelpers');
const router = express.Router();


const productController = require("../controllers/productController");

router.get('/', productController.listar)

module.exports = router

