// // Inclue the React library
// var React = require("react");



// // Include the browserHistory prop to configure client side routing
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory


// // // Reference the high-level components
// // var Account = require ("../components/Account");
// // var Calendar = require ("../components/Calendar");
// // var Home= require("../components/Home");
// // var Login= require("../components/Login");
// // var TruckInfo = require("../components/TruckInfo");
// // var TruckSearchMap = require("../components/TruckSearchMap");

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

// Component imports
import Home from './Home'
import Login from './Login'
import TruckSearchMap from './TruckSearchMap'


render((
  // High level component is the Router component.
  <Router history={hashHistory}>
    <div>  
      {/* Route to Body components for each of the below search paths*/}
      {/*<Route path="/account" component = {Account}  />
      <Route path="/calendar" component={Calendar} />*/}
      <Route path="/" component={Home} />
      <Route path = "/login" component = {Login} />
      {/*<Route path="/truckinfo" component={TruckInfo} />*/}
      <Route path = "/trucksearchmap" component = {TruckSearchMap}/>
    </div>
  </Router>
), document.getElementById('app'))
