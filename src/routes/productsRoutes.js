const express = require("express");
const fileHelpers = require('../data/fileHelpers');
const router = express.Router();

// const productController = fs.readFileSync(path.join(__dirname, '));

router.get('/', fileHelpers.getProducts)

module.exports = router;
