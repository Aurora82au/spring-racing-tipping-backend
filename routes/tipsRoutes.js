var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tips = require('../models/tipsModel.js');

/* GET ALL TIPS */
router.get('/', function(req, res, next) {
    Tips.find(function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* GET A SINGLE GROUP OF TIPS BY MEETID */
router.get('/:meetid', function(req, res, next) {
    var query = Tips.where({ "meetId": req.params.meetid });
    query.findOne(function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* SAVE A NEW GROUP OF TIPS */
router.post('/', function(req, res, next) {
    Tips.create(req.body, function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* UPDATE A GROUP OF TIPS */
router.put('/:meetid', function(req, res, next) {
    var query = Tips.where({ "meetId": req.params.meetid });
    query.findOneAndUpdate(req.body, function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* DELETE A GROUP OF TIPS */
router.delete('/:meetid', function(req, res, next) {
    var query = Tips.where({ "meetId": req.params.meetid });
    query.findOneAndRemove(function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

module.exports = router;