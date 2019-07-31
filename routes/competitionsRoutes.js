const express = require('express');
const router = express.Router();
const Competitions = require('../models/competitionsModel.js');

/* GET ALL COMPETITIONS */
router.get('/', function(req, res, next) {
    Competitions.find(function (err, competitions) {
        if (err) return next(err);
        res.json(competitions);
    });
});

/* GET ALL COMPETITIONS A PUNTER BELONGS TO */
router.get('/bypunter/:punterid', function(req, res, next) {
    Competitions.find({ punters: req.params.punterid }, function (err, competition) {
        if (err) return next(err);
        res.json(competition);
    });
});

/* GET A SINGLE COMPETITION BY ID */
router.get('/:competitionid', function(req, res, next) {
    Competitions.findById(req.params.competitionid, function (err, competition) {
        if (err) return next(err);
        res.json(competition);
    });
});

/* SAVE A NEW COMPETITION */
router.post('/', function(req, res, next) {
    Competitions.create(req.body, function (err, competition) {
        if (err) return next(err);
        res.json(competition);
    });
});

/* UPDATE A COMPETITION */
router.put('/:competitionid', function(req, res, next) {
    Competitions.findByIdAndUpdate(req.params.competitionid, req.body, function (err, competition) {
        if (err) return next(err);
        res.json(competition);
    });
});

/* DELETE A COMPETITION */
router.delete('/:competitionid', function(req, res, next) {
    Competitions.findByIdAndDelete(req.params.competitionid, function (err, competition) {
        if (err) return next(err);
        res.json(competition);
    });
});

module.exports = router;