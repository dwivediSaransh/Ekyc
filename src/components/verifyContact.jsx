import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import $ from "jquery";
import "./verifyContact.css";
import axios from "axios";
import SERVER_ID from "../configure";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";
import { conVal, namVal } from "../Helper/Helper";

function VerifyContact() {
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [generateOtp, setgenerateOtp] = useState("");
  const [otpTime, setotpTime] = useState("");
  const [Token, setToken] = useState("");
  const [apiURL, setApiURL] = useState("/api/Notify/smsAPI");
  const [apiURLJwt, setApiURLJwt] = useState("/api/Notify/JWTWebToken");
  const [apiURLverify, setApiURLverify] = useState("/api/Notify/VerifyNumber");
  const [Status, setStatus] = useState("true");
  const [userToken, setUserToken] = useLocalStorage("user-token", "");
  const [errorMsg, seterrorMsg] = useState({
    errorOBJ: {
      errorOTP: "",
    },
  });
  // useEffect(() => {
  //   if (contact.length === 10) {
  //     const val = Math.floor(1000 + Math.random() * 9000).toString();
  //     setgenerateOtp(val);
  //     console.log(val);
  //   }
  // }, [contact]);
  // useEffect for OTP comparision
  useEffect(() => {
    if (otp.length === 4) {
      if (otp === generateOtp) {
        getSubmit();
      } else {
        seterrorMsg((prevState) => ({
          ...prevState,
          errorOBJ: {
            ...prevState.errorOBJ,
            errorOTP: "WRONG OTP!",
          },
        }));
      }
    }
    if (otp.length <= 3) {
      seterrorMsg((prevState) => ({
        ...prevState,
        errorOBJ: {
          ...prevState.errorOBJ,
          errorOTP: "",
        },
      }));
    }
  }, [otp]);

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

  const handleChange = (e) => {
    e.preventDefault();
    conVal();
    setContact(e.target.value);
  };
  const handleNameChange = (e) => {
    namVal();
    let cData = e.target.value.toUpperCase();
    setName(cData);
  };
  const smsVerify = async (e) => {
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
        smsContact: contact,
        OTP: generateOtp,
      };
      await axios
        .post(SERVER_ID + apiURL, smsDetail)
        .then((data) => {
          console.log(data);
          {
            data.data.jsonotpBKC && setgenerateOtp(data.data.jsonotpBKC);
          }
        })
        .catch((err) => {
          console.error(err);
        });
      await axios
        .post(SERVER_ID + apiURLJwt, smsDetail)
        .then((data) => {
          setToken(data);
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const getSubmit = async (e) => {
    // e.preventDefault();
    const verifyDetail = {
      smsContact: contact,
      flag: Status,
    };
    await axios
      .post(SERVER_ID + apiURLverify, verifyDetail)
      .then((data) => {
        setToken(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });

    setUserToken(Token.data);
    window.location.href = "/EmailTemplate";
  };

  return (
    <div>
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
                onChange={handleNameChange}
                className="form-control"
                label="Enter Name"
              />
              {/* <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
            </div>
            <div className="form-group">
              {/* <label>Enter Contact</label> */}
              <TextField
                type="number"
                id="fieldSelectorNo"
                pattern="[1-9]{1}[0-9]{9}"
                value={contact}
                onChange={handleChange}
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
            {errorMsg.errorOBJ.errorOTP && (
              <p className="text-error">{errorMsg.errorOBJ.errorOTP}</p>
            )}
            <div className="form-group otp-time">
              <p id="countdown" style={{ textAlign: "center" }}>
                Resend Link in {otpTime} sec.
              </p>
              <p
                id="resend"
                style={{ textAlign: "center" }}
                onClick={smsVerify}
              >
                Resend via <Link to=""> sms.</Link>
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
              {/* <button
                type="submit"
                onClick={getSubmit}
                className="btn btn-primary btn-block btn-submit"
              >
                Submit
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default VerifyContact;
