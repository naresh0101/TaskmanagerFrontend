import React, { Component, Fragment } from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { reactLocalStorage } from 'reactjs-localstorage';

export class Logout extends Component {

    logout = ()=>{
        reactLocalStorage.clear()
    }
    render() {
        return (
           <Fragment>
            <ListItem button onClick={this.logout} >
                <ListItemIcon className="clrwhite">
                    <MeetingRoomIcon />
                </ListItemIcon>
                <ListItemText className="clrwhite" primary={`Logout`} />
            </ListItem>
           </Fragment>
        )
    }
}

export default Logout
