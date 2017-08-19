import React from 'react'
import HomeHeader from './HomeHeader'

// Create the Search component
export default class Login extends React.Component {
    setChild(showLand,showSearch,showLogin){
        var showLand = showLand;
        var showSearch = showSearch; 
        var showLogin = showLogin;
        this.props.setParent(showLand,showSearch, showLogin);
    }
  render(){
    return(  
      <div>  
        <HomeHeader setChild={this.setChild.bind(this)}/>
        <div> 
            This is Login
        </div>
        
      </div>
    );
 }
}








