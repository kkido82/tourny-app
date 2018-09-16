var createError = require('http-errors');
var express = require('express');
var path = require('path');
var config = require('config');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var errorHandler = require('./helpers/error-handler');
var cors = require('cors');

var api = require('./routes/api.routes');
var app = express();

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
// app.use(function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

mongoose.connect(config.connectionString, { useNewUrlParser: true })
	.then(() =>  { console.log("connected successfuly to mongodb - tourny-app"); })
  
	.catch((err) => { console.log("error connecting to mongodb - tourny-app error: " + err); });

module.exports = app;
