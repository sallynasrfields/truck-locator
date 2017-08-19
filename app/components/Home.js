import React from 'react'


//Require HomeHeader component (child)
import Landing from './Landing';
import TruckSearchMap from './TruckSearchMap';

// Create the Search component
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      LandingPage:true,
      showSearchPage: false
    };
  }
    setParent(Landing,Truck) {
    this.setState({
      LandingPage: Landing,
      showSearchPage:Truck
    });
    }
  render(){
    return(  
      <div>  
         {this.state.LandingPage ? <Landing setParent={this.setParent.bind(this)}  /> : null}  
         {this.state.showSearchPage ? <TruckSearchMap/> : null}
         {this.state.showLogin ? <Login/> : null}
         {this.state.showTruckInfo ? <TruckInfo/> : null}
         {this.state.showAccount ? <Account/> : null}
         {this.state.showCalendar ? <Calendar/> : null}  
      </div>
    );
 }

}








