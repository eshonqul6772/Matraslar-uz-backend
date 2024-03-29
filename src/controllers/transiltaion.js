const Translation = require('../models/translation');

const asyncHandler = require('../middlewares/async');


exports.createTranslation = asyncHandler(async (req, res) => {
  const createTranslation = new Translation({
    name: {
      en: req.body.name,
      uz: req.body.name,
    },
    tag:req.body.tag,
    status: req.body.status,
    type: req.body.type,
  });

  const saveTranslation = await createTranslation.save();

  res.status(200).json({
    success: true, translation: saveTranslation,
  });
});
