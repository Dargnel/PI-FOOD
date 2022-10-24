import axios from "axios";

export const GET_RECIPES ="GET_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_RECIPE_FILTER = "ADD_RECIPE_FILTER";


export const getRecipes = (recipe)=>{
    return function (dispatch){
        axios.get(`//localhost:3001/recipes?name=${recipe}`)
        .then(data =>dispatch({type:GET_RECIPES,payload:data.data.results})) 
    }
} 

export const addRecipe =(title,resumPlate,healthLevel,stepBystep,diets)=>{
    return function (dispatch){
        axios.post(`//localhost:3001/recipes`,{
            title,
            resumPlate,
            healthLevel,
            stepBystep,
            diets
        }).then((data)=>dispatch({type:ADD_RECIPE,payload:data.data}))
    }
}

export const getDetail = (recipeId)=>{
    return function (dispatch){
        axios.get(`//localhost:3001/recipes/${recipeId}`)
        .then(data =>dispatch({type:GET_DETAIL,payload:data.data}))
        
    }
} 
