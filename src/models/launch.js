const mongoose = require("mongoose")
const Schema = mongoose.Schema

let Launchpad = new Schema({
    id: {
        type: String,
        required: false
    },
    projectImg: {
        type: String,
        required: false
    },
    projectImgFile: {
        type: String,
        required: false
    },
    projectImgName: {
        type: String,
        required: false
    },
    blockchainImg: {
        type: String,
        required: false
    },
    blockchainImgFile: {
        type: String,
        required: false
    },
    blockchainImgName: {
        type: String,
        required: false
    },
    projectName: {
        type: String,
        required: false
    },
    tokenName: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },
    discord: {
        type: String,
        required: false
    },
    medium: {
        type: String,
        required: false
    },
    telegram: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    startDate: {
        type: String,
        required: false
    },

    endDate: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    },
    totalAmount: {
        type: String,
        required: false
    },
    slider: {
        type: String,
        required: false
    },
    level1: {
        type: String,
        required: false
    },
    level2: {
        type: String,
        required: false
    },
    level3: {
        type: String,
        required: false
    },
    level4: {
        type: String,
        required: false
    },
    level5: {
        type: String,
        required: false
    },
    level6: {
        type: String,
        required: false
    },
    detailText: {
        type: String,
        required: false
    },
    detailPhoto: {
        type: String,
        required: false
    },
    display: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('launch', Launchpad);