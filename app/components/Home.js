import React from 'react'


//Require HomeHeader component (child)
import Account from './Account';
import Calendar from './Calendar';
import Footer from './Footer';
import Landing from './Landing';
import Login from './Login';
import TruckInfo from './TruckInfo'
import TruckSearchMap from './TruckSearchMap';



// Create the Search component
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      LandingPage:true,
      showSearchPage: false,
      showLogin:false,
      showAccount: false,
      showCalendar:false,
      showPreview:false
    };
  }
    setParent(Landing,Truck,Login) {
    this.setState({
      LandingPage: Landing,
      showSearchPage:Truck,
      showLogin:Login
    });
  }
    
    setParentAccount(Account,Calendar,Preview, Login) {
    this.setState({
      showAccount: Account,
      showCalendar:Calendar,
      showPreview:Preview,
      showLogin: Login
    });
    }
  render(){
    return(  
      <div>  
         {this.state.LandingPage ? <Landing setParent={this.setParent.bind(this)}  /> : null}  
         {this.state.showSearchPage ? <TruckSearchMap setParent={this.setParent.bind(this)}/> : null}
         {this.state.showLogin ? <Login setParent={this.setParent.bind(this)} setParentAccount={this.setParentAccount.bind(this)}/>: null}
         {this.state.showPreview ? <TruckInfo setParentAccount={this.setParentAccount.bind(this)} /> : null}
         {this.state.showAccount ? <Account setParentAccount={this.setParentAccount.bind(this)} /> : null}
         {this.state.showCalendar ? <Calendar setParentAccount={this.setParentAccount.bind(this)}  /> : null}  
         <Footer/>
      </div>
    );
 }

}








