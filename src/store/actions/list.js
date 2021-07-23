import {
  ALL_LIST_SAGA,
  ADD_LIST_SAGA,
  EDIT_LIST_SAGA,
  DELETE_LIST_SAGA,
} from "../types";

export const allList = () => {
  return { type: ALL_LIST_SAGA };
};

export const addList = (name) => {
  return { type: ADD_LIST_SAGA, payload: name };
};

export const editList = (id, name) => {
  console.log(id, name);
  return { type: EDIT_LIST_SAGA, payload: { name: name, id: id } };
};

export const deleteList = (id) => {
  return { type: DELETE_LIST_SAGA, payload: { id: id } };
};

// export const addToDoInList = (todo) => {
//   return { type: ADD_TO_DO_IN_LIST_SAGA, data: todo };
// };
