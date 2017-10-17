var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var RaceMeets = require('../models/racemeetsModel.js');

/* GET ALL RACEMEETS */
router.get('/', function(req, res, next) {
    RaceMeets.find(function (err, racemeets) {
        if (err) return next(err);
        res.json(racemeets);
    });
});

/* GET A SINGLE RACEMEET BY MEETID */
router.get('/:meetid', function(req, res, next) {
    var query = RaceMeets.where({ "meetId": req.params.meetid });
    query.findOne(function (err, racemeet) {
        if (err) return next(err);
        res.json(racemeet);
    });
});

/* SAVE A NEW RACEMEET */
router.post('/', function(req, res, next) {
    RaceMeets.create(req.body, function (err, racemeet) {
        if (err) return next(err);
        res.json(racemeet);
    });
});

/* UPDATE A RACEMEET */
router.put('/:meetid', function(req, res, next) {
    var query = RaceMeets.where({ "meetId": req.params.meetid });
    query.findOneAndUpdate(req.body, function (err, racemeet) {
        if (err) return next(err);
        res.json(racemeet);
    });
});

/* DELETE A RACEMEET */
router.delete('/:meetid', function(req, res, next) {
    var query = RaceMeets.where({ "meetId": req.params.meetid });
    query.findOneAndRemove(function (err, racemeet) {
        if (err) return next(err);
        res.json(racemeet);
    });
});

module.exports = router;