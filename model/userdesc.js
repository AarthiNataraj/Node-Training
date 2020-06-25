const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
       // unique: true
    },
    address: {
        type: String,
        required: true,
    },
    nation: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    }
});
userSchema.index({ username: 'text'});
module.exports = new mongoose.model('userdesc', userSchema);