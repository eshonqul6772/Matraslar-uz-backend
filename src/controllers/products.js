const Product = require('../models/product');
const Category = require('../models/categories');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middlewares/async');


exports.createProduct = asyncHandler(async (req, res, next) => {
  const category = await Category.findOne({ category: req.body.category });

  if(!category){
    next(new ErrorResponse('category nod found', 403))
  }


  const newProduct =await Product.create({
    name:req.body.name,
    category: category._id,
    images: '/uploads' + req.file.filename,
    weight:req.body.weight,
    warranty:req.body.warranty,
    size:req.body.size,
    capacity:req.body.capacity,
    description:req.body.description,
    cost:req.body.cost,
    newCost:req.body.newCost,
    discount:req.body.discount,
    new:req.body.new,
    status:req.body.status,
  });
  

  res.status(201).json({
    success: true, products: newProduct,
  });
});


exports.getProduct = asyncHandler(async (req, res) => {
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
    products: products,
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
    name:req.body.name,
    category: category._id,
    images: '/uploads' + req.file.filename,
    weight:req.body.weight,
    warranty:req.body.warranty,
    size:req.body.size,
    capacity:req.body.capacity,
    description:req.body.description,
    cost:req.body.cost,
    newCost:req.body.newCost,
    discount:req.body.discount,
    new:req.body.new,
    status:req.body.status,
  };

  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, editProduct, {
    new: true, runValidators: true,
  });


  res.status(200).json({
    success: true, products: updatedProduct,
  });

});


exports.removeProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true, massage: 'success delete',
  });
});


