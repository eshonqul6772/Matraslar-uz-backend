const fs = require('fs');
const asyncHandler = require('../middlewares/async');

const Images = require('../models/image');

exports.convertImage = asyncHandler(async (req, res, next) => {
  const image = new Images({
    name: req.file.originalname, uuid: fs.readFileSync(req.file.path), contentType: req.file.mimetype,
  });

  await image.save();

});

