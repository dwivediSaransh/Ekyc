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
import VideoRecord from "./components/VideoRecord/VideoRecord";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* {localStorage.getItem("user-token") === null && (
            <Route exact path="/verifyContact" component={VerifyContact} />
          )} */}
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/verifyPin" component={VerifyPin} />
          <Route exact path="/AllowAccess" component={AllowAccess} />
          <Route path="/ConfirmPage" component={ConfirmPage} />
          <Route exact path="/PanEmailVerify" component={PanEmailVerify} />
          <Route exact path="/EmailTemplate" component={EmailTemplate} />
          <Route exact path="/RazorPay" component={Razor} />
          <Route exact path="/DigiLock" component={DigiLock} />
          <Route exact path="/PersonalInfo" component={PersonalInfo} />
          <Route exact path="/DashBoard" component={DashBoard} />
          <Route exact path="/VideoRecord" component={VideoRecord} />
          <Route exact path="/VerifyContact" component={VerifyContact} />
          <ProtectedPages path="/PanOrc" Cmp={PanOrc} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
