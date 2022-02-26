const mongoose = require("mongoose")
const Schema = mongoose.Schema

let mainBonusSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    amount: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    tokenPrice: {
        type: String,
        required: false
    },
    tokenAmount: {
        type: String,
        required: false
    },
    tokenName: {
        type: String,
        required: false
    },
    projectName: {
        type: String,
        required: false
    },
    txHash: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('idoTb', mainBonusSchema);