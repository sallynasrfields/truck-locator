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
  render() {
    return (
      <div>
        <HomeHeader setChild={this.setChild.bind(this)} />

        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default vendor-log-in">
              <div className="panel-heading">
                <h3 className="panel-title">Log In</h3>
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
                  <button type="submit" className="btn btn-primary sign-up-btn">Log In</button>
                  <hr />
                  <p>Need to <a hreft="#">Sign Up</a>?</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}








