const router = require('express').Router();

const { register, loginUser, getProfile} = require('../../controllers/auth');
const { checkAuth} = require("../../middlewares/auth")
const { validateLogin } = require('../../middlewares/validate');

 // router.post('/register', register);

router.post('/login',validateLogin, loginUser);
router.get('/profile', checkAuth, getProfile);

module.exports = router;




