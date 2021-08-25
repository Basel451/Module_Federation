import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Hpmepage/index";
import Detailseite from "./pages/Detailseite/index";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/detailseite/:id" component={Detailseite} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
