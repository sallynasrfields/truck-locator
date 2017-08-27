import React from 'react'

// Create the Search component
export default class HomeHeader extends React.Component {


  render() {
    return (
      <div className="row footer">
        <div className="col-md-4 col-sm-4 col-xs-6" style={{color: '#fff', paddingTop: 20}}>
          &copy; Copyright 2017 | HoustonFoodTrucks.com
        </div>
        <div className="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-6">
          <img src="../img/fb.png" alt="fb" />
          <img src="../img/twitter.png" alt="twitter" style={{paddingLeft: 9}}/>
          <img src="../img/insta.png" alt="twitter" />
        </div>
      </div>
    );
  }
}