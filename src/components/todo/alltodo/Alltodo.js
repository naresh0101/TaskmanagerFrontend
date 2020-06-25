import React, { Fragment,useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import { Avatar, Divider } from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import { reactLocalStorage } from "reactjs-localstorage";
import BaseService from "../../../api/GetResponse";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';import Badge from "@material-ui/core/Badge";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteResponse from '../../../api/DeleteResponse';



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
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Alltodo() {
  const classes = useStyles();
  const [tasks, settasks] = useState([
    {
      "status": "true",
      "_id": "5ef3d1232cafd40a78964e4b",
      "tasktitle": "Hello I'm demo task",
      "assignby": "Auther@naresh0101.com",
      "describe": "This is a demo task that you can see and there are lote that need to be improve",
      "project": "Home",
      "like": "false",
      "assignto": "admin@gmail.com",
      "updatedAt": "2020-06-24T22:18:11.712Z",
      "createdAt": "2020-06-24T22:18:11.712Z",
      "__v": 0
    }
  ])
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
    useEffect(() => {
    BaseService.getResponse('gettasks',
      reactLocalStorage.get('token')).then((resp)=>{
        settasks(resp.data);
      })
      
    })    
    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    function deletetask(taskid){    
      DeleteResponse.deleteResponse(`delete-task?id=${taskid}`,
        reactLocalStorage.get('token')).then((resp) => {
          console.log(resp);
          // settasks(resp.data);
      })
    }
  return (
    <Fragment>
      <Alert severity="info" >
        <AlertTitle>Tasks </AlertTitle>
        Click on square box to <strong>open (describe) and to mark done</strong>
      </Alert>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {tasks.map((task, index) => (
          <Fragment key={index}>
            <Box boxShadow={2} bgcolor="background.paper">
              <ListItem key={index} button>
                <ListItemAvatar>
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(index)}
                    checked={checked.indexOf(index) !== -1}
                    inputProps={{ 'aria-labelledby': index }}
                  />
                </ListItemAvatar>
                <ListItemAvatar button>
                  {task.like === "true" ? (
                    <FavoriteIcon
                      style={{ color: "red" }}
                    />
                  ) : (
                      <FavoriteBorderIcon />
                    )}
                </ListItemAvatar>
                
                <ListItemSecondaryAction>
                  <StyledBadge
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <ListItemText primary={formatDate(task.createdAt)} style={{marginRight:"10px"}} />

                    <Avatar alt={task.assignby} fontSize="small">
                      {task.assignby[0]}
                    </Avatar>
                  </StyledBadge>
                </ListItemSecondaryAction>
                <ListItemText primary={task.tasktitle} />
              </ListItem>

            </Box>
            <Box boxShadow={1} style={{ background:'#ded9d95e'}}>
              <Collapse in={checked.indexOf(index) !== -1} id={index}>
                <List disablePadding>
                  <ListItem className={classes.nested}>
                    <ListItemText primary={`Assign by     ${task.assignby}`} />
                    <Button variant="outlined" size="small" onClick={() => deletetask(task._id)} className={classes.margin}>
                      Mark Done
                     </Button>
                    <Divider />
                  </ListItem>
                  
                  <ListItemSecondaryAction>
                    <StyledBadge
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                    >
                    </StyledBadge>
                  </ListItemSecondaryAction>
                  <ListItem className={classes.nested}>
                    <ListItemText secondary={task.describe} />
                    <Divider />
                  </ListItem>
                  
                </List>
              </Collapse>
            </Box>
          </Fragment>
        ))}
      </List>
    </Fragment>
  );
}
