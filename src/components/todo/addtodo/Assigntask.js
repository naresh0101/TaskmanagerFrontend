import React, { Component, Fragment } from 'react'
import { Card, TextField, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { reactLocalStorage } from "reactjs-localstorage";
import PostApiService from "../../../api/postResponse"
import GetApiService from "../../../api/GetResponse";
import Alert from "@material-ui/lab/Alert";

import "./index.css"

class Assigntask extends Component {
    constructor(props) {
        super(props)
    
    this.state = {
      alertmsg: "",
      alerttype: 'error',
      alert: 'none',
      open: false,
      selectedDate: new Date("2014-08-18T21:11:54"),
      allusers: [],
      allprojec: [
        { project: "office" },
        { project: "Home" },
        { project: "Collage" },
        { project: "Personal" },
      ],
    };
    }

    componentWillMount(){
      GetApiService.getResponse("getusers",
      reactLocalStorage.get('token')).then((resp)=>{
        this.setState({allusers:resp.data})
      });
    }
    handleChange = (event) => {
        this.setState({ age: event.target.value})
    };

    handleClose = () => {
        this.setState({open:false})
    };

    handleOpen = () => {
        this.setState({ open: true })
    };
    handleDateChange = (date) => {
      this.setState({ selectedDate: date})
    };
    handleSubmit = (event) => {
      event.preventDefault();
      const payload = {
        tasktitle: event.target.elements.tasktitle.value,
        assignto: event.target.elements.assignto.value,
        project: event.target.elements.project.value,
        describe: event.target.elements.describe.value,
      };
      PostApiService.postResponse('assign-task',
      reactLocalStorage.get('token'), payload ).then((resp)=>{ 
        if (resp.success){
          this.setState({ alerttype:'success',alertmsg: resp.message, alert: "block" });
        }
          this.setState({ alertmsg: resp.message, alert: "block" });
      });
    };
    render() {
        return (
          <Fragment>
            <Alert severity={this.state.alerttype} style={{ display: this.state.alert }}>
              {this.state.alertmsg}
            </Alert>
            <form onSubmit={this.handleSubmit}>
              <Card style={{ padding: "10px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={6}>
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={this.state.allprojec}
                      getOptionLabel={(option) => option.project}
                      defaultValue={this.state.allprojec[13]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          name="project"
                          placeholder="Project"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={this.state.allusers}
                      getOptionLabel={(option) => option.email}
                      defaultValue={this.state.allusers[13]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          name="assignto"
                          placeholder="Assign to"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="tasktitle"
                      placeholder="Task title .... "
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <textarea
                      className="describe"
                      size="small"
                      name="describe"
                      placeholder="Please describe task... "
                    />
                  </Grid>
                  <div
                    style={{
                      width: "100%",
                      height: "40px",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button variant="outlined">cancle</Button>
                    <Button variant="outlined" className="glbbtn" type="submit">
                      Create <NavigateNextIcon />
                    </Button>
                  </div>
                </Grid>
              </Card>
            </form>
          </Fragment>
        );
    }
}

export default Assigntask;
