import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Avatar, Divider, Typography } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 660,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Alltodo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Table stickyHeader aria-label="sticky table">
      <Typography variant="h5" bolder>Your Tasks </Typography>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <Box boxShadow={2} bgcolor="background.paper">
          <ListItem style={{ cursor: "pointer" }} onClick={handleClick}>
            <IconButton aria-label="delete" className={classes.margin}>
              <CheckCircleIcon />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin} style={{
              marginRight: '5px'}}>
              <StarBorderIcon />
            </IconButton>
            <ListItemText
              // onClick={handleClick}
              title="Click to more info"
              primary={`What is task title`}
            />
            <p variant="h6" style={{marginRight:'5px'}}>23 june 2020</p>
            <Avatar alt="Remy Sharp" fontSize="small" src="/static/images/avatar/1.jpg" />
        </ListItem>
      </Box>
      <Box boxShadow={1} bgcolor="background.paper">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemIcon>
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                secondary={`I have to complate this task by 24-6-2020 and then let see what will happen !`}
              />
              <Divider />
            </ListItem>
          </List>
        </Collapse>
      </Box>
    </List>
    </Table>
  );
}
