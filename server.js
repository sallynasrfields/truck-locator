var express = require('express');
var bodyParser = require('body-parser');
// var ejsLayouts = require('express-ejs-layouts');
var db = require('./models');
var rowdy = require('rowdy-logger');
var app = express();

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