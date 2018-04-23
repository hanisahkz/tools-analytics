const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoute'); //importing route
routes(app); //register the route

app.listen(port);

//to handle unrecognized URL
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' doesn\'t exist'})
});
//

console.log('RESTful API server successfully booted on: ' + port);