import React from 'react'


// Create the Search component
export default class HomeHeader extends React.Component {
     handleLoginClick(){
        var showLand = false;
        var showLogin = true;
        var showSearch = false; 
        this.props.setChild(showLand,showSearch,showLogin);
    }

        handleTruckClick(){
        var showLand = false;
        var showLogin = false;
        var showSearch = true;         
        this.props.setChild(showLand,showSearch,showLogin);    
    }
        handleHomeClick(){
        var showLand = true;
        var showLogin = false;
        var showSearch = false;         
        this.props.setChild(showLand,showSearch,showLogin);    
    }
   

  render(){
    return(  
   <div>  
          
            Home Header  
          <button className="btn btn-primary btn-lg" onClick={this.handleLoginClick.bind(this)}>Login</button>
         <button className="btn btn-primary btn-lg" onClick={this.handleTruckClick.bind(this)}>Search</button>
          <button className="btn btn-primary btn-lg" onClick={this.handleHomeClick.bind(this)}>Home</button>        
      </div>

     
    );
 }
}