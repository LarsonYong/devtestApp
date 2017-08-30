/**
 * Created by jack on 8/1/17.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//The "bodyParser" middleware is used to get the data from request body
// like POST, PUT and DELETE type request.


var api = require('./routes/api');

var port = 4201;
var app = express();
var router = express.Router();

// Define the middleware to parse the data from URL request and requesy body
// The "urlEncoded" middle-ware is used to get the data from URL of the request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/api/*',api);

app.listen(port,function () {
    console.log('Server Started AT ' + port);
});
