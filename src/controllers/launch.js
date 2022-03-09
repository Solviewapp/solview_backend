const Launch = require('../models/launch');

exports.insertData = async (req, res) => {
    await Launch.find({ id: req.body.id }).exec(async function (err, data) {
        if (data.length > 0) {
            await Launch.findOneAndUpdate({ id: req.body.id }, {
                projectName: req.body.projectName,
                tokenName: req.body.tokenName,
                website: req.body.website,
                twitter: req.body.twitter,
                discord: req.body.discord,
                medium: req.body.medium,
                telegram: req.body.telegram,
                status: req.body.status,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                price: req.body.price,
                totalAmount: req.body.totalAmount,
                level0: req.body.level0,
                level1: req.body.level1,
                level2: req.body.level2,
                level3: req.body.level3,
                level4: req.body.level4,
                level5: req.body.level5,
                level6: req.body.level6,
                slider: req.body.slider,
                detailText: req.body.detailText,
                display: req.body.display
            }).exec(async function (err, data) {
                if (err) {
                    console.log(err);
                }
            });
            if (req.files && req.files.projectImgFile) {
                await Launch.findOneAndUpdate({ id: req.body.id }, {
                    projectImg: ('https://admin.solview.app/' + req.body.projectImgName),
                    projectImgFile: req.body.projectImgName,
                    projectImgName: req.body.projectImgName,
                }).exec(async function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            if (req.files && req.files.blockchainImgFile) {
                await Launch.findOneAndUpdate({ id: req.body.id }, {
                    blockchainImg: ('https://admin.solview.app/' + req.body.blockchainImgName),
                    blockchainImgFile: req.body.blockchainImgName,
                    blockchainImgName: req.body.blockchainImgName,
                }).exec(async function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            if (req.files && req.files.detailPhotoFile) {
                await Launch.findOneAndUpdate({ id: req.body.id }, {
                    detailPhoto: ('https://admin.solview.app/' + req.body.detailPhotoName),
                    detailPhotoFile: req.body.detailPhotoName,
                    detailPhotoName: req.body.detailPhotoName,
                }).exec(async function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            res.send({ result: 'success' })

        }
        else {
            if (req.files && req.files.detailPhotoFile) {
                var newLaunch = new Launch({
                    id: req.body.id,
                    projectImg: ('https://admin.solview.app/' + req.body.projectImgName),
                    projectImgFile: req.body.projectImgName,
                    projectImgName: req.body.projectImgName,
                    blockchainImg: ('https://admin.solview.app/' + req.body.blockchainImgName),
                    blockchainImgFile: req.body.projectImgName,
                    blockchainImgName: req.body.blockchainImgName,
                    projectName: req.body.projectName,
                    tokenName: req.body.tokenName,
                    website: req.body.website,
                    twitter: req.body.twitter,
                    discord: req.body.discord,
                    medium: req.body.medium,
                    telegram: req.body.telegram,
                    status: req.body.status,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    price: req.body.price,
                    totalAmount: req.body.totalAmount,
                    slider: req.body.slider,
                    level0: req.body.level0,
                    level1: req.body.level1,
                    level2: req.body.level2,
                    level3: req.body.level3,
                    level4: req.body.level4,
                    level5: req.body.level5,
                    level6: req.body.level6,
                    detailText: req.body.detailText,
                    detailPhoto: ('https://admin.solview.app/' + req.body.detailPhotoName),
                    detailPhotoFile: req.body.detailPhotoName,
                    detailPhotoName: req.body.detailPhotoName,
                    display: req.body.display
                });
                newLaunch.save(async function (err) {
                    if (err) {
                        res.send({ result: 'error' })
                    } else {
                        res.send({ result: 'success' })
                    }
                });
            }
            else {
                var newLaunch = new Launch({
                    id: req.body.id,
                    projectImg: ('https://admin.solview.app/' + req.body.projectImgName),
                    projectImgFile: req.body.projectImgName,
                    projectImgName: req.body.projectImgName,
                    blockchainImg: ('https://admin.solview.app/' + req.body.blockchainImgName),
                    blockchainImgFile: req.body.projectImgName,
                    blockchainImgName: req.body.blockchainImgName,
                    projectName: req.body.projectName,
                    tokenName: req.body.tokenName,
                    website: req.body.website,
                    twitter: req.body.twitter,
                    discord: req.body.discord,
                    medium: req.body.medium,
                    telegram: req.body.telegram,
                    status: req.body.status,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    price: req.body.price,
                    totalAmount: req.body.totalAmount,
                    slider: req.body.slider,
                    baseAmount: req.body.baseAmount,
                    detailText: req.body.detailText,
                    detailPhoto: '',
                    detailPhotoFile: '',
                    detailPhotoName: '',
                    display: req.body.display
                });
                newLaunch.save(async function (err) {
                    if (err) {
                        res.send({ result: 'error' })
                    } else {
                        res.send({ result: 'success' })
                    }
                });
            }

        }
    });
}

exports.initData = async (req, res) => {
    await Launch.find().exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ data: data });
        }
    });
};

exports.detail = async (req, res) => {
    await Launch.find({ id: req.body.id }).exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ data: data });
        }
    });
}

exports.upcomeData = async (req, res) => {
    await Launch.find({ $or: [{ status: 'upcoming' }, { status: 'live' }], display: 'enable' }).exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ data: data });
        }
    });
}

exports.endData = async (req, res) => {
    await Launch.find({ status: 'ended', display: 'enable' }).exec(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ data: data });
        }
    });

}
