const Banner = require('../models/banner');

exports.initData = async (req, res) => {
    await Banner.find({ id: '1' }).exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data, "strang")
            res.send({ data: data });
        }
    });
};
exports.insertData = async (req, res) => {
    await Banner.find({ id: '1' }).exec(async function (err, data) {
        if (data.length > 0) {
            console.log(data, "data")
            await Banner.findOneAndUpdate({ id: '1' }, { filename: req.body.fileName, url: req.body.url }).exec(async function (err, data) {
                if (err) {
                    console.log(err);
                    res.send({ result: 'error' })
                }
                else {
                    res.send({ result: 'success' })
                }
            });
        }
        else {
            var newBanner = new Banner({ id: '1', filename: req.body.fileName, url: req.body.url });
            newBanner.save(async function (err) {
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


