import React from 'react'

// Create the Search component
export default class Landing extends React.Component {
    offToTrucks(){
        var showLand = false;
        var showSearch = true; 
 this.props.setParent(showLand,showSearch);
    }

  render(){
    return(  
      <div>  
        ... you are Landing  
         <button className="btn btn-primary btn-lg" onClick={this.offToTrucks.bind(this)}>Search for Trucks</button>    
      </div>
    );
 }

}








