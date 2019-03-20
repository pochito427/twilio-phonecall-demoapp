// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


//print environment variables only for testing purposes
/*console.log(accountSid);
console.log(authToken);
console.log(process.env.TWILIO_TRIAL_PHONE_NUMBER);
console.log(process.env.MY_PHONE_NUMBER);*/

const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: process.env.MY_PHONE_NUMBER,
         from: process.env.TWILIO_TRIAL_PHONE_NUMBER
       })
      .then(call => console.log(call.sid));

