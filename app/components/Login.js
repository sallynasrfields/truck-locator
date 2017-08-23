import React from 'react'
import HomeHeader from './HomeHeader'

// Create the Search component
export default class Login extends React.Component {
  setChild(showLand, showSearch, showLogin) {
    var showLand = showLand;
    var showSearch = showSearch;
    var showLogin = showLogin;
    this.props.setParent(showLand, showSearch, showLogin);
  }

  handleAccountClick(){
        var showAccount = true;
        var showCalendar = false;
        var showPreview = false;  
        var showLogin = false;       
        this.props.setParentAccount(showAccount,showCalendar,showPreview, showLogin); 
  }   

  render() {
    return (
      <div>
        <HomeHeader setChild={this.setChild.bind(this)} />

        <div className="row">
          <div className="col-lg-12" style={{backgroundColor: '#ccc'}}>
            <div className="panel panel-default vendor-log-in" style={{width: '40%', margin: '0 auto'}}>
              <div className="panel-heading" style={{backgroundColor: '#fff', borderColor: '#fff'}}>
                <h3 className="panel-title" style={{fontSize: 30}}>Log In</h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  </div>

                  <button type="submit" className="btn btn-primary sign-up-btn" style={{}} onClick={this.handleAccountClick.bind(this)}>Log In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
