// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;



// Create the Search component
var Home = React.createClass({
  RenderHomeHeader(header){
    this.setstate({header});
  }

 render: function() {
        return(
          <div>
            <Header

          </div>
            
             <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/trucksearchmap">Find Trucks</Link></li>
                </ul>
              </div>
        );

 }

});


module.exports Home;






