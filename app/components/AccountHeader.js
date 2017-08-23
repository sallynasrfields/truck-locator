import React from 'react'
export default class AccountHeader extends React.Component {
     handleAccountClick(){
        var showAccount = true;
        var showCalendar = false;
        var showPreview = false; 
       
        this.props.setChild(showAccount,showCalendar,showPreview);
    }

        handleCalendarClick(){
        var showAccount = false;
        var showCalendar = true;
        var showPreview = false; 
       
        this.props.setChild(showAccount,showCalendar,showPreview);
    }
        handlePreviewClick(){
        var showAccount = false;
        var showCalendar = false;
        var showPreview = true; 
       
        this.props.setChild(showAccount,showCalendar,showPreview);  
    }
   
      render(){
    return(  
   <div>  
    
            
          <button className="btn btn-primary btn-lg" onClick={this.handleAccountClick.bind(this)}>Account Profile</button>
         <button className="btn btn-primary btn-lg" onClick={this.handlePreviewClick.bind(this)}>Display Preview</button>
          <button className="btn btn-primary btn-lg" onClick={this.handleCalendarClick.bind(this)}>Calender</button>        
      </div>

     
    );
 }

}