var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Punters = require('../models/puntersModel.js');

/* GET ALL PUNTERS */
router.get('/', function(req, res, next) {
    Punters.find(function (err, punters) {
        if (err) return next(err);
        res.json(punters);
    });
});

/* GET A SINGLE PUNTER BY PUNTERID */
router.get('/:punterid', function(req, res, next) {
    var query = Punters.where({ "punterId": req.params.punterid });
    query.findOne(function (err, punter) {
        if (err) return next(err);
        res.json(punter);
    });
});

/* SAVE A NEW PUNTER */
router.post('/', function(req, res, next) {
    Punters.create(req.body, function (err, punter) {
        if (err) return next(err);
        res.json(punter);
    });
});

/* UPDATE A PUNTER */
router.put('/:punterid', function(req, res, next) {
    var query = Punters.where({ "punterId": req.params.punterid });
    query.findOneAndUpdate(req.body, function (err, punter) {
        if (err) return next(err);
        res.json(punter);
    });
});

/* DELETE A PUNTER */
router.delete('/:punterid', function(req, res, next) {
    var query = Punters.where({ "punterId": req.params.punterid });
    query.findOneAndRemove(function (err, punter) {
        if (err) return next(err);
        res.json(punter);
    });
});

module.exports = router;