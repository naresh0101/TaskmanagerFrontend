import React, { Component } from 'react'
import { Card, TextField, Input, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import "./index.css"

class Assigntask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            age: '',
            open: false,
            selectedDate: new Date('2014-08-18T21:11:54'),
            top100Films:[
                { title: 'The Shawshank Redemption', year: 1994 },
                { title: 'The Godfather', year: 1972 },
                { title: 'The Godfather: Part II', year: 1974 },
                { title: 'The Dark Knight', year: 2008 },
                { title: '12 Angry Men', year: 1957 },
                { title: "Schindler's List", year: 1993 },
                { title: 'Pulp Fiction', year: 1994 },
                { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
                { title: 'The Good, the Bad and the Ugly', year: 1966 },]

        }
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
    render() {
        return (
          <FormControl>
            <Card style={{ padding: "10px" }}>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                  <Autocomplete
                    fullWidth
                    id="size-small-outlined"
                    size="small"
                    options={this.state.top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={this.state.top100Films[13]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Project"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Autocomplete
                    fullWidth
                    id="size-small-outlined"
                    size="small"
                    options={this.state.top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={this.state.top100Films[13]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Assign to"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    focusVisible
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Task Title"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <textarea
                    className="describe"
                    size="small"
                    fullWidth
                    placeholder="Please describe task... "
                    spellcheck="true"
                  />
                </Grid>
                <div
                  justifyContent="flex-end"
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button variant="outlined">cancle</Button>
                  <Button variant="outlined" className="glbbtn">
                    Create <NavigateNextIcon />
                  </Button>
                </div>
              </Grid>
            </Card>
          </FormControl>
        );
    }
}

export default Assigntask;
