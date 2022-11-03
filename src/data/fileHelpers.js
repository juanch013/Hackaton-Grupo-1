const fs  = require('fs');

const getProducts = ()=>{
    try {
        let productos = fs.readFileSync(__dirname+'/productos.json','utf-8');
        let res = JSON.parse(productos);
        return res;
    } catch (error) {
        console.log(error);
    }
}

const getRecetas = ()=>{
    try {
        let recetas = fs.readFileSync(__dirname+'/recipes.json','utf-8');
        let res = JSON.parse(recetas);
        return res;
    } catch (error) {
        console.log(error);
    }
}

const getProductsRecipe = (idReceta)=>{
    try {
        let recetas = fs.readFileSync(__dirname+'/recipes.json','utf-8');
        let res = JSON.parse(recetas);

        res.forEach(r => {
            if(r.id == id){
                return r.ingredientes
            }
        });

        return undefined;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getProducts,getRecetas, getProductsRecipe};