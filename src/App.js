import React from 'react';
import './App.css';
import Panal from "./components/layout/dasebord/Dasebord";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error_404 from "./components/404/Error_404";
import Login from "./components/acount/Login";
import Register from "./components/acount/Register";





function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Panal} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/searchexperts" component={Searchresults} /> */}
          {/* <Route exact path="/export/profile" component={Profile} /> */}
          <Route component={Error_404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
