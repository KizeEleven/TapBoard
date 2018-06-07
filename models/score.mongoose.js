const mongoose = require('mongoose');
const MongooseUser = require('../models/user.mongoose');

const ScoreSchema = new mongoose.Schema({
    points: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {type: Date, 'default': Date.now}
});

mongoose.model('Score', ScoreSchema);
module.exports = mongoose.model('Score');
