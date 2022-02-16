const { Router } = require('express');
const router = Router();
const ido = require('../controllers/ido');

router.get('/initData', (req, res) => {
    ido.initData(req, res);
});

router.post('/checkData', (req, res) => {
    ido.checkData(req, res);
})

router.post('/create', (req, res) => {
    ido.create(req, res);
})

router.post('/update', (req, res) => {
    ido.update(req, res);
})

module.exports = router;