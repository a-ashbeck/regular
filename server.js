var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

// For Storm Path
var ReactStormpath = require('react-stormpath').default;
var Router = require('react-stormpath').Router;
var AuthenticatedRoute = require('react-stormpath').AuthenticatedRoute;
var LoginLink = require('react-stormpath').LoginLink;

var PORT = 3000;

var app = express();
var port = process.env.PORT || PORT;


ReactStormpath.init({
  endpoints: {
    baseUri: '***'
    devUri: 'http://localhost:3000'
    productionUri: 'https://cjb-final-project.herokuapp.com/'
  }
});

// Serve static content for the app from 'public' directory
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, function() {

    /* eslint no-console: "off", prefer-template: "off" */
    console.log('listening on port ' + port);


});

// Get them routes
require('./controllers/mainController.js')(app);
