const router = require('express').Router();

const { register, loginUser } = require('../../controllers/auth');
const { validateLogin } = require('../../middlewares/validate');

router.post('/register', register);
router.post('/login',validateLogin, loginUser);

module.exports = router;




