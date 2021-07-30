import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import FileBase64 from "react-file-base64";
import SERVER_ID from "../configure";
function PanOrc() {
  const [panImg, setpanImg] = useState("");
  const [backendData, setbackendData] = useState("");
  const getFiles = (files) => {
    setpanImg(files.base64);
    // console.log(files.base64)
  };
  const getSubmit = (e) => {
    e.preventDefault();
    //  console.log(panImg)
    const panImgdata = {
      front_part: panImg,
    };
    axios
      .post(SERVER_ID + "/panocr", panImgdata)
      .then((data) => {
        data && setbackendData(JSON.parse(data.data.body));
        console.log(data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  // useEffect(() => {
  //   const obj = JSON.parse();
  //   setdisplay(obj);
  // }, [backendData]);

  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>PAN OCR</h3>
            <div className="form-group">
              {/* <label>Enter Contact</label> */}
              <FileBase64
                type="file"
                value={panImg}
                onDone={getFiles}
                label="Enter Email"
              />
              {/* <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
            </div>
            <div className="btn-class-submit">
              {/* <button type="submit" onClick={getContact} className="btn btn-primary btn-block btn-otp">GET OTP</button> */}{" "}
              <button
                type="submit"
                onClick={getSubmit}
                className="btn btn-primary btn-block btn-submit"
              >
                Submit
              </button>
            </div>
            <br />
            {backendData ? (
              <div>
                <img
                  // width="200" height="200"
                  src={`data:image/png;base64,${backendData.encoded_image}`}
                />
                <br />
                <br />
                <img
                  width="200"
                  //  height="200"
                  src={`data:image/png;base64,${backendData.encoded_signature}`}
                />
              </div>
            ) : (
              ""
            )}

            {/* {backendData.encoded_image} */}
          </form>
        </div>
      </div>
    </div>
  );
}
export default PanOrc;
