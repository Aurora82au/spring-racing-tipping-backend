const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const competitions = require('./routes/competitionsRoutes');
const meets = require('./routes/meetsRoutes');
const races = require('./routes/racesRoutes');
const tips = require('./routes/tipsRoutes');
const punters = require('./routes/puntersRoutes');

let app = express();

const database = process.env.MONGODB_URI; // Set in 'Settings/Config Vars' in Heroku
// const database = 'mongodb://127.0.0.1:3001/tippingDB'; // Local

mongoose.Promise = global.Promise;
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
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

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/competitions', competitions);
app.use('/meets', meets);
app.use('/races', races);
app.use('/punters', punters);
app.use('/tips', tips);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
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
