var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var RaceMeetsSchema = new Schema({
meetId: String,
name: String,
location: String,
date: String,
races: [
    {
        number: Number,
        name: String,
        time: String,
        distance: String,
        status: String,
        placings: {
            first: String,
            second: String,
            third: String
        },
        scratchings: [Number]
    }
]
});

module.exports = mongoose.model('RaceMeets', RaceMeetsSchema);