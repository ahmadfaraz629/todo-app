import {
    take,
    takeEvery,
    takeLatest,
    call,
    all,
    put,
  } from "redux-saga/effects";
  import {
   IS_VISIBLE_ADD_TO_DO_IN_LIST,
   IS_VISIBLE_ADD_TO_DO_IN_LIST_SAGA,
   SET_ID_FOR_ADDING_TO_DO,
   SET_ID_FOR_ADDING_TO_DO_SAGA
  } from "../types";


  export function* isVisibleAddToDoInListSaga(actions){
    yield put({type:IS_VISIBLE_ADD_TO_DO_IN_LIST,payload:actions.payload});
}

//setId for adding the add to do in list
export function* setIdForAddingToDo(actions){
    yield put({type:SET_ID_FOR_ADDING_TO_DO,payload:actions.payload});
}


//watch setId for adding the add to do in list
export function* watchSetIdForAddingToDo(){
    yield takeEvery(SET_ID_FOR_ADDING_TO_DO_SAGA,setIdForAddingToDo)
}

//watch component ADD_TO_DO In list is visible or not
  export function* watchIsVisibleAddToDoInListSaga(){
      yield takeEvery(IS_VISIBLE_ADD_TO_DO_IN_LIST_SAGA,isVisibleAddToDoInListSaga)
  }
