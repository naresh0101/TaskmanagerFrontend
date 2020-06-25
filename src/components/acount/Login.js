import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, Redirect } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import PostApiService from "../../api/postResponse";
import Alert from "@material-ui/lab/Alert";
import "./index.css";



class Login extends Component {
  state = {
    token: null,
    errormsg: "login with your credentials",
    alerttype:'info'
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    PostApiService.acountResponse("login", payload).then((resp) => {
      console.log(resp.user);      
      if (resp.token) {        
        reactLocalStorage.set('token',resp.token)
        reactLocalStorage.set('user', JSON.stringify([resp.user]))
      }
      this.setState({ errormsg: resp.message, alerttype: "error" });
    });
  };
  render() {
    if (reactLocalStorage.get("token")) {
      return <Redirect to="/tasks" />;
    }else{
      return (
        <div className="account">
          <Box
            boxShadow={3}
            bgcolor="background.paper"
            m={1}
            p={1}
            style={{ width: "500px", height: "400px", padding: "20px" }}
          >
            <Typography>
              <span
                style={{
                  marginTop: "10px",
                  color: "#333232",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Login
            </span>
            </Typography>
            <Typography color="textSecondary">Welcome back!</Typography>
            <Alert severity={this.state.alerttype} style={{ display: this.state.alert, marginTop: "50px" }}>
              {this.state.errormsg}
            </Alert>
            <br />
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={1} item>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="email"
                    placeholder="email "
                    name="email"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <OutlinedInput
                    fullWidth
                    margin="dense"
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
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
                    type="submit"
                  >
                    Login
                </Button>
                </Grid>
                <Link to="/register">
                  <Typography style={{ marginLeft: "4px" }} color="textSecondary">
                    I don't have account...
                </Typography>
                </Link>
              </Grid>
            </form>
          </Box>
        </div>
      )
    }
    ;
  }
}

export default Login;
