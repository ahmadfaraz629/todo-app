import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Typography,
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
  const {
    handleEditList: editListHandle,
    deleteList,
    isVisibleAddTodoInList,
    setIdForAddingToDo,
    allLists,
    lists,
  } = props;
  const handleEditList = (val) => {
    editListHandle(val);
  };
  console.log(props);
  const handleDeleteList = (id) => {
    deleteList(id);
  };

  const handleToggleAndId = (id) => {
    isVisibleAddTodoInList(true);
    setIdForAddingToDo(id);
  };
  useEffect(() => {
    allLists();
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
          {lists !== "Something went wrong while fecthing the data" ? (
            lists.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item._id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <EditIcon onClick={() => handleEditList(item._id)} />
                </TableCell>
                <TableCell>
                  <DeleteForeverIcon
                    onClick={() => handleDeleteList(item._id)}
                  />
                </TableCell>
                <TableCell>
                  <AddIcon onClick={() => handleToggleAndId(item._id)} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>
                <Typography>Sorry data is not available</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Lists;
