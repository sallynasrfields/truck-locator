// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Body = require("../components/Body");
var Calendar = require ("../components/Calendar")
var Header = require("../components/Header");
var Main= require("../components/Main");
var TruckMap = require("../components/TruckMap");

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* Route to Body components for each of the below search paths*/}
      <Route path = "login" component = {Bodies}/>
      <ROute path = "signup" component = {Body} />
      <Route path="truckinfo" component={Body} />
      <Route path="account" component = {Body}  />
      <Route path = "preview" component = {Body} />


      <Route path="calendar" component={Calendar} />
      <Route path = "map" component = {TruckMap}/>

      {/* I}



    </Route>
  </Router>
);
