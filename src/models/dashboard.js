const mongoose = require("mongoose")
const Schema = mongoose.Schema

let mainBonusSchema = new Schema({
    mintAddress: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    owner: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('dashboard', mainBonusSchema);