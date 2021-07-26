import {connect} from 'react-redux';
import *as actions from 'store/actions/list';
import *as addTodoInListActions from 'store/actions/add_todo_in_list';
import Lists from "todo/Lists";

const mapStateToProps = (state) => ({
    lists: state.lists.lists,
    isShowing: state.addTodoInList.isVisible,
  });
  const mapDispatchToProps = (dispatch) => ({
    deleteList: (id) => dispatch(actions.deleteList(id)),
    allLists: () => dispatch(actions.allList()),
    isVisibleAddTodoInList: (data) =>
      dispatch(addTodoInListActions.toggleAddToDoInList(data)),
    setIdForAddingToDo: (id) =>
      dispatch(addTodoInListActions.setIdForAddingToDo(id)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Lists);
