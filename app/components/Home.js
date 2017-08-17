import React from 'react'
import { Link } from 'react-router'

//Require HomeHeader component (child)
var HomeHeader = require("./HomeHeader");
var Footer = require("./Footer");



// Create the Search component
var Home = React.createClass({
  
  renderHomeHeader(header){
    this.setState({header});
  },

  renderFooter(footer){
    this.setState({footer});
  },

  render: function(){
    return(  
      <div>        
      <HomeHeader renderHomeHeader={this.renderHomeHeader.bind(this)} header={this.state.header}/> 
      <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-right">
            {/* Using <Link> in place of <a> and "to" in place of "href" */}
            <li><Link to="/trucksearchmap">Find Trucks</Link></li>
          </ul>

      </div>
      <Footer renderFooter={this.renderFooter.bind(this)} footer={this.state.footer}/> 
      </div>
    );
 }

});


module.exports=Home;






