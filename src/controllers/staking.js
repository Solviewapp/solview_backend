const Staking = require('../models/staking');

exports.initData = async (req, res) => {
    await Staking.find().exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ data: data });
        }
    });
};
exports.create = async (req, res) => {
    await Staking.find({ account: req.body.account }).exec(async function (err, data) {
        if (data.length > 0) {
            console.log("duplicated");
            res.send({ result: 'success' });
        }
        else {
            var newStaking = new Staking({ account: req.body.account });
            newStaking.save(async function (err) {
                if (err) {
                    console.log(err);
                    res.send({ result: 'error' })
                } else {
                    res.send({ result: 'success' })
                }
            });
        }
    });
}


