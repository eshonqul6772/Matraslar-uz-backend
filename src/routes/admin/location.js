const router = require("express").Router();

const { createLocation ,getLocation , updateLocation,  removeLocation} = require("../../controllers/location");
const { checkAuth } = require("../../middlewares/auth");
const upload = require("../../utils/fileUploader");
const { validateLogin } = require("../../middlewares/validate")


router.get('/location', checkAuth,getLocation,validateLogin);
router.post('/location', checkAuth, upload.single('images'), createLocation,validateLogin);
router.put('/location/:id', checkAuth, updateLocation,validateLogin);
router.delete('/location/:id' , checkAuth,  removeLocation,validateLogin);

module.exports = router;

