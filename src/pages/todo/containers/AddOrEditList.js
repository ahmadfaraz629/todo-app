import {connect} from 'react-redux';
import AddOrEditList from "todo/AddOrEditList";
import *as actions from 'store/actions/list';
const mapStateToProps = (state) => ({
    lists: state.lists.lists,
    isVisibleAddTodoInList:state.addTodoInList.isVisible
  });
  const mapDispatchToProps = (dispatch) => ({
    addList: (data) => dispatch(actions.addList(data)),
    editList: (id, name) => dispatch(actions.editList(id, name)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditList);
