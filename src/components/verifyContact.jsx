import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import $ from "jquery"
import "./verifyContact.css"
import axios from "axios"
function VerifyContact() {
    const [contact, setContact] = useState('');
    const [otp, setOtp] = useState('');
    const [name, setName] = useState('');
 
   useEffect(() => {
    // loadDataOnlyOnce();
       $(".div-otp").hide()
       $(".btn-submit").hide()
       setContact('')
       setOtp('')
   },[])


    const getContact =(e)=>{
        e.preventDefault()
        if(contact!=="" && name!=="" ){
            $(".div-otp").show()
            $(".btn-otp").hide()
            $(".btn-submit").show()
            // return
        }
    }
    
    const getSubmit =(e)=>{
        e.preventDefault()
        if(contact!=="" && otp!=="" && name!==""){
            window.location.href="/EmailTemplate"
            // return
        }
    }
  

    return (
        <>
      <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Verify Contact</h3>
                <div className="form-group">
                    {/* <label>Enter Contact</label> */}
                    <TextField value={name} onChange={(e)=>setName(e.target.value)} className="form-control"  label="Enter Name" />
                    {/* <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
                </div>
                <div className="form-group">
                    {/* <label>Enter Contact</label> */}
                    <TextField value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control"  label="Enter Contact" />
                    {/* <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
                </div>

                <div className="form-group div-otp">
                    {/* <label>OTP</label> */}
                    <TextField value={otp} onChange={(e)=>setOtp(e.target.value)} className="form-control"  label="Enter OTP" />
                    {/* <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} className="form-control" placeholder="Enter password" /> */}
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
<div className="btn-class-submit">
                <button type="submit" onClick={getContact} className="btn btn-primary btn-block btn-otp">GET OTP</button>
                <button type="submit" onClick={getSubmit} className="btn btn-primary btn-block btn-submit">Submit</button>
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
export default VerifyContact