const router = require('express').Router();

const { loginUser } = require('../../controllers/auth');

router.post('/login', loginUser);

module.exports = router;

