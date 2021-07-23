import {
  take,
  takeEvery,
  takeLatest,
  call,
  all,
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
} from "../types";
import axios from "axios";
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

//list
export function* allList(actions) {
  let url = "http://localhost:3001/list/all";
  const setHeaders = { headers: { "Content-Type": "application/json" } };
  let res = yield fetch(url, setHeaders);
  res = yield res.json();
  console.log(res);
  yield put({ type: ALL_LIST, payload: { lists: res } });
}

//add
export function* addList(actions) {
  yield wait(1000);
  let url = "http://localhost:3001/list/add";
  const setHeaders = { headers: { "Content-Type": "application/json" } };
  let res = yield axios.post(url, {
    name: actions.payload,
  });
  yield put({ type: ADD_LIST, payload: {_id:res.data._id, name:res.data.name } });
}

//edit
export function* editList(actions) {
  yield wait(500);
  const { id, name } = actions.payload;
  let url = "http://localhost:3001/list/edit";
  const setHeaders = { headers: { "Content-Type": "application/json" } };
  let res = yield axios.put(url, {
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
  let url = "http://localhost:3001/list/delete";
  const setHeaders = { headers: { "Content-Type": "application/json" } };
  let res = yield axios.post(url, {
    id:id,
  },setHeaders);
  console.log(res);
  yield put({ type: DELETE_LIST, payload: { id: res.data._id } });
}

//===============================watch actions================================
//watch list
export function* watchAllListSaga() {
  yield takeLatest(ALL_LIST_SAGA, allList);
}

//watch add
export function* watchAddListSaga() {
  yield takeLatest(ADD_LIST_SAGA, addList);
}

//watch edit
export function* watchEditListSaga() {
  yield takeLatest(EDIT_LIST_SAGA, editList);
}
//watch delete
export function* watchDeleteListSaga() {
  yield takeLatest(DELETE_LIST_SAGA, deleteList);
}

export function* watchWelcomeMessage() {
  console.log("Welcome message");
}
