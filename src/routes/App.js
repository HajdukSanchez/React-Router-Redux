import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../containers/Home";

const App = () => (
  // This is the parent component that allow us to manage our routes
  <Router>
    {/* This are the routes */}
    <Route exact path='/' component={Home} />
  </Router>
);

export default App;
