import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
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
import "./index.css";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

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
          style={{ width: "400px", height: "500px" }}
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <FormControl>
            <Grid container spacing={1} sm={12}>
              <Grid item xs={6} sm={12}>
                <TextField
                  focusVisible
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
              <Grid item xs={6} sm={12}>
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  fullWidth
                  className="account-btn"
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
          </FormControl>
        </Box>
      </div>
    );
  }
}

export default Login;
