import React from 'react'
import HomeHeader from './HomeHeader'


// Create the Search component
export default class TruckSearchMap extends React.Component {
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
        You are searching trucks...
  

        
      </div>
    );
 }
}








