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
        let ret = undefined;
        res.forEach(r => {
            console.log(r.id);
            if(r.id == idReceta){
                ret = r.ingredientes
            }
        });
        return ret;
    } catch (error) {
        console.log(error);
    }
}

const getRecetasPorProd = (idProd)=>{
    try {
        let recetas = fs.readFileSync(__dirname+'/recipes.json','utf-8');
        let res = JSON.parse(recetas);

        res.forEach(r => {
            if(r.id == idReceta){
                return r.ingredientes
            }
        });

        return undefined;
    } catch (error) {
        console.log(error);
    }
///////////////
}

const getRecetaConIngredientes = (idReceta)=>{
    try {
        let recetas = fs.readFileSync(__dirname+'/recipes.json','utf-8');
        let res = JSON.parse(recetas);



    } catch (error) {
        console.log(error);
    }
}




module.exports = {getProducts,getRecetas, getProductsRecipe};

