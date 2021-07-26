import { connect } from "react-redux";
import AddOrEditTodoInList from "todo/AddOrEditTodoInList";
const mapStateToProps = (state) => ({
  selectedId: state.addTodoInList.selectedId,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrEditTodoInList);
