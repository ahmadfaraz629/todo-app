import {
    IS_VISIBLE_ADD_TO_DO_IN_LIST_SAGA,
    SET_ID_FOR_ADDING_TO_DO_SAGA
  } from "../types";
  
export const toggleAddToDoInList=(isVisible)=>{
    return{type:IS_VISIBLE_ADD_TO_DO_IN_LIST_SAGA,payload:isVisible}
}

export const setIdForAddingToDo=(id)=>
{
    return {type:SET_ID_FOR_ADDING_TO_DO_SAGA,payload:id}
}