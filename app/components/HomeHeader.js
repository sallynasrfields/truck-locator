import React from 'react'


// Create the Search component
export default class HomeHeader extends React.Component {
    handleLoginClick() {
        var showLand = false;
        var showLogin = true;
        var showSearch = false;
        this.props.setChild(showLand, showSearch, showLogin);
    }

    handleTruckClick() {
        var showLand = false;
        var showLogin = false;
        var showSearch = true;
        this.props.setChild(showLand, showSearch, showLogin);

    }
    handleHomeClick() {
        var showLand = true;
        var showLogin = false;
        var showSearch = false;
        this.props.setChild(showLand, showSearch, showLogin);

    }


    render() {
        return (
            <div className="header row">
                <div className="col-md-4">
                    <img src="../img/logo.png" height="100px" width="auto" />
                </div>
                <button className="btn btn-primary btn-lg" onClick={this.handleHomeClick.bind(this)}>
                </button>

                <div className="col-md-4 col-md-offset-4 buttons">
                    <button className="btn btn-primary btn-lg btn-header" onClick={this.handleLoginClick.bind(this)}>login</button>
                    <button className="btn btn-primary btn-lg btn-header" onClick={this.handleTruckClick.bind(this)}>search</button>
                    <button className="btn btn-primary btn-lg btn-header" onClick={this.handleHomeClick.bind(this)}>home</button>
                </div>
            </div>
        );
    }
}