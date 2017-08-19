import React from 'react'


//Require HomeHeader component (child)
import Landing from './Landing';
import TruckSearchMap from './TruckSearchMap';
import Login from './Login';
import Footer from './Footer';

// Create the Search component
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      LandingPage:true,
      showSearchPage: false,
      showLogin:false
    };
  }
    setParent(Landing,Truck,Login) {
    this.setState({
      LandingPage: Landing,
      showSearchPage:Truck,
      showLogin:Login
    });
    }
  render(){
    return(  
      <div>  
         {this.state.LandingPage ? <Landing setParent={this.setParent.bind(this)}  /> : null}  
         {this.state.showSearchPage ? <TruckSearchMap setParent={this.setParent.bind(this)}/> : null}
         {this.state.showLogin ? <Login setParent={this.setParent.bind(this)}/> : null}
         {this.state.showTruckInfo ? <TruckInfo/> : null}
         {this.state.showAccount ? <Account/> : null}
         {this.state.showCalendar ? <Calendar/> : null}  
         <Footer/>
      </div>
    );
 }

}








