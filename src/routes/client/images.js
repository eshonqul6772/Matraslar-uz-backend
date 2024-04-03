const router = require('express').Router()

const {getSingleImage,downloadSingleImage} =  require('../../controllers/image');

router.get("/:uuid", getSingleImage);
router.get("/download/:uuid", downloadSingleImage);

module.exports = router;