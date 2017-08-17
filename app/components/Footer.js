// Include React as a dependency
var React = require("react");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var Footer = React.createClass({
    render: function() {
    this.props.renderFooter("links and sutff");
        return(
            <Footer footer = {this.props.footer}/>

        );
    }

});


module.exports = Footer;