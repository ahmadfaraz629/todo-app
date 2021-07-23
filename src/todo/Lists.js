import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/list";
import * as addTodoInListActions from '../store/actions/add_todo_in_list';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Container,
  Typography
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

const Lists = (props) => {
  const classes = useStyles();
  const handleEditList = (val) => {
    props.handleEditList(val);
  };
  console.log("Lists is rendered");
  console.log(props);
  const handleDeleteList = (id) => {
    props.deleteList(id);
  };

  const handleToggleAndId=(id)=>{
    props.isVisibleAddTodoInList(true);
    props.setIdForAddingToDo(id);
  }
  useEffect(() => {
    props.allLists();
    console.log("UseEffect is called in list to dos");
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Add Todo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.lists!=="Something went wrong while fecthing the data"?
           
            props.lists.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <EditIcon onClick={() => handleEditList(item._id)} />
              </TableCell>
              <TableCell>
                <DeleteForeverIcon onClick={() => handleDeleteList(item._id)} />
              </TableCell>
              <TableCell>
              <AddIcon onClick={()=>handleToggleAndId(item._id)} />
              </TableCell> 
            </TableRow>
          )):<TableRow><TableCell>
            <Typography>Sorry data is not available</Typography>
            </TableCell></TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists.lists,
   isShowing:state.addTodoInList.isVisible
});
const mapDispatchToProps = (dispatch) => ({
  deleteList: (id) => dispatch(actions.deleteList(id)),
  allLists: () => dispatch(actions.allList()),
  isVisibleAddTodoInList:(data)=>dispatch(addTodoInListActions.toggleAddToDoInList(data)),
  setIdForAddingToDo:(id)=>dispatch(addTodoInListActions.setIdForAddingToDo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Lists);
