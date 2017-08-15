// Include React
var React = require("react");

// Here we create Parent, our main component
var Parent = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <h1>Testing</h1>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
