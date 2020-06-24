import React, { Fragment,useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { Avatar, Divider, Typography } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { reactLocalStorage } from "reactjs-localstorage";
import BaseService from "../../../api/GetResponse";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Badge from "@material-ui/core/Badge";

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
  const [open, setOpen] = React.useState(false);
  const [tasks, settasks] = useState([])
    const handleClick = () => {
      setOpen(!open);
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

  return (
    <Fragment>
      <Typography variant="h5">Your Tasks </Typography>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {tasks.map((tasks, index) => (
          <Fragment key={index}>
            <Box boxShadow={2} bgcolor="background.paper">
              <ListItem
                style={{ cursor: "pointer" }}
                id={tasks._id}
                onClick={handleClick}
              >
                <IconButton aria-label="delete" className={classes.margin}>
                  {tasks.status ? (
                    <CheckCircleIcon style={{ color: "red" }} />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                </IconButton>
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  style={{
                    marginRight: "5px",
                  }}
                >
                  {tasks.like ? (
                    <StarSharpIcon
                      style={{ color: "#D4AF37" }}
                    />
                  ) : (
                    <StarBorderOutlinedIcon />
                  )}
                </IconButton>
                <ListItemText
                  // onClick={handleClick}
                  title="Click to more info"
                  primary={tasks.title}
                />
                <p variant="h6" style={{ marginRight: "5px" }}>
                  {formatDate(tasks.createdAt)}
                </p>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar alt={tasks.assignby} fontSize="small">
                    {tasks.assignby[0]}
                  </Avatar>
                </StyledBadge>
              </ListItem>
            </Box>
            <Box boxShadow={1} bgcolor="background.paper">
              <Collapse in={open}>
                <List disablePadding>
                  <ListItem className={classes.nested}>
                    <ListItemText secondary={tasks.describe} />
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
