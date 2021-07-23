import { combineReducers} from 'redux';
import lists from './list';
import addTodoInList from './add_todo_in_list';
export default combineReducers({
    lists,
    addTodoInList
})