import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SendIcon from '@material-ui/icons/Send';
import FolderIcon from '@material-ui/icons/Folder';

import "./index.css"
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";


import Badge from "@material-ui/core/Badge";
import Logout from "../../acount/logout";
import { reactLocalStorage } from "reactjs-localstorage";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



export default function SIdemenu() {
  const classes = useStyles();
  const [open] = React.useState(true);
  const userdata = JSON.parse(reactLocalStorage.get('user'))[0]
  const username = userdata.name.split(" ")
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <ListItem>
          <ListItemIcon className="clrwhite">
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt={username[0]} src="." />
            </StyledBadge>
          </ListItemIcon>
          <ListItemText className="clrwhite" primary={username[0]} />
        </ListItem>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link to="/chat">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <SendIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Chat`} />
          </ListItem>
        </Link>
        <Link to="/adduser">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Add user`} />
          </ListItem>
        </Link>
        <Link to="/projects">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <FolderIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Projects`} />
          </ListItem>
        </Link>
        <Link to="/tasks">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Tasks`} />
          </ListItem>
        </Link>
        <Link to="/assign-task">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <NoteAddIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Assigm task`} />
          </ListItem>
        </Link>
        <Link to="/Completed">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <CloudDoneIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Completed`} />
          </ListItem>
        </Link>
        <Link to="profile">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Profile`} />
          </ListItem>
        </Link>
        <Link to="/login" >
          <Logout/>
        </Link>
      </List>
    </Drawer>
  );
} 
