// Include React as a dependency
var React = require("react");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var HomeHeader = React.createClass({
    render: function() {
    this.props.renderHomeHeader("links and sutff");
        return(
            <Header header = {this.props.header}/>

        );
    }

});


module.exports = HomeHeader;