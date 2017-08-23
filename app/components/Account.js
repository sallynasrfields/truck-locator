import React from 'react'
import AccountHeader from './AccountHeader'
export default class Account extends React.Component {

      setChild(showAccount,showCalendar,showPreview){
       var showAccount = showAccount;
        var showCalendar =  showCalendar;
        var showPreview = showPreview; 
        this.props.setParentAccount(showAccount,showCalendar,showPreview);
    }
render(){
    return(  
      <div>
        <AccountHeader setChild={this.setChild.bind(this)}/>

        ...This is the account  page     
       
      </div>
    );
 }
}