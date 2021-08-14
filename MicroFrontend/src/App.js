import React from "react";
import ReactDOM from "react-dom";
import KomendeVeranstalltungen from "./pages/KomendeVeranstaltungen";

const App = () => (
  <div>
    <KomendeVeranstalltungen />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
