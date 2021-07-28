import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  rootForm: {
    marginTop: theme.spacing(2),
  },

  inputList: {
    marginTop: theme.spacing(2),
    minWidth: 300,
  },
  btnAddList: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));
export default useStyles;
