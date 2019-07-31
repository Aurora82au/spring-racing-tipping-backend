const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PuntersSchema = new Schema({
    _id: Number,
    password: String,
    name: {
        first: String,
        last: String,
        display: String
    },
    image: String
});

module.exports = mongoose.model('Punters', PuntersSchema);