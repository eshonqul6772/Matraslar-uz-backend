const Category = require('../models/categories');

const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middlewares/async');


exports.createCategory = asyncHandler(async (req, res) => {

  const newCategory = new Category({
    category:req.body.category,
    status:req.body.status,
  });

  const saveCategory = await newCategory.save();

  res.status(201).json({
    success: true,
    category: saveCategory,
  });
});

exports.getCategory = asyncHandler(async (req, res) => {
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
    category: category,
  });
});

exports.getCategoryById = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorResponse('Category not found', 404));
  }
  res.status(200).json({
    success: true,
    category: category,
  });
});


exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorResponse('Order not found', 400));
  }

  const editCategory = {
    category:req.body.category,
    status:req.body.status
  };

  const updatedCategory = await Category.findByIdAndUpdate(req.params.id, editCategory, {
    new: true, runValidators: true,
  });

  res.status(200).json({
    success: true,
    category: updatedCategory,
  });

});

exports.removeCategory = asyncHandler(async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      massage: 'success delete',
    });
  },
);


