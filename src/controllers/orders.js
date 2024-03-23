const Orders = require('../models/orders');

const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middlewares/async');



exports.createOrder = asyncHandler(async (req, res, next) => {
    const { name, phone, productName, count } = req.body;

    if (!name || !phone || !productName || !count) {
        return next(new ErrorResponse('Please provide name, phone, productName and count', 400));
    }

    const newOrder = new Orders({
        name,
        phone,
        productName,
        count
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
        success: true,
        data: savedOrder
    })
});

exports.getOrders = asyncHandler(async (req, res, next) => {
    const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
    const limit = parseInt(req.query.limit || pageLimit);
    const page = parseInt(req.query.page || 1);
    const total = await Orders.countDocuments();

    const orders = await Orders.find()
        .skip((page * limit) - limit)
        .limit(limit);

    res.status(200).json({
        success: true,
        pageCount: Math.ceil(total / limit),
        currentPage: page,
        nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
        data: orders
    })
});

exports.getOrdertById = asyncHandler(async(req,res, next)=>{

    console.log(req.params.id)

    const order = await Orders.findById(req.params.id)
    if(!order){
        return next(new ErrorResponse('Order not found', 404))
    }
    res.status(200).json({
        success: true,
        data: order
    })
});

exports.updateOrder = asyncHandler(async (req, res, next) => {
    const order = await Orders.findById(req.params.id);

    if (!order) {
        return next(new ErrorResponse('Order not found', 404));
    }

    const editOrder = {
        name: req.body.name,
        phone: req.body.phone,
        productName: req.body.productName,
        count: req.body.count
    };

    const updatedOrder = await Orders.findByIdAndUpdate(req.params.id, editOrder, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: updatedOrder
    })

})


