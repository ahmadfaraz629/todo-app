import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/list";
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

import Lists from "./Lists";
import AddOrEditTodoInList from "./AddOrEditTodoInList";

const useStyles = makeStyles((theme) => ({
  inputList: {
    marginTop: theme.spacing(2),
    minWidth: 300,
  },
  btnAddList: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  root:{
    display: "flex",
    flexDirection:'column',
    [theme.breakpoints.up("sm")]: {
      flexDirection:'row',
     },
   }
}));

const AddOrEditList = (props) => {
  const classes = useStyles();
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const callBackHandleEditList = useCallback(
    (id) => {
      console.log(id);
      setId(id);
      let lists = props.lists;
      let data = lists.filter((item) => item._id === id);
      setName(data[0].name);
    },
    [props.lists]
  );

  const handleEditList = () => {
    console.log("Editing");
    props.editList(id, name);
  };
  const handleAddList = () => {
    console.log("Adding");
    props.addList(name);
  };
  return (
    <Container>
      <br />
      <div className={classes.root}>
        <div>
          <Typography variant="h6">{id ? "Edit List" : "Add List"}</Typography>
          <br />
          <div>
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
        </div>{props.isVisibleAddTodoInList?
        <div style={{backgroundColor:'',width:'100%'}}>
          <AddOrEditTodoInList />
        </div>:null}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists.lists,
  isVisibleAddTodoInList:state.addTodoInList.isVisible
});
const mapDispatchToProps = (dispatch) => ({
  addList: (data) => dispatch(actions.addList(data)),
  editList: (id, name) => dispatch(actions.editList(id, name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditList);
