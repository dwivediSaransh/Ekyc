import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VerifyContact from "./components/verifyContact";
import PanEmailVerify from "./components/PanEmailVerify";
import VerifyPin from "./components/verifyPin";
import SignUp from "./components/signupComponent";
import AllowAccess from "./components/allowAccess";
import EmailTemplate from "./components/EmailTemplate";
import PanOrc from "./components/panOrc";
import ProtectedPages from "./components/ProtectedPage/ProtectedPages";
import ConfirmPage from "./components/confirmPage/ConfirmPage";
import Razor from "./components/RazorPay/Razor";
import DigiLock from "./components/DigiLock/DigiLock";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import DashBoard from "./components/DashBoard/DashBoard";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {localStorage.getItem("user-token") === null && (
            <Route exact path="/verifyContact" component={VerifyContact} />
          )}
          <Route path="/" component={DashBoard} />
          <Route path="/verifyPin" component={VerifyPin} />
          <Route path="/AllowAccess" component={AllowAccess} />
          <Route path="/ConfirmPage" component={ConfirmPage} />
          <Route path="/PanEmailVerify" component={PanEmailVerify} />
          <Route path="/EmailTemplate" component={EmailTemplate} />
          <Route path="/RazorPay" component={Razor} />
          <Route path="/DigiLock" component={DigiLock} />
          <Route path="/PersonalInfo" component={PersonalInfo} />
          <Route path="/DashBoard" component={DashBoard} />
          <ProtectedPages path="/PanOrc" Cmp={PanOrc} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
