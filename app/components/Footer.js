import React from 'react'

// Create the Search component
export default class HomeHeader extends React.Component {


  render() {
    return (
      <div className="row footer">
        <div className="col-md-4" style={{color: '#fff', paddingTop: 20}}>
          &copy; Copyright 2017 | HoustonFoodTrucks.com
        </div>
        <div className="col-md-4 col-md-offset-4">
          <img src="../img/fb.png" alt="fb" height="50%" width="auto" />
        </div>
      </div>
    );
  }
}