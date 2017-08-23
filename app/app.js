// // Include the Main React Dependencies
import React from 'react';
// import { render } from 'react-dom'
var ReactDOM = require("react-dom");
import firebase from 'firebase';

import registerServiceWorker from './registerServiceWorker';



// // Include the main Parent component
import Home from './components/Home';

//Integration to firebase with key and domain in initialize
firebase.initializeApp({
    apiKey: "AIzaSyCO8oh6N0P6pTjDoe1gt9Eq-xOjVJA1KSw",
    authDomain: "food-truck-locator-31fa2.firebaseapp.com",
    databaseURL: "https://food-truck-locator-31fa2.firebaseio.com",
    storageBucket: "food-truck-locator-31fa2.appspot.com",
});

// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};


// // This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Home/>, document.getElementById("app"));

registerServiceWorker();