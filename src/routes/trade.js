const { Router } = require('express');
const router = Router();
const axios = require('axios');
const trade = require('../controllers/trade');

router.get('/initData', (req, res) => {
    trade.initData(req, res);
});

router.post('/insertData', (req, res) => {
    trade.insertData(req, res);
})


router.post('/trade', async (req, res, next) => {
    var tradeResult = await axios.get('https://nomics.com/data/currencies-ticker?filter=any&include-transparency=true&interval=1h,1d,7d,30d,365d,ytd&quote-currency=USD&symbols=' + req.body.token);
    if (tradeResult.data) {
        res.send({ result: 'success', data: tradeResult.data })
    } else {
        res.send({ result: "fail" })
    }
});


router.post('/chart', async (req, res, next) => {
    var tradeResult = await axios.get('https://nomics.com/data/currency-candles?bars=320&convert=USD&from=' + req.body.startTime + '&id=' + req.body.token + '&resolution=60&to=' + req.body.endTime);
    if (tradeResult.data) {
        res.send({ result: 'success', data: tradeResult.data })
    } else {
        res.send({ result: "fail" })
    }
});
router.post('/chart_month', async (req, res, next) => {
    var tradeResult = await axios.get('https://nomics.com/data/currency-candles?bars=321&convert=USD&from=' + req.body.startTime + '&id=' + req.body.token + '&resolution=1D&to=' + req.body.endTime);
    if (tradeResult.data) {
        res.send({ result: 'success', data: tradeResult.data })
    } else {
        res.send({ result: "fail" })
    }
});
router.post('/chart_year', async (req, res, next) => {
    var tradeResult = await axios.get('https://nomics.com/data/currency-candles?bars=321&convert=USD&from=' + req.body.startTime + '&id=' + req.body.token + '&resolution=1D&to=' + req.body.endTime);
    if (tradeResult.data) {
        res.send({ result: 'success', data: tradeResult.data })
    } else {
        res.send({ result: "fail" })
    }
});
router.post('/chart_all', async (req, res, next) => {
    var tradeResult = await axios.get('https://nomics.com/data/currency-candles?bars=3996&convert=USD&from=' + req.body.startTime + '&id=' + req.body.token + '&resolution=1D&to=' + req.body.endTime);
    if (tradeResult.data) {
        res.send({ result: 'success', data: tradeResult.data })
    } else {
        res.send({ result: "fail" })
    }
});

router.post('/nftData', async (req, res, next) => {
    try {
        var tradeResult = await axios.get('https://www.nfteyez.global/api/accounts/' + req.body.address);
        if (tradeResult.data) {
            var data = tradeResult.data;
            res.send({ result: 'success', data: tradeResult.data })
        } else {
            res.send({ result: "fail" })
        }
    }
    catch {
        res.send({ result: 'fail' })
    }
});

module.exports = router;