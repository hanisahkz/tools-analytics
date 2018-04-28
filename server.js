
//1. import express module
const express = require('express'),
    //1. create an express object
    app = express(),
    //1.1 to dynamically use the environment port number or default 3000
    port = process.env.PORT || 3000,
    //2. import bodyparser module to performs parsing
    bodyParser = require('body-parser'),
    //3. configuring database connection
    dbConfig = require('./config/database.config'),
    mongoose = require('mongoose');

//these are middlewares and have access to a) request and b) response objects => meaning can handle json etc request and return json etc response
//2.1 so that the app can handle application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//2.2 so that the app can handle json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
//3.1 connect to database
mongoose.connect(dbConfig.url)
    .then(() => {
    console.log("Successfully connected to the database");
}).catch (e => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

//pay attention to this. This is passing `app` that has the route method
require('./api/routes/todoListRoute')(app);
app.listen(port, () => {
    console.log("Hey it's currently listening to port:" + port);
});

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' doesn\'t exist'});
});

console.log('RESTful API server successfully booted on: ' + port);