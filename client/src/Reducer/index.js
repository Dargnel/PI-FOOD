import {GET_RECIPES,GET_DETAIL } from "../Actions"

const initialState ={
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
    default:
        return {...state};
 }
}

export default rootReducer;