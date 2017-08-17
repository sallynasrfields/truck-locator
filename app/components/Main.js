// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({
  render: function() {
    return (
      <div class ="main-container">
        {this.props.children}   
        <footer>
          {/*no component for footer*/}
        </footer>
      </div>
    )
  }
});
