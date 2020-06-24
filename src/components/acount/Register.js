import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import "./index.css";


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date("2014-08-18T21:11:54"),
      usertype: [
        { type: "Team" },
        { type: "Employee" },
        { type: "SDE" },
        { type: "Normal" },
      ],
    };
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  render() {
    return (
      <div className="account">
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: "500px", height: "500px" }}
        >
          <Alert severity="error">This is an error alert — check it out!</Alert>

          <Typography>
            <span
              style={{
                marginTop: "10px",
                color: "#333232",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Sign up
            </span>
          </Typography>
          <Typography color="textSecondary">
            Welcome to task manager!
          </Typography>
          <br />
          <br />
          <br />
          <br />

          <FormControl>
            <Grid container spacing={1} sm={12}>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="Full name "
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Autocomplete
                  fullWidth
                  id="size-small-outlined"
                  size="small"
                  options={this.state.usertype}
                  getOptionLabel={(option) => option.type}
                  defaultValue={this.state.usertype[13]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Type"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="email"
                  placeholder="email "
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <OutlinedInput
                  fullWidth
                  margin="dense"
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Password"
                  endAdornment={
                    <InputAdornment>
                      <IconButton onClick={this.handleClickShowPassword}>
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  fullWidth
                  className="account-btn"
                >
                  Register
                </Button>
              </Grid>
              <Link to="/login">
                <Typography style={{ marginLeft: "4px" }} color="textSecondary">
                  I have account...
                </Typography>
              </Link>
            </Grid>
          </FormControl>
        </Box>
      </div>
    );
  }
}

export default Register;
