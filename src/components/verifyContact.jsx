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
            window.location.href="/EmailVerify"
            // return
        }
    }
    const fetchData = async (e) => {
        e.preventDefault()
//   var cors = new EnableCorsAttribute("*", "*", "*");
//     config.EnableCors(cors);
// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
// headers.append('Access-Control-Allow-Credentials', 'true');
// let headers = new Headers();

//   headers.append('Content-Type', 'application/json');
//   headers.append('Accept', 'application/json');

//   headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
//   headers.append('Access-Control-Allow-Credentials', 'true');

//   headers.append('GET', 'POST', 'OPTIONS');

//   headers.append('Authorization', 'Basic ' + base64.encode("AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP:GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF"));


    //   var authOptions = {
    //     method: 'POST',
    //     url: 'https://ext.digio.in:444/v3/client/kyc/pan/verify',
    //     data: ({"pan_no" : "HOCPK1290F",
    //         "full_name" : "Shanawaz Umar khan",
    //           "date_of_birth" : "1998-08-27"}),
    //     headers: ({
    //         'Access-Control-Allow-Origin': '*',
    //       'Content-Type': 'application/json',
    //       'authorization': 'AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP:GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF',
    //       "authorization":  "Basic  Base64encodedValueOf(AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP:GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF)"
    //      }),
    //     json: true
    //    };
    // axios(authOptions)
    //    .then((response) => {
    //        console.log(response);
    //        })
    //    .catch((error) => {
    //     alert(error)
    //      })
  // Simple POST request with a JSON body using fetch

  var auth = 'Basic ' + Buffer.from("AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP" + ':' + "GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF").toString('base64');
  var dataToPost = ({
         "pan_no" : "HOCPK1290F",
        "full_name" : "Shanawaz Umar khan",
              "date_of_birth" : "1998-08-27"
       });

       let axiosConfiguration = {
         headers: {
             
        // "authorization" :"Basic  Base64encodedValueOf(AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP:GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF)",
        "authorization":auth,
        'content-Type': 'application/json',
   // "authorization":  "Basic  Base64encodedValueOf(AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP:GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF)"
  // "authorization":  'Basic ' + Base64encodedValueOf(AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP:GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF),
         }
       };

       axios.post('https://ext.digio.in:444/v3/client/kyc/pan/verify', dataToPost, axiosConfiguration)
       .then((res) => {
         console.log("Response: ", res);
       })
       .catch((err) => {
         console.log("error: ", err);
       })



//   var auth = 'Basic ' + Buffer.from("AIY3H1XS5APT2EMFE54UWZ56IQ8FPKFP" + ':' + "GO75FW2YAZ6KQM3F1ZSGQVUQCZPXD6OF").toString('base64');
//   const requestOptions = {
//     method: 'POST',
//     mode: 'cors',
//     headers: { 'Access-Control-Allow-Origin': '*','content-Type': 'application/json', 
//     "authorization":  auth
// },
//     body: JSON.stringify({ "pan_no" : "HOCPK1290F",
//          "full_name" : "Shanawaz Umar khan",
//                "date_of_birth" : "1998-08-27" })
// };
// fetch('https://ext.digio.in:444/v3/client/kyc/pan/verify', requestOptions)
//     .then(response => response.json())
//     .then(data => console.log(data));


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