import React from 'react';
import './App.css';
import Alltask from "./components/layout/dasebord/Alltask";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error_404 from "./components/404/Error_404";
import Login from "./components/acount/Login";
import Register from "./components/acount/Register";
import Assigntask from './components/layout/dasebord/AssignTask';






function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Alltask} />
          <Route exact path="/tasks" component={Alltask} />
          <Route exact path="/assign-task" component={Assigntask} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={Error_404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
