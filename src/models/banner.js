const mongoose = require("mongoose")
const Schema = mongoose.Schema

let mainBonusSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('banner', mainBonusSchema);