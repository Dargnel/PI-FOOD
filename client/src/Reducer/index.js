import { ADD_RECIPE,GET_RECIPES,GET_DETAIL, ADD_RECIPE_FILTER } from "../Actions"

const initialState ={
    recips:[],
    recipsDetail:{
        title:"",
        healthScor:"",
        diets:[],
        analyzedInstructions:[{steps:[{}]}],
        stepBystep:{},
    },
    recipadd :{},
}

const rootReducer =(state=initialState,action)=>{
 switch(action.type){
    case GET_RECIPES:
        return {...state,recips:action.payload};
    case GET_DETAIL:
        return {...state,recipsDetail:action.payload};
    case ADD_RECIPE:
        return {...state,recipadd:action.payload}
    default:
        return {...state};
 }
}

export default rootReducer;