// import axios from 'axios';
function panVerify(e) {
    e.preventDefault()
    console.log("success")
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

        fetch('https://ext.digio.in:444/v3/client/kyc/pan/verify', dataToPost, axiosConfiguration)
        .then((res) => {
          console.log("Response: ", res);
        })
        .catch((err) => {
          console.log("error: ", err);
        })
}

export default panVerify