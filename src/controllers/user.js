const User = require('../models/user');

exports.login = async (req, res) => {
    await User.find({}).exec(async function (err, data) {
        if (data.length > 0) {
            await User.find({ email: req.body.email, password: req.body.password }).exec(async function (err, data) {
                if (data.length > 0) {
                    res.send({ result: 'success' });
                }
                else {
                    res.send({ result: 'false' });
                }
            });
        }
        else {
            var newUser = new User({ email: 'kenan@gmail.com', password: 'solview' });
            newUser.save(async function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success')
                }
            });
            await User.find({ email: req.body.email, password: req.body.password }).exec(async function (err, data) {
                if (data.length > 0) {
                    res.send({ result: 'success' });
                }
                else {
                    res.send({ result: 'false' });
                }
            });
        }

    })
}


