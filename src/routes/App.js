import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import Player from "../containers/Player";
import Layout from "../components/Layout";

const App = () => (
  // This is the parent component that allow us to manage our routes
  <Router>
    {/* This layout is because we want to have the same footer and header in our routes */}
    <Layout>
      {/* With the SWITCH, REACT render the first coincidence */}
      <Switch>
        {/* This are the routes */}
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={Player} />
        {/* This is like the Default component, when the user type an incorrect path */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
