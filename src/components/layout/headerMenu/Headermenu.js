import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SendIcon from '@material-ui/icons/Send';
import FolderIcon from '@material-ui/icons/Folder';

import "./index.css"
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

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
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDrawerClose = ()=>{

  }

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
            <Avatar alt="name" src="http" />
          </ListItemIcon>
          <ListItemText className="clrwhite" primary={`Hi Naresh !`} />
        </ListItem>
        <IconButton onClick={handleDrawerClose}>
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
        <Link to="/login">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Logout`} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
} 
