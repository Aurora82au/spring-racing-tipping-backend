var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PuntersSchema = new Schema({
punterId: Number,
password: String,
name: {
    first: String,
    last: String,
    display: String
},
pic: String,
isAdmin: Boolean
});

module.exports = mongoose.model('Punters', PuntersSchema);