const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipsSchema = new Schema({
    _id: Number,
    competitionId: Number,
    meetId: Number,
    raceId: Number,
    punterId: Number,
    selections: [Number]
});

module.exports = mongoose.model('Tips', TipsSchema);