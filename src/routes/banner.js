const { Router } = require('express');
const router = Router();
const axios = require('axios');
const banner = require('../controllers/banner');

router.get('/init', (req, res) => {
    banner.initData(req, res);
});
module.exports = router;


