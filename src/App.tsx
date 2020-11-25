import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.styles.scss";

import LoginPage from "./pages/login/login.component";
import appLogo from "./assets/appLogo.png";

function App() {
  return (
    <div>
      <div className={"logoContainer"}>
        <img src={appLogo} alt={"appLogo"} />
      </div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
