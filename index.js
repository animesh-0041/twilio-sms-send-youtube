const express= require("express")
const app=express()


const accountSid = 'accountSid';
const authToken = 'authToken';

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hello world 1234',
    to: '+919874561230', // Text your number
    from: '+12562861804', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));







app.listen(8080,()=>{
    console.log("server runing at 8080");
})