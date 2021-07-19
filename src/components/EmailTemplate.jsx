import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import * as EmailValidator from 'email-validator';
// import $ from "jquery"
// import "./verifyContact.css"

function EmailTemplate() {
    const [email, setEmail] = useState('');



    const getSubmit =(e)=>{
        e.preventDefault()
        EmailValidator.validate("test@email.com");
    }
    return (
        <>
      <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Verify Email</h3>
                <div className="form-group">
                    {/* <label>Enter Contact</label> */}
                    <TextField type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"  label="Enter Email" />
                    {/* <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" placeholder="Enter Contact" /> */}
                </div>
             
            <div className="btn-class-submit">
                {/* <button type="submit" onClick={getContact} className="btn btn-primary btn-block btn-otp">GET OTP</button> */}
                <button type="submit" onClick={getSubmit} className="btn btn-primary btn-block btn-submit">Submit</button>
                </div>
                {/* <p className="forgot-password text-right">
                    Wrong <Link >Number?</Link>
                </p> */}
            </form>

        </div>
        </div>
        </>
    )
}
export default EmailTemplate