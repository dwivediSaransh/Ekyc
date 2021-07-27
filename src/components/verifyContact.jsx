import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import $ from "jquery";
import "./verifyContact.css";
import axios from "axios";
function VerifyContact() {
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [generateOtp, setgenerateOtp] = useState("");
  const [otpTime, setotpTime] = useState("");
  const [Token, setToken] = useState("");
  useEffect(() => {
    $(".btn-submit").hide();
    $("#resend").hide();
    $("#countdown").hide();
    setContact("");
    setOtp("");
  }, []);
  useEffect(() => {
    if (otpTime === 0) {
      $("#resend").show();
      $("#countdown").hide();
    } else {
      $("#resend").hide();
    }
  }, [otpTime]);

  const smsVerify = async (e) => {
    var val = Math.floor(1000 + Math.random() * 9000);
    setgenerateOtp(val);

    e.preventDefault();
    if (contact.length == 10 && name !== "") {
      $(".btn-otp").hide();
      $(".btn-submit").show();
      $("#countdown").show();
      $("#resend").hide();
      // for timer
      var i = 60;
      (function timer() {
        if (--i < 0) return;
        setTimeout(function () {
          setotpTime(i);
          timer();
        }, 100);
      })();
      // end timer
      const smsDetail = {
        smsData: contact,
        genOtp: val,
      };
      await axios
        .post("http://localhost:3001/sms", smsDetail)
        .then((data) => {
          setToken(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const getSubmit = (e) => {
    e.preventDefault();
    if (otp == generateOtp) {
      localStorage.setItem("user-token", Token.data);
      window.location.href = "/EmailTemplate";
    } else {
      alert("wrong OTP");
    }
  };

  // validate number

  $("#fieldSelectorId").keypress(function (e) {
    var length = $(this).val().length;
    if (length > 9) {
      return false;
    } else if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    } else if (length == 0 && e.which == 48) {
      return false;
    }
  });

  $("#fieldSelectorname").keypress(function (e) {
    var length = $(this).val().length;
    if (length > 25) {
      return false;
    }
  });

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Verify Contact</h3>
            <div className="form-group">
              {/* <label>Enter Contact</label> */}
              <TextField
                type="text"
                value={name}
                id="fieldSelectorname"
                onChange={(e) => {
                  let cData = e.target.value.toUpperCase();
                  setName(cData);
                }}
                className="form-control"
                label="Enter Name"
              />
              {/* <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
            </div>
            <div className="form-group">
              {/* <label>Enter Contact</label> */}
              <TextField
                type="number"
                id="fieldSelectorId"
                pattern="[1-9]{1}[0-9]{9}"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="form-control"
                label="Enter Contact"
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

            <div className="form-group otp-time">
              <p id="countdown" style={{ textAlign: "center" }}>
                Resend Link in {otpTime} sec.
              </p>
              <p
                id="resend"
                style={{ textAlign: "center" }}
                onClick={smsVerify}
              >
                Resend via <Link> sms.</Link>
              </p>
              {/* <p id="counter" style={{textAlign: "center"}}></p> */}
            </div>
            <div className="btn-class-submit">
              <button
                type="submit"
                onClick={smsVerify}
                className="btn btn-primary btn-block btn-otp"
              >
                GET OTP
              </button>
              <button
                type="submit"
                onClick={getSubmit}
                className="btn btn-primary btn-block btn-submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default VerifyContact;
