import {
    takeLatest,
    put,
  } from "redux-saga/effects";
  import {
    ALL_LIST,
    ALL_LIST_SAGA,
    DELETE_LIST,
    DELETE_LIST_SAGA,
    EDIT_LIST,
    EDIT_LIST_SAGA,
    ADD_LIST,
    ADD_LIST_SAGA,
  } from "store/types";
  import axios from "axios";
  const wait = (ms) => new Promise((res) => setTimeout(res, ms));
  
  //url
  let url=process.env.REACT_APP_API_URL;
  //list
  export function* allList(actions) {
    const setHeaders = { headers: { "Content-Type": "application/json" } };
    let res = yield fetch(url+"list/all", setHeaders);
    res = yield res.json();
    console.log(res);
    yield put({ type: ALL_LIST, payload: { lists: res } });
  }
  
  //add
  export function* addList(actions) {
    yield wait(1000);
    const setHeaders = { headers: { "Content-Type": "application/json" } };
    let res = yield axios.post(url+"list/add", {
      name: actions.payload,
    });
    yield put({ type: ADD_LIST, payload: {_id:res.data._id, name:res.data.name } });
  }
  
  //edit
  export function* editList(actions) {
    yield wait(500);
    const { id, name } = actions.payload;
    const setHeaders = { headers: { "Content-Type": "application/json" } };
    let res = yield axios.put(url+"list/edit", {
      _id:id,
      name: name
    },setHeaders);
    console.log(res);
    yield put({ type: EDIT_LIST, payload: {_id:res.data.data._id, name:res.data.data.name } });
  }
  
  //delete
  export function* deleteList(actions) {
    yield wait(500);
    const {id} = actions.payload;
    const setHeaders = { headers: { "Content-Type": "application/json" } };
    let res = yield axios.post(url+"list/delete", {
      id,
    },setHeaders);
    console.log(res);
    yield put({ type: DELETE_LIST, payload: { id: res.data._id } });
  }
  
  //===============================watch actions================================
  //watcher list
  export function* watcherLists() {
    yield takeLatest(ALL_LIST_SAGA, allList);
    yield takeLatest(ADD_LIST_SAGA, addList);
    yield takeLatest(EDIT_LIST_SAGA, editList);
    yield takeLatest(DELETE_LIST_SAGA, deleteList);
  }
  export default watcherLists;
