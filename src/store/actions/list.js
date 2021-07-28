import {
  ALL_LIST_SAGA,
  ADD_LIST_SAGA,
  EDIT_LIST_SAGA,
  DELETE_LIST_SAGA,
} from "store/types";

//list
export const allList = () => ({
  type: ALL_LIST_SAGA,
});
//add
export const addList = (name) => ({ type: ADD_LIST_SAGA, payload: name });
//edit
export const editList = (id, name) => ({
  type: EDIT_LIST_SAGA,
  payload: { name: name, id: id },
});
//delete
export const deleteList=(id)=>({ type: DELETE_LIST_SAGA, payload: { id: id } });
