const express = require('express');
const router = express.Router();
const Races = require('../models/racesModel.js');

/* GET ALL RACES */
router.get('/', function(req, res, next) {
    Races.find(function (err, race) {
        if (err) return next(err);
        res.json(race);
    });
});

/* GET ALL RACES IN A COMPETITION */
router.get('/bycompetition/:competitionId', function(req, res, next) {
    Races.find({ competitionId: req.params.competitionId }, function (err, race) {
        if (err) return next(err);
        res.json(race);
    });
});

/* GET A SINGLE RACE BY ID */
router.get('/:raceid', function(req, res, next) {
    Races.findById(req.params.raceid, function (err, race) {
        if (err) return next(err);
        res.json(race);
    });
});

/* SAVE A NEW RACE */
router.post('/', function(req, res, next) {
    Races.create(req.body, function (err, race) {
        if (err) return next(err);
        res.json(race);
    });
});

/* UPDATE A RACE */
router.put('/:raceid', function(req, res, next) {
    Races.findByIdAndUpdate(req.params.raceid, req.body, function (err, race) {
        if (err) return next(err);
        res.json(race);
    });
});

/* DELETE A RACE */
router.delete('/:raceid', function(req, res, next) {
    Races.findByIdAndDelete(req.params.raceid, function (err, race) {
        if (err) return next(err);
        res.json(race);
    });
});

module.exports = router;