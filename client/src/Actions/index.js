import axios from "axios";

export const GET_RECIPES ="GET_RECIPES";
export const GET_DETAIL = "GET_DETAIL";
export const RECIPE_FILTER_ALFA = "RECIPE_FILTER_ALFA";
export const RECIPE_FILTER_HEALT = "RECIPE_FILTER_HEALT";
export const RECIPE_FILTER_DIET = "RECIPE_FILTER_DIET";
export const RECIPE_PER_PAGE = "RECIPE_PER_PAGE";
export const CURRENT_PAGE="CURRENT_PAGE";
export const NUMBER ="NUMBER";
export const LOADING ="LOADING";

export const loadingfun =(data)=>{
    return ({type:LOADING,payload:data})
}

export const numberfun=(data)=>{
    return({type:NUMBER,payload:data})
}

export const currentPagefun=(data)=>{
    return({type:CURRENT_PAGE,payload:data})
}

export const recipePerPagefun=()=>{
    return({type:RECIPE_PER_PAGE})
}

export const filterAlfa =(data)=>{
        return({type:RECIPE_FILTER_ALFA,payload:data})
}
export const filterHealt =(data)=>{
    return({type:RECIPE_FILTER_HEALT,payload:data})
}
export const filterDiet =(data)=>{
    return({type:RECIPE_FILTER_DIET,payload:data})
}

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
