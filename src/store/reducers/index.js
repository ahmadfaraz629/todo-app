import { combineReducers} from 'redux';
import lists from 'store/reducers/list';
import addTodoInList from './add_todo_in_list';
export default combineReducers({
    lists,
    addTodoInList
})
