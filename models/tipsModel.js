var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var TipsSchema = new Schema({
meetId: String,
races: [
    {
        number: Number,
        punters: [
            {
                punterId: Number,
                tips: [String]
            }
        ]
    }
]
});

module.exports = mongoose.model('Tips', TipsSchema);