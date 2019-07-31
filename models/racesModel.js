const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RacesSchema = new Schema({
    _id: Number,
    name: String,
    meetId: Number,
    number: Number,
    time: String,
    distance: String,
    status: Number,
    placings: {
        first: Number,
        second: Number,
        third: Number
    },
    scratchings: [Number],
    competitionId: Number
});

module.exports = mongoose.model('Races', RacesSchema);