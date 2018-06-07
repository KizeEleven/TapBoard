const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
})

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
