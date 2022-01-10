const Dashboard = require('../models/dashboard');

exports.initData = async (req, res) => {
    await Dashboard.find({ owner: req.body.publickey }).exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ data: data });
        }
    });
};

exports.moreData = async (req, res) => {
    await Dashboard.find({ owner: req.body.publickey, mintAddress: req.body.mintAddress }).exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ data: data });
        }
    });
}

exports.insertData = async (req, res) => {
    for (let i = 0; i < req.body.data.mainData.length; i++) {
        await Dashboard.find({ owner: req.body.data.owner, mintAddress: req.body.data.mainData[i].address }).exec(async function (err, data) {
            if (data.length > 0) {
                await Dashboard.findOneAndUpdate({ owner: req.body.data.owner, mintAddress: req.body.data.mainData[i].address }, { price: req.body.data.mainData[i].price, date: req.body.data.mainData[i].date }).exec(async function (err, data) {
                    if (err) {
                        console.log(err);
                    }

                });

            }
            else {
                var newData = { owner: req.body.data.owner, price: req.body.data.mainData[i].price, date: req.body.data.mainData[i].date, mintAddress: req.body.data.mainData[i].address };
                var newDashboard = new Dashboard(newData);
                newDashboard.save(async function (err) {
                    if (err) {
                        console.log(err);
                    }
                });

            }

        });
    }
    res.send({ result: "success" })
}
