import React from 'react'
import HomeHeader from './HomeHeader'

//Assets
import google from '../img/google.png'

import config from '../config'

export default class Login extends React.Component{
    constructor(props) {
        super(props)
    }

    setChild(showLand, showSearch, showLogin) {
        var showLand = showLand;
        var showSearch = showSearch;
        var showLogin = showLogin;
        this.props.setParent(showLand, showSearch, showLogin);
  }

//     handleAccountClick(){
//         var showAccount = true;
//         var showCalendar = false;
//         var showPreview = false;  
//         var showLogin = false;       
//         this.props.setParentAccount(showAccount,showCalendar,showPreview, showLogin); 
//   } 
    
    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();    
    }
    
    //Triggering login for google
    googleLogin = () => {
        let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: config.google, //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    googleSignInCallback = (e) => {
        console.log( e )
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    this.getUserGoogleProfile( e["access_token"] )
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log(e.message);
                console.log('Import error - Error occured while importing data')
                return
            
            } else if (e.id) {
                //Profile data
                alert("Successfull login from google : "+ e.displayName )
                console.log( e );
                return;
            }
        }.bind(this));
    }
    
    render(){
        return(
            <div>
                <HomeHeader setChild={this.setChild.bind(this)} />
                <img src={google} title="google login" alt="google" onClick={ () => this.googleLogin() }/>
            </div>
        )
    }
}

