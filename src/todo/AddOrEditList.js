import React, { useState, useCallback } from "react";
import {
  Typography,
  TextField,
  FormLabel,
  Container,
  InputLabel,
  FormControl,
  Button,
  Box,
  makeStyles,
} from "@material-ui/core";

import Lists from "pages/todo/containers/Lists";
import AddOrEditTodoInList from "pages/todo/containers/AddOrEditTodoInList";
import AddOrEditListStyles from "todo/styles/AddOrEditList";


const AddOrEditList = (props) => {
  const classes = AddOrEditListStyles();
  const {lists,editList,addList,isVisibleAddTodoInList}=props;
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const callBackHandleEditList = useCallback(
    (id) => {
      setId(id);
      let data = lists.filter((item) => item._id === id);
      setName(data[0].name);
    },
    [lists]
  );

  const handleEditList = () => {
    editList(id, name);
  };
  const handleAddList = () => {
    addList(name);
  };
  return (
    <Container>
      <div className={classes.root}>
        <div>
          <Typography variant="h6">{id ? "Edit List" : "Add List"}</Typography>
          <div className={classes.rootForm}>
            <FormControl>
              <InputLabel shrink>{id ? "Edit List" : "Add List"}</InputLabel>
              <TextField
                variant="outlined"
                size="small"
                className={classes.inputList}
                placeholder={id ? "Edit List" : "Add List"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnAddList}
              onClick={id ? handleEditList : handleAddList}
            >
              {id ? "Edit List" : "Add List"}
            </Button>
          </div>
          <br />
          <Lists handleEditList={callBackHandleEditList} />
        </div>{isVisibleAddTodoInList?
        <div style={{backgroundColor:'',width:'100%'}}>
          <AddOrEditTodoInList />
        </div>:<></>}
      </div>
    </Container>
  );
};

// const mapStateToProps = (state) => ({
//   lists: state.lists.lists,
//   isVisibleAddTodoInList:state.addTodoInList.isVisible
// });
// const mapDispatchToProps = (dispatch) => ({
//   addList: (data) => dispatch(actions.addList(data)),
//   editList: (id, name) => dispatch(actions.editList(id, name)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditList);
export default AddOrEditList;
