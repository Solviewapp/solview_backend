const Trade = require('../models/trade');

const initialCreate = () => {
    console.log(Trade, "trade")
    var initialdata = { 'coinAddress': '0' };
    Trade.count({}, (err, count) => {
        console.log("Number of docs: ", count);
        if (count == 0) {
            console.log("no")
            for (let i = 0; i < 10; i++) {
                var newTrade = new Trade(initialdata);
                newTrade.save(function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("success for saving initial data!");
                    }
                });
            }
        }
        else {
            console.log("success initial data");
        }
    });
};
exports.initData = async (req, res) => {
    await initialCreate();
    await Trade.find({}).exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data, "promotedData");
            res.send({ data: data });
        }
    });
};


exports.insertData = async (req, res) => {
    console.log(req.body.data, "data")
    var filter = req.body.data[0];
    await Trade.findOneAndUpdate({ _id: filter._id }, { coinAddress: filter.coinAddress });
    res.send({ result: 'success' });
}
