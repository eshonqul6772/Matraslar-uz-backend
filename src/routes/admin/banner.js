const router = require('express').Router();

const { createBanner, removeBanner, getBanner, updateBanner } = require('../../controllers/banner');
const { checkAuth } = require('../../middlewares/auth');
const { validateBanner } = require('../../middlewares/validate');
const upload = require('../../utils/fileUploader');

router.get('/banner', checkAuth, getBanner);
router.post('/banner', checkAuth, upload.single('images'), validateBanner, createBanner);
router.delete('/banner/:id', checkAuth, removeBanner);
router.put('/banner/:id', checkAuth, upload.single('images'), updateBanner);

module.exports = router;