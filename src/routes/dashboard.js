const { Router } = require('express');
const router = Router();
const axios = require('axios');
const dashboard = require('../controllers/dashboard');

router.post('/initData', (req, res) => {
    dashboard.initData(req, res);
});

router.post('/insertData', (req, res) => {
    dashboard.insertData(req, res);
})

router.post('/moreData', (req, res) => {
    dashboard.moreData(req, res);
})

module.exports = router;