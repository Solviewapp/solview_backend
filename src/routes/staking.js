const { Router } = require('express');
const router = Router();
const staking = require('../controllers/staking');

router.get('/init', (req, res) => {
    staking.initData(req, res);
});
router.post('/create', (req, res) => {
    staking.create(req, res);
})
module.exports = router;


