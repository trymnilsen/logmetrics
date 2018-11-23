const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.hello = functions.https.onRequest((request, response) => {
    console.log("Hi function called");
    response.send("Hi");
});

exports.number = functions.https.onRequest((request, response) => {
    const number = request.query["number"];
    if(!!number) {
        console.log(`User selected number ${number}`);
        response.send(`You selected: ${number}`);
    } else {
        console.log("User gave no number");
        response.send("You gave no number");
    }
});
