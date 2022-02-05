const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');

router.get('/login', (req, res) => {
    user.login(req, res);
});
module.exports = router;


