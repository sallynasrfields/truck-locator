import React from 'react'
import { Link } from 'react-router'

//Require HomeHeader component (child)
var HomeHeader = require("./HomeHeader");
var Footer = require("./Footer");



// Create the Search component
var Home = React.createClass({
  
  // renderHomeHeader(header){
  //   this.setState({header});
  // },

  // renderFooter(footer){
  //   this.setState({footer});
  // },

  render: function(){
    return(  

      <div>  
        "Hello World"      
 
      </div>
    );
 }

});


module.exports=Home;






