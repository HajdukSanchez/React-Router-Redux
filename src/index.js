import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App"; /* We add our routes file */

import { Provider } from "react-redux";
import { createStore } from "redux";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
