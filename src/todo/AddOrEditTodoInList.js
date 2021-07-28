import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
const AddOrEditTodoInList = (props) => {
  console.log(props);
  return (
    <div>
      <Typography variant="h5">ADD Or Edit ToDo in List</Typography>
      <p>{props.selectedId}</p>
    </div>
  );
};

export default AddOrEditTodoInList;
