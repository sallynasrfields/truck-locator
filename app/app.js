// // Include the Main React Dependencies
import React from 'react';
// import { render } from 'react-dom'
var ReactDOM = require("react-dom");

// import { Router, Route, Link } from 'react-router'


// // Grabs the Routes
// var routes = require("./config/routes.js");

// // Include the main Parent component
// var Home = require("./components/Home");
import Routes from './components/seth-routes'

// // This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Routes />, document.getElementById("app"));