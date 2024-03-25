const Category = require('../models/categories');

const ErrorResponse = require('../utils/ErrorResponse');
const asyncHeader = require('../middlewares/async');
const asyncHandler = require('../middlewares/async');


exports.createCategory = asyncHeader(async (req, res, next) => {
  const { category, status } = req.body;

  if (!category && !status) {
    next(ErrorResponse('invalid category or statusType', 400));
  }

  const newCategory = new Category({
    category, status,
  });

  const saveCategory = await newCategory.save();

  res.status(201).json({
    success: true, data: saveCategory,
  });
});

exports.getCategory = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);
  const total = await Category.countDocuments();

  const category = await Category.find()
    .skip((page * limit) - limit)
    .limit(limit);

  res.status(200).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: category,
  });
});

exports.getCategoryById = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorResponse('Order not found', 404));
  }
  res.status(200).json({
    success: true, data: category,
  });
});


exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorResponse('Order not found', 404));
  }

  const editCategory = {
    name: req.body.name, phone: req.body.phone, productName: req.body.productName, count: req.body.count,
  };

  const updatedCategory = await Category.findByIdAndUpdate(req.params.id, editCategory, {
    new: true, runValidators: true,
  });
  console.log(updatedCategory);


  res.status(200).json({
    success: true, data: updatedCategory,
  });

});

exports.removeCategory = asyncHeader(async (req, res, next) => {
    await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      massage: 'success delete',
    });
  },
);


