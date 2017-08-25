import React from 'react'
export default class AccountHeader extends React.Component {
    handleAccountClick() {
        var showAccount = true;
        var showCalendar = false;
        var showPreview = false;

        this.props.setChild(showAccount, showCalendar, showPreview);
    }

    handleCalendarClick() {
        var showAccount = false;
        var showCalendar = true;
        var showPreview = false;

        this.props.setChild(showAccount, showCalendar, showPreview);
    }
    handlePreviewClick() {
        var showAccount = false;
        var showCalendar = false;
        var showPreview = true;

        this.props.setChild(showAccount, showCalendar, showPreview);
    }

    render() {
        return (
            <div>
                <div className="header row" style={{paddingRight: "110px"}}>
                    <div className="col-md-4">
                        <img src="../img/logo.png" height="100px" width="auto" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-lg btn-account" style={{float: "right"}} onClick={this.handleAccountClick.bind(this)}>account profile</button>
                        <button className="btn btn-primary btn-lg btn-account" style={{float: "right"}} onClick={this.handlePreviewClick.bind(this)}>display preview</button>
                        <button className="btn btn-primary btn-lg btn-account" style={{float: "right"}} onClick={this.handleCalendarClick.bind(this)}>calendar</button>
                    </div>
                </div>
            </div>


        );
    }
}