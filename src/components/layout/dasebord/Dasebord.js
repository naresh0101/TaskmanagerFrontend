import React from "react";
import Nav from "../nav/Nav";
import Sideheader from "../Sideheader/Sideheader";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alltodo from "../../todo/alltodo/Alltodo";
import Assigntask from "../../todo/addtodo/Assigntask";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    marginTop:"100px",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Nav />
        <Sideheader />
        <main className={classes.content}>
            <Alltodo/>
            <Assigntask/>
        </main>
      </div>
    );
}

export default ResponsiveDrawer;
