const express = require('express');
const router = express.Router();
const Punters = require('../models/puntersModel.js');

/* GET ALL PUNTERS */
router.get('/', function(req, res, next) {
    Punters.find(function (err, punters) {
        if (err) return next(err);
        res.json(punters);
    });
});

/* GET A SINGLE PUNTER BY ID */
router.get('/:punterid', function(req, res, next) {
    Punters.findById(req.params.punterid, function (err, punter) {
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
    let updates = {};
    if (req.body.name) { updates.name = req.body.name }
    if (req.body.password) { updates.password = req.body.password }
    if (req.body.image) { updates.image = req.body.image }
    Punters.findByIdAndUpdate(req.params.punterid, updates, {new: true}, function (err, punter) {
        if (err) return next(err);
        res.json(punter);
    });
});

/* DELETE A PUNTER */
router.delete('/:punterid', function(req, res, next) {
    Punters.findByIdAndDelete(req.params.punterid, function (err, punter) {
        if (err) return next(err);
        res.json(punter);
    });
});

module.exports = router;