const express = require('express');
const router = express.Router();
const Tips = require('../models/tipsModel.js');

/* GET ALL TIPS */
router.get('/', function(req, res, next) {
    Tips.find(function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* GET ALL TIPS IN A COMPETITION */
router.get('/bycompetition/:competitionId', function(req, res, next) {
    Tips.find({ competitionId: req.params.competitionId }, function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* GET A SINGLE SET OF TIPS BY ID */
router.get('/:tipsid', function(req, res, next) {
    Tips.findById(req.params.tipsid, function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* SAVE A NEW SET OF TIPS */
router.post('/', function(req, res, next) {
    Tips.create(req.body, function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* UPDATE A SET OF TIPS */
router.put('/:tipsid', function(req, res, next) {
    Tips.findByIdAndUpdate(req.params.tipsid, req.body, function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

/* DELETE A SET OF TIPS */
router.delete('/:tipsid', function(req, res, next) {
    Tips.findByIdAndDelete(req.params.tipsid, function (err, tips) {
        if (err) return next(err);
        res.json(tips);
    });
});

module.exports = router;