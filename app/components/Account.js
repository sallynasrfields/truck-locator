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
<div className="header row">
        <div className="col-lg-12">
          <div className="panel panel-default vendor-log-in">
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" className="form-control" id="inputName" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputCompanyName">Company Name</label>
                  <input type="text" className="form-control" id="inputCompanyName" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input type="email" className="form-control" id="inputEmail" />
                </div>
                <div style={{marginBottom: 10}}>
                  <label className="control-label">Upload Photo</label>
                  <input id="input-1" type="file" className="file" />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input type="text" className="form-control" id="website" />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Describe Your Food Truck:</label>
                  <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                </div>
                <section className="container" style={{margin: 0, padding: 0}}>
                  <div className="dropdown">
                    <select name="one" className="dropdown-select">
                      <option value>Display Yelp Ratings?</option>
                      <option value={1}>Yes</option>
                      <option value={2}>No</option>
                    </select>
                  </div>
                </section>
                <br />
                <p>Type of Cuisine
                </p><section className="container" style={{margin: 0, padding: 0}}>
                  <div className="form-check-label">
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Mexican
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Italian
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Indian
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Cajun
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Soul
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Thai
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Greek
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Chinese
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Japanese
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      American
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Vietnamese
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Mediterranean
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Korean
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Caribbean
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Lebanese
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Moroccan
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      French
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Spanish
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      German
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Turkish
                    </label>
                    <label className="form-check-label">
                      <input type="checkbox" className="form=check-input" />
                      Vegetarian
                    </label>
                    <label className="form-check-label" style={{marginBottom: 30}}>
                      <input type="checkbox" className="form=check-input" />
                      Vegan
                    </label>
                  </div>
                </section>
                <button type="submit" className="btn btn-primary account-submit" style={{padding: 20, lineHeight: 0 }}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
     
       
      </div>
    );
 }
}