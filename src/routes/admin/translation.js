const router = require('express').Router();

const { createTranslation } = require('../../controllers/transiltaion');
const { checkAuth } = require('../../middlewares/auth');


router.post('/translation/ADMIN_CABINET', checkAuth, createTranslation);


module.exports = router;