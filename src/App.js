import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import VerifyContact from "./components/verifyContact";
import PanEmailVerify   from "./components/PanEmailVerify";
import VerifyPin from "./components/verifyPin";
import SignUp from "./components/signupComponent";
import AllowAccess from "./components/allowAccess";
import EmailTemplate from "./components/EmailTemplate"
function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href={"/"}>E-KYC</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

          <Switch>
            <Route exact path='/' component={VerifyContact} />
            <Route path="/verifyContact" component={VerifyContact} />
            <Route path="/verifyPin" component={VerifyPin} />
            <Route path="/AllowAccess" component={AllowAccess} />
            <Route path="/PanEmailVerify" component={PanEmailVerify} />
            <Route path="/EmailTemplate" component={EmailTemplate} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
