import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";

const App = () => (
  // This is the parent component that allow us to manage our routes
  <Router>
    {/* With the SWITCH, REACT render the first coincidence */}
    <Switch>
      {/* This are the routes */}
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </Router>
);

export default App;
