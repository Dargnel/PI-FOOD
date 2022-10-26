import {GET_RECIPES,GET_DETAIL,RECIPE_FILTER_ALFA,RECIPE_FILTER_HEALT,RECIPE_FILTER_DIET,RECIPE_PER_PAGE,CURRENT_PAGE,NUMBER,LOADING } from "../Actions"

const initialState ={
    ///states filtrado
    filterhealtScore:"ninguno",
    ordenarAlfa:"ninguno",
    filtradoRecipesDiets:"ninguno",
    ////////
     ////states pagination
    recipePerPage:10,
    currentPage:1,
    number:1,

    ////////
    loading:true,
    //////////////
    recips:[],
    recipsDetail:{
        title:"",
        healthScor:"",
        diets:[],
        analyzedInstructions:[{steps:[{}]}],
        stepBystep:{},
    },
}

const rootReducer =(state=initialState,action)=>{
 switch(action.type){
    case GET_RECIPES:
        return {...state,recips:action.payload};
    case GET_DETAIL:
        return {...state,recipsDetail:action.payload};
    case RECIPE_FILTER_ALFA:
        return {...state,ordenarAlfa:action.payload}
    case RECIPE_FILTER_HEALT:
        return{...state,filterhealtScore:action.payload}
    case RECIPE_FILTER_DIET:
        return{...state,filtradoRecipesDiets:action.payload}
    case RECIPE_PER_PAGE:
        return{...state}
    case CURRENT_PAGE:
        return{...state,currentPage:action.payload}
    case NUMBER:
        return{...state,number:action.payload}
    case LOADING:
        return{...state,loading:action.payload}
    default:
        return {...state};
 }
}

export default rootReducer;