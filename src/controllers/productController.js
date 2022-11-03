
let productController = {
  list: (req,res) => {
    res.status(200).json(productos);
  },
}

module.exports = productController;