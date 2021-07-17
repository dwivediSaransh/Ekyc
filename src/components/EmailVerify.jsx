import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import $ from "jquery"
import axios from 'axios';
import panVerify from "./index"
// import "./verifyContact.css"

function EmailVerify() {
    const [email, setEmail] = useState('');
    const [pan, setPan] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [otp, setOtp] = useState('');
    const [sname, setSname] = useState('');
 const [details, setdetails] = useState('')
   useEffect(() => {
    // loadDataOnlyOnce();
       $(".div-otp").hide()
       $(".btn-submit").hide()
       setEmail('')
       setOtp('')
   },[])

const getVerify =async (e)=>{
    e.preventDefault()
    // const datatodeliver = await fetch('/panverify')
    // panVerify()
   fetch("http://localhost:9000/apicall")
   .then(res=>res.text())
   .then(res=>console.log(res))
}
    const getContact =(e)=>{
        e.preventDefault()
        if(email!=="" ){
            $(".div-otp").show()
            $(".btn-otp").hide()
            $(".btn-submit").show()
            // return
        }
    }

    const getSubmit =(e)=>{
        e.preventDefault()
        if(email!=="" && otp!==""){
            window.location.href="/verifyPin"
            // return
        }
    }
  
    const fetchData = async (e) => {
        e.preventDefault()
  

      var authOptions = {
        method: 'post',
        url: 'https://ext.digio.in:444/v3/client/kyc/pan/verify',
        data: JSON.stringify({"pan_no" : "HOCKP1290F",
            "full_name" : "Shanawaz Umar khan",
              "date_of_birth" : "1998-08-27"}),
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP:GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF'
         },
        json: true
       };
    axios(authOptions)
       .then((response) => {
           console.log(response);
           })
       .catch((error) => {
          alert(error)
         })

        // try {
        //     e.preventDefault()
        //     const response = await fetch('https://ext.digio.in:444/v3/client/kyc/pan/verify',  {
        //      method: 'POST',
        //      headers: {'authorization': 'AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP:GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF'},
        //      body: JSON.stringify({ "pan_no" : "HOCKP1290F",
        //      "full_name" : "Shanawaz Umar khan",
        //      "date_of_birth" : "1998-08-27" })
         
        //      });
        //      const data = await response.json();
        //      console.log(data);
        //    } catch(error) {
        //       console.log(error)
        //      } 
        }

    return (
        <>
      <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Verify Pan</h3>
             
                <div className="form-group">
                    {/* <label>Enter Contact</label> */}
                    <TextField type="text" value={pan} onChange={(e)=>setPan(e.target.value)} className="form-control"  label="Enter PAN NO" />
                    {/* <input type="text" value={contact} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
                </div>
                <div className="form-group">
                    {/* <label>Enter Contact</label> */}
                    <TextField type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"  label="Enter NAME" />
                    {/* <input type="text" value={contact} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
                </div>
                <div className="form-group">
                    {/* <label>Enter Contact</label> */}
                    <TextField type="text" value={dob} onChange={(e)=>setDob(e.target.value)} className="form-control"  label="Enter DOB" />
                    {/* <input type="text" value={contact} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
                </div>

                <div className="form-group div-otp">
                    {/* <label>OTP</label> */}
                    <TextField value={otp} onChange={(e)=>setOtp(e.target.value)} className="form-control"  label="Enter OTP" />
                    {/* <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} className="form-control" placeholder="Enter password" /> */}
                </div>

              
<div className="btn-class-submit">
                <button type="submit" onClick={getVerify} className="btn btn-primary btn-block btn-otp">GET Verify</button>
                {/* <button type="submit" onClick={getSubmit} className="btn btn-primary btn-block btn-submit">Submit</button> */}
                {/* <a href="https://services.digitallocker.gov.in/savelocker/api/1/savelocker.js" type="submit" className="btn btn-primary btn-block">Connect to Digilocker</a> */}
                {/* <button type="submit" onClick={fetchData} className="btn btn-primary btn-block">Fetch API</button> */}
                </div>
                <p className="forgot-password text-right">
                    Wrong <Link >Number?</Link>
                </p>
            </form>

        </div>
        </div>
        </>
    )
}
export default EmailVerify