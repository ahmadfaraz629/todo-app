import React from 'react'
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

  const useStyles = makeStyles((theme) => ({
    wrapper:{
        width:'100%',
        [theme.breakpoints.up("sm")]: {
           maxWidth:'53%'
          },
    }
  }));
const Wrapper = ({children}) => {
    const classes=useStyles();
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default Wrapper
