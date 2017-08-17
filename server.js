var express = require('express');
var bodyParser = require('body-parser');
// var ejsLayouts = require('express-ejs-layouts');
var db = require('./models');
var rowdy = require('rowdy-logger');
var app = express();

//require firbase modules for User Authentication
var firebase = require('firebase');

// var GoogleAuth = require('google-auth-library');
// var auth = new GoogleAuth;
// var client = new auth.OAuth2(CLIENT_ID, '', '');
// client.verifyIdToken(
//     token,
//     CLIENT_ID,
//     // Or, if multiple clients access the backend:
//     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
//     function(e, login) {
//       var payload = login.getPayload();
//       var userid = payload['sub'];
//       // If request specified a G Suite domain:
//       //var domain = payload['hd'];
//     });



rowdy.begin(app);

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));
// require our API routes
require("./routes/api-routes.js")(app);
// Server will Listen on this port
var server = app.listen(process.env.PORT || 3000, function() {
    rowdy.print();
});

module.exports = server;
