import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Hpmepage/index";
import Detailseite from "./pages/Detailseite/index";

const App = () => (
  <Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route exact path="/Detailseite">
      <Detailseite />
    </Route>
  </Switch>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
