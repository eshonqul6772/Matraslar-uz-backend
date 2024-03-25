const Product = require('../models/product');
const Category = require('../models/categories');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middlewares/async');


exports.createProduct = asyncHandler(async (req, res, next) => {
  const category = await Category.findOne({ name: req.body.name });
  const { productName, price, mess, size, status } = req.body;

  if (!category && !status) {
    next(ErrorResponse('invalid category or statusType', 400));
  }

  const newCategory = new Category({
    productName, price, mess, size, status,
  });

  const saveCategory = await newCategory.save();

  res.status(201).json({
    success: true, data: saveCategory,
  });
});

exports.getProduct = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);
  const total = await Product.countDocuments();

  const products = await Product.find()
    .skip((page * limit) - limit)
    .limit(limit);

  res.status(200).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: products,
  });
});

exports.getProductById = asyncHandler(async (req, res, next) => {
  const category = await Product.findById(req.params.id);
  if (!category) {
    return next(new ErrorResponse('Order not found', 404));
  }
  res.status(200).json({
    success: true, data: category,
  });
});


exports.updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorResponse('Order not found', 404));
  }

  const editProduct = {
    name: req.body.name, phone: req.body.phone, productName: req.body.productName, count: req.body.count,
  };

  const updatedProduct = await Category.findByIdAndUpdate(req.params.id, editProduct, {
    new: true, runValidators: true,
  });


  res.status(200).json({
    success: true, data: updatedProduct,
  });

});

exports.removeProduct = asyncHandler(async (req, res, next) => {
    await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      massage: 'success delete',
    });
  },
);


