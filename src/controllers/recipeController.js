
const{getRecetas, getProductsRecipe, getProducts} = require('../data/fileHelpers.js')

module.exports = {
    listar:(req, res)=>{
        let recetas = getRecetas();

        let productos = getProducts();

        let retData = []

        recetas.forEach((r)=>{
            let ing = []
            r.ingredientes.forEach((i)=>{
                let p = productos.find(k=>k.id == i.id_ingrediente)
                ing.push({
                    producto:p,
                    catidad:i.cant
                })
            })
            r.ingredientes = ing;
        })

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

        let productos = getProducts();

        let retData =[]

        ingredientes.forEach((i) => {
            productos.forEach((p)=>{
                if(p.id == i.id_ingrediente){
                    retData.push({
                        producto:p,
                        catidad:i.cant
                    })
                }
            })
        });

        return res.status(200).json({
            ok:true,
            msg:`ingredientes de la receta ${id}`,
            data:retData
        })

    }
}