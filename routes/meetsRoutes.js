const express = require('express');
const router = express.Router();
const Meets = require('../models/meetsModel.js');

/* GET ALL MEETS */
router.get('/', function(req, res, next) {
    Meets.find(function (err, meets) {
        if (err) return next(err);
        res.json(meets);
    });
});

/* GET ALL MEETS IN A COMPETITION */
router.get('/bycompetition/:competitionId', function(req, res, next) {
    Meets.find({ competitionId: req.params.competitionId }, function (err, meets) {
        if (err) return next(err);
        res.json(meets);
    });
});

/* GET A SINGLE MEET BY ID */
router.get('/:meetid', function(req, res, next) {
    Meets.findById(req.params.meetid, function (err, meet) {
        if (err) return next(err);
        res.json(meet);
    });
});

/* SAVE A NEW MEET */
router.post('/', function(req, res, next) {
    Meets.create(req.body, function (err, meet) {
        if (err) return next(err);
        res.json(meet);
    });
});

/* UPDATE A MEET */
router.put('/:meetid', function(req, res, next) {
    Meets.findByIdAndUpdate(req.params.meetid, req.body, function (err, meet) {
        if (err) return next(err);
        res.json(meet);
    });
});

/* DELETE A MEET */
router.delete('/:meetid', function(req, res, next) {
    Meets.findByIdAndDelete(req.params.meetid, function (err, meet) {
        if (err) return next(err);
        res.json(meet);
    });
});

module.exports = router;