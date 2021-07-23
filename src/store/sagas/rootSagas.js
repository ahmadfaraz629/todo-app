import { all } from "redux-saga/effects";
import {
  watchAllListSaga,
  watchAddListSaga,
  watchEditListSaga,
  watchDeleteListSaga
} from "./list";
import {
  watchIsVisibleAddToDoInListSaga,
  watchSetIdForAddingToDo,
} from "./add_todo_in_list";
export default function* rootSagas() {
  yield all([
    watchAllListSaga(),
    watchAddListSaga(),
    watchEditListSaga(),
    watchDeleteListSaga(),
    watchIsVisibleAddToDoInListSaga(),
    watchSetIdForAddingToDo(),
  ]);
}
