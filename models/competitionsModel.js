const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompetitionsSchema = new Schema({
    _id: Number,
    name: String,
    startDate: String,
    admins: [Number],
    punters: [Number]
});

module.exports = mongoose.model('Competitions', CompetitionsSchema);