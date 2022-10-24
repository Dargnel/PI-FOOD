const {Router} =require("express");
const{Diets} = require("../../db")

const router = Router();


const arraydatos = [{Name:"Gluten Free"},{Name:"Ketogenic"},{Name:"Vegetarian"},{Name:"Lacto-Vegetarian"},{Name:"Ovo-Vegetarian"},
{Name:"Vegan"},{Name:"Pescetarian"},{Name:"Paleo"},{Name:"Primal"},{Name:"Low FODMAP"}]

router.get("/",async(req,res)=>{
    
    let findDbRecipe = await Diets.findAll()
    if(findDbRecipe<=0){
        const creardt = await Diets.bulkCreate(arraydatos)
        return res.status(200).send(creardt)
    }
    res.status(200).send(findDbRecipe)
})



module.exports={router,arraydatos}