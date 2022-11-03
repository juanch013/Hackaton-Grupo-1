
const{getRecetas, getProductsRecipe} = require('../data/fileHelpers.js')

module.exports = {
    listar:(req, res)=>{
        let recetas = getRecetas();

        return res.status(200).json({
            ok:true,
            msg:"Listado de recetas",
            data:recetas
        })   
    },

    ingredients:(req, res)=>{
        const{id} = req.params;
        let ingredientes = getProductsRecipe(Number(id));

        if(ingredientes == undefined){
            return res.status(404).json({
                ok:true,
                msg:"receta not found"
            })
        }

        return res.status(200).json({
            ok:true,
            msg:`ingredientes de la receta ${id}`,
            data:ingredientes
        })

    }
}