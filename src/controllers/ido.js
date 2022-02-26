const Ido = require('../models/ido');

exports.initData = async (req, res) => {
    await Ido.find().exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ data: data });
        }
    });
};
exports.checkData = async (req, res) => {
    console.log(req.body, "ry")
    await Ido.find({ id: req.body.id, address: req.body.address }).exec(function (err, data) {
        if (data.length > 0) {
            res.send({ result: 'success' })
        }
        else {
            res.send({ result: 'fail' })
        }
    })
}
exports.update = async (req, res) => {
    await Ido.findOneAndUpdate({ id: req.body.id }, { status: req.body.status });
    res.send({ result: 'success' })
}

exports.create = async (req, res) => {
    await Ido.find({ id: req.body.id, address: req.body.address }).exec(async function (err, data) {
        if (data.length > 0) {
            res.send({ result: 'success' });
        }
        else {
            var newIdo = new Ido({ id: req.body.id, address: req.body.address, amount: req.body.amount, status: req.body.status, tokenPrice: req.body.tokenPrice, tokenAmount: req.body.tokenAmount, tokenName: req.body.tokenName, projectName: req.body.projectName, txHash: req.body.txHash });
            newIdo.save(async function (err) {
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


