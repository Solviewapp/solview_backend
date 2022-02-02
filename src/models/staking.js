const mongoose = require("mongoose")
const Schema = mongoose.Schema

let Staking = new Schema({
    account: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('staking', Staking);