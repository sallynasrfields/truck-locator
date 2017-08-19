// // Include the Main React Dependencies
import React from 'react';
// import { render } from 'react-dom'
var ReactDOM = require("react-dom");



// // Include the main Parent component
import Home from './components/Home';


// // This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Home/>, document.getElementById("app"));