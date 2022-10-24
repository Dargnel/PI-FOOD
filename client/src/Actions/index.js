import axios from "axios";

export const GET_RECIPES ="GET_RECIPES";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_RECIPE_FILTER = "ADD_RECIPE_FILTER";


export const getRecipes = (recipe)=>{
    return function (dispatch){
        axios.get(`/recipes?name=${recipe}`)
        .then(data =>dispatch({type:GET_RECIPES,payload:data.data.results})) 
    }
} 

export const getDetail = (recipeId)=>{
    return function (dispatch){
        axios.get(`/recipes/${recipeId}`)
        .then(data =>dispatch({type:GET_DETAIL,payload:data.data}))
        
    }
} 
