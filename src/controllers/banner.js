const Banner = require('../models/banner');

const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/ErrorResponse');


exports.getBanner = asyncHandler(async (req, res) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
  const limit = (req.params.limit || pageLimit);
  const page = (req.params.page || 1);
  const total = await Banner.countDocuments();


  const banner = await Banner.find()
    .skip((page * limit) - limit)
    .limit(limit);

  res.status(200).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    banner: banner,
  });
});



exports.createBanner = asyncHandler(async (req, res, next) => {


  const newProduct = await Banner.create({
    title: req.body.title,
    images: 'uploads/' + req.file.filename,
  });

  console.log(newProduct)


  res.status(201).json({
    success: true, products: newProduct,
  });
});

exports.updateBanner = asyncHandler(async (req, res, next) => {

  const banner = await Banner.findById(req.params.id);

  if (!banner) {
    return next(new ErrorResponse('Banner not found', 400));
  }

  const editBanner = {
    title: req.body.title,
    status: req.body.status,
  };

  const updateBanner = await Banner.findByIdAndUpdate(req.params.id, editBanner, {
    new: true, runValidators: true,
  });


  res.status(200).json({
    success: true, data: updateBanner,
  });

});


exports.removeBanner = asyncHandler(async (req, res) => {
  await Banner.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true, message: 'success delete',
  });
});