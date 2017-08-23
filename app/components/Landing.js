import React from 'react'
import HomeHeader from './HomeHeader'

// Create the Search component
export default class Landing extends React.Component {
  setChild(showLand, showSearch, showLogin) {
    var showLand = showLand;
    var showSearch = showSearch;
    var showLogin = showLogin;
    this.props.setParent(showLand, showSearch, showLogin);
  }
  handleSearchClick(showLand, showSearch, showLogin) {
    var showLand = false;
    var showSearch = true;
    var showLogin = false;
    this.props.setParent(showLand, showSearch, showLogin);
  }

  render() {
    return (
      <div className="row">
        <HomeHeader setChild={this.setChild.bind(this)} />

        <div className="col-md-12">
          <img src="../img/bg.jpg" />
          <button className="btn btn-primary btn-lg" onClick={this.handleSearchClick.bind(this)}>Search for Trucks</button>
        </div>
      </div>
    );
  }

}








