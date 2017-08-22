import React from 'react'
import HomeHeader from './HomeHeader'
import firebase from 'firebase';

// Create the Search component
export default class Login extends React.Component {
  
  // Initialize constructor of the class
  constructor(){
    super();
    this.state = {
      user: null
    };
        // Initialize the methods listener
    this.socialLogin = this.socialLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  //
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    });
  }

  socialLogin(loginProvider) {
    var provider;
    loginProvider = loginProvider.currentTarget.dataset.id;

    switch(loginProvider){
      case 'google':
        provider = new firebase.auth.GoogleAuthProvider();
      break;
    // case 'facebook':
    //     provider = new firebase.auth.FacebookAuthProvider();
    //   break;
    default:
      console.log('Sorry, we are out of ' + loginProvider + '.');
    }

    firebase.auth().signInWithPopup(provider)
      .then( (result) => {
        console.log(`${result.user.email} ha iniciado session`);
      }).catch( (error) => {
        console.log(`Error ${error.code}: ${error.message}`);
      });
  }

   handleLogOut(){
    firebase.auth().signOut()
      .then( result => console.log(`Ha cerrado sesión`))
      .catch( error => console.log(`Error ${error.code}: ${error.message}`));
  }

    setChild(showLand,showSearch,showLogin){
    var showLand = showLand;
    var showSearch = showSearch; 
    var showLogin = showLogin;
    this.props.setParent(showLand,showSearch, showLogin);
    }

  renderUser () {
         
    if(this.state.user){
      return (
        <div className="card">
            <img src={this.state.user.photoURL} alt="John" width='100%' /> 
            <div className="card-container">
              <h1>{this.state.user.displayName}</h1>
              <p>
                <button className='card-button' onClick={this.handleLogOut} >
                  Logout
                </button>
              </p>
            </div>
        </div>
      );
    }else{
      return (
               
        <div className="container">
          Where is the button!
            {/*<div className="fb-icon-bg"></div>
            <div className="fb-bg" data-id='facebook' onClick={this.socialLogin}></div>*/}
            <div className="g-icon-bg"></div>
            <div className="g-bg" data-id='google' onClick={this.socialLogin}></div>
        </div>
      );
    }
  }
  render() {
    return (
  
      <div className="app">
        <HomeHeader setChild={this.setChild.bind(this)}/>
        you are in Login

        {this.renderUser()}
      </div>
    );
  }
}












