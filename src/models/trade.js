const mongoose = require("mongoose")
const Schema = mongoose.Schema

let mainBonusSchema = new Schema({
    coinAddress: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('trade', mainBonusSchema);