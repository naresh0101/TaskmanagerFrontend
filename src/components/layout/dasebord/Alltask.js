import React from "react";
import Nav from "../nav/Nav";
import Sideheader from "../Sideheader/Sideheader";
import { makeStyles } from "@material-ui/core/styles";
import Alltodo from "../../todo/alltodo/Alltodo";



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

function Alltask(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Nav />
        <Sideheader />
        <main className={classes.content}>
          <Alltodo/>
        </main>
      </div>
    );
}

export default Alltask;
