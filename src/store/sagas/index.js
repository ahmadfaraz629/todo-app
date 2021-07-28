import { all } from 'redux-saga/effects';
import  watcherLists  from 'store/sagas/lists';
import watcherAddToDoInList from 'store/sagas/add_todo_in_list';
export default function* rootSaga() {
  const sagas = [watcherLists(),watcherAddToDoInList()];
  yield all(sagas);
}
