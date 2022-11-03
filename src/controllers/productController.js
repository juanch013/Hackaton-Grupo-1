

const {getProducts} = require('../data/fileHelpers')

module.exports = {
    listar: (req, res)=>{
        let prods = getProducts();

        return res.status(200).json({
            ok:true,
            msg:"listado de productos",
            data:prods    
        })
    }
}
