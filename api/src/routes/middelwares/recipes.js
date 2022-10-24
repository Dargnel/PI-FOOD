const {Router} =require("express");
const {Recipe,Op,Diets} = require("../../db")
require('dotenv').config()
const axios = require('axios');
const {arraydatos} = require("../middelwares/diets")

const {
    API_KEY,
  } = process.env;


const router = Router();
////////////////////////////POST////////////////////////////////////////////////////////
router.post("/",async(req,res)=>{

    try {
    ////////////////////////////////////Add diets ////////////////////////////
        let findDbRecipe = await Diets.findAll()
        if(findDbRecipe<=0){
            await Diets.bulkCreate(arraydatos)  
            console.log(arraydatos); 
        }
    ////////////////////////////////////////////////////////////////////////
        const { id, title, resumPlate, healthLevel, stepBystep,diets} = req.body;
        if (!title || !resumPlate){
            return res.status(404).send("Falta enviar datos obligatorios");
        }
        const newRecipe= await Recipe.create(req.body);
        await newRecipe.addDiets(diets);
        console.log(diets);
        res.status(201).send(newRecipe);

      } catch (error) {
        res.status(400).send(error.message);
      }
})

//////////////////////////////////////GET WITCH QUERY///////////////////////////////////////////
router.get("/",async(req,res)=>{
    // [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
    try {
        //llamada a la api 
         const {name}=req.query
///////////////////////////////////////BUSCAR SIN QUERY////////////////////////////////////////
         if(!name){
            const prueba = ()=>{
                return  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`).then(
                      (response) => {   
                          return response.data
                      },
                      (error) => {
                          console.log(error);
                      }
                  );
              }
            //////////////////////////////////////////
            ///Buscar resultados y meterlos en un arreglo
            const respues = await prueba();
            const findDbRecipe = await Recipe.findAll({include :Diets})
            
            findDbRecipe.forEach(element => {
                respues.results.push(element)
            });
            
           ///////////////////////////////////////
    
           return res.status(200).json(respues)
         }
///////////////////////////////BUSCAR CON QUERY/////////////////////////////////////////////////
        const respuesta = ()=>{
            return  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&number=100&addRecipeInformation=true`).then(
                  (response) => {   
                      return response.data
                  },
                  (error) => {
                      console.log(error.message);
                  }
              );
          }
        //////////////////////////////////////////
        ///Buscar resultados y meterlos en un arreglo
        const respues = await respuesta();
        const findDbRecipe = await Recipe.findAll({where:{title:{[Op.like]:`%${name}%`}},include :Diets})
          findDbRecipe.forEach(element => {
                respues.results.push(element)
            });
       ///////////////////////////////////////

        res.status(200).json(respues)
    } catch (error) {
        res.status(400).send(error.message) 
    }
    
})
////////////////////////////////////////////////Buscar por ID////////////////////////////////////////////////

router.get("/:idRecip",async(req,res)=>{
try {
    const {idRecip}=req.params;
    const prueba = ()=>{
        return  axios.get(`https://api.spoonacular.com/recipes/${idRecip}/information?apiKey=${API_KEY}`).then(
              (response) => {   
                  return response.data
              },
             async (error) => {
                  const searchDB = await Recipe.findByPk(idRecip,{
                    include :Diets
                  })
                  return searchDB
              }
          );
      }
    //////////////////////////////////////////
    ///Buscar resultados y meterlos en un arreglo
    const respues = await prueba();

    console.log(respues);
   ///////////////////////////////////////

    res.status(200).json(respues)
} catch (error) {
    res.status(400).send("no se encontro la receta en la base de datos") 
}

})


module.exports=router;