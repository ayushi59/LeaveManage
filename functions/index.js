const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 let email = request.body.email
 let password = request.body.password
 console.log("User logged in. Email: " + email +" password: "+ password)
 response.send("Success!");
});