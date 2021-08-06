import React, { useState } from "react";
import "./PersonalInfo.css";
import TextField from "@material-ui/core/TextField";

const PersonalInfo = () => {
  const [inputs, setInputs] = useState({
    mstatus: "",
    income: "",
    political: "",
    motherName: "",
    fatherName: "",
  });

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // console.log(state);
  };
  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form style={{ textAlign: "center" }}>
            <h3> Personal Details</h3>
            <select class="select">
              <option
                name="mstatus"
                value={inputs.mstatus}
                onChange={(e) => handleInputChange}
                selected
                disabled
              >
                Marital status
              </option>
              <option value="1">Single</option>
              <option value="2">Married</option>
              <option value="3">Divorced</option>
            </select>
            <br />
            <br />
            <select class="select">
              <option name="income" value={inputs.income} selected disabled>
                Income
              </option>
              <option value="1">Below 500000</option>
              <option value="2">Above 500000</option>
              {/* <option value="3">Item 3</option> */}
            </select>
            <br />
            <br />
            <select class="select">
              <option
                // value=""
                selected
                disabled
              >
                Is Political Exposed
              </option>
              <option value="Yes">Yes</option>
              <option value="2">No</option>
              {/* <option value="3">Item 3</option> */}
            </select>
            <br />
            <TextField
              value={inputs.fatherName}
              name="fatherName"
              onChange={handleInputChange}
              id="standard-basic"
              label="Father Full Name"
            />
            <br />
            <TextField
              value={inputs.motherName}
              name="motherName"
              onChange={handleInputChange}
              id="standard-basic"
              label="Mother Full Name"
            />
            <br />
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
