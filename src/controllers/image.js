const url = require("url");
const path = require("path");

const ErrorResponse = require('../utils/ErrorResponse.js');
const asyncHeandler =  require('../middlewares/async.js')

const Image = require("../models/image.js");



// method:      [NONE/CUSTOM METHOD]
// description: create new image
exports.createNewImage = async (file) => {
  const image = await Image.create({
    name: file.originalname,
    uuid: file.filename.split(".").at(0),
  });

    res.status(200).json({
        success:true,
        data:image
    })
};

// method:      [GET]
// description: download single image
exports.downloadSingleImage = asyncHeandler(async (req, res, next) => {
  const image = await Image.findOne({ uuid: req.params.uuid }).lean();
  console.log(image)
  if (!image){
    next( new ErrorResponse("image doesn't exist" , 400))
  }

  const file = path.join(__dirname, "../uploads", `${image.uuid}${path.extname(image.name)}`);
  res.status(200).download(file, image.name);
});

// method:      [GET]
// description: get single image
exports.getSingleImage = asyncHeandler(async (req, res, next) => {
  const image = await Image.findOne({ uuid: req.params.uuid }).lean();
  if (!image){
    next( new ErrorResponse("image doesn't exist" , 400))
  }

  res.status(200).json({
        success: true,
        image:image
  });
});
