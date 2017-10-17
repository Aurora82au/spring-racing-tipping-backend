var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var racemeets = require('./routes/racemeetsRoutes');
var punters = require('./routes/puntersRoutes');
var tips = require('./routes/tipsRoutes');

var app = express();

mongoose.Promise = global.Promise;
//mongodb://localhost/tippingdb
mongoose.connect('mongodb://heroku_ztf3jpdz:jtj6ekss7kjv4ds27sirv0mmi@ds121945.mlab.com:21945/heroku_ztf3jpdz')
        .then(() =>  console.log('connection successful'))
        .catch((err) => console.error(err));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Allow cross-origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/racemeets', racemeets);
app.use('/punters', punters);
app.use('/tips', tips);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler
app.use(function(err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});

//console.log(process.env.NODE_ENV);

module.exports = app;
