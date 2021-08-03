import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import emailjs from "emailjs-com";
import $ from "jquery";
import * as EmailValidator from "email-validator";
import axios from "axios";
import SERVER_ID from "../configure";
// import $ from "jquery"
// import "./verifyContact.css"

function EmailTemplate() {
  const [email, setEmail] = useState("");
  const [genOtp, setgenOtp] = useState("");
  const [otp, setOtp] = useState("");
  const [apiURL, setApiURL] = useState("/api/Notify/EmailAPITest");
  useEffect(() => {
    $(".btn-verify").hide();
  }, []);
  const getSubmit = async (e) => {
    e.preventDefault();
    var val = Math.floor(1000 + Math.random() * 9000);
    if (EmailValidator.validate(email)) {
      alert("Valid Email");
      $(".btn-verify").show();
      $(".btn-submit").hide();
      setgenOtp(val);

      // email send fun
      const smsDetail = {
        emailSend: email,
        emailOtp: val,
        user_token: localStorage.getItem("user-token"),
      };
      await axios
        .post(SERVER_ID + apiURL, smsDetail)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("Invalid Email");
      setEmail("");
    }
  };
  const getVerify = async (e) => {
    e.preventDefault();
    if (otp == genOtp) {
      window.location.href = "/PanEmailVerify";
    } else {
      alert("please enter proper OTP");
      return;
    }
  };
  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Verify Email</h3>
            <div className="form-group">
              {/* <label>Enter Contact</label> */}
              <TextField
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                label="Enter Email"
              />
              {/* <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
            </div>
            <div className="form-group div-otp">
              {/* <label>OTP</label> */}
              <TextField
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control"
                label="Enter OTP"
              />
              {/* <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} className="form-control" placeholder="Enter password" /> */}
            </div>

            <div className="btn-class-submit">
              {/* <button type="submit" onClick={getContact} className="btn btn-primary btn-block btn-otp">GET OTP</button> */}
              <button
                type="submit"
                onClick={getSubmit}
                className="btn btn-primary btn-block btn-submit"
              >
                Verify Email
              </button>
              <button
                type="submit"
                onClick={getVerify}
                className="btn btn-primary btn-block btn-verify"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EmailTemplate;
