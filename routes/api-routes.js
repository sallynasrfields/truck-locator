// Requiring our models
var db = require("../models");

module.exports = function(app) {
// Routes
// Gets Truck Location info from MySQL
app.get('/', function(req, res) {
    db.place.findAll().then(function(places) {
        res.render('index', { places: places });
    }).catch(function(err) {
        res.send({ message: 'error', error: err });
    });
});
// Let's user create a new Truck Location
app.post('/places', function(req, res) {
    db.place.create({
        name: req.body.name,
        address: req.body.address
    }).then(function(place) {
        res.redirect('/');
    }).catch(function(err) {
        res.send({ message: 'error', error: err });
    });
});
// Update Truck Location
app.put('/places/:id', function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.place.update({
      name: req.body.name,
      address: req.body.address
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(place) {
      res.json(place);
    });
  });
};