const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetsSchema = new Schema({
    _id: Number,
    name: String,
    location: String,
    date: String,
    competitionId: Number
});

module.exports = mongoose.model('Meets', MeetsSchema);