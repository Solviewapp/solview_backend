const { Router } = require('express');
const router = Router();
const launch = require('../controllers/launch');

router.get('/init', (req, res) => {
    launch.initData(req, res);
});
router.post('/detail', (req, res) => {
    launch.detail(req, res);
});
router.get('/upcome', (req, res) => {
    launch.upcomeData(req, res);
});
router.get('/endData', (req, res) => {
    launch.endData(req, res);
});
module.exports = router;


