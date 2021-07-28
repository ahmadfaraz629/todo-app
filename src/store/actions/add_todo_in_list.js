import {
  IS_VISIBLE_ADD_TO_DO_IN_LIST_SAGA,
  SET_ID_FOR_ADDING_TO_DO_SAGA,
} from "store/types";

export const toggleAddToDoInList = (isVisible) => ({
  type: IS_VISIBLE_ADD_TO_DO_IN_LIST_SAGA, payload: isVisible 
});

export const setIdForAddingToDo = (id) => ({
  type: SET_ID_FOR_ADDING_TO_DO_SAGA, payload: id 
});
