const Technology = require("../models/technology");

const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require('../middlewares/async');

exports.createTechnology = asyncHandler(async (req, res, next) => {

    const { name, thumbnail, link, description, status } = req.body;

    if (!name && !thumbnail && !link) {
        next(new ErrorResponse("invalid plaoud data", 400));
    }

    const newTechnology = new Technology({
        name,
        thumbnail,
        link,
        description,
        status
    })

    const saveTechnology = await newTechnology.save()

    res.status(201).json({
        success: true,
        data: saveTechnology
    })
});

exports.getTechnology = asyncHandler(async (req, res, next) => {
    const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
    const limit = parseInt(req.query.limit || pageLimit);
    const page = parseInt(req.query.page || 1);
    const total = await Technology.countDocuments();

    const products = await Technology.find()
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


exports.getTechnologyById = asyncHandler(async (req, res, next) => {
    const technology = await Technology.findById(req.params.id);

    res.status(200).json({
        success: true,
        data: technology
    })
});

exports.updateTechnology = asyncHandler(async (req, res, next)=>{
    const technology = await Technology.findById(req.params.id);

    const editTechnology = {
        name:req.body.name,
        thumbnail:req.body.thumbnail,
        link:req.body.link,
        description:req.body.description,
        status:req.body.status
    };

    const updatechnology = await Technology.findByIdAndUpdate(req.params.id, editTechnology, {
            new:true
    });

    res.status(201).json({
        success:true,
        data:updatechnology
    })
});

exports.removeTechnology = asyncHandler(async (req, res, next)=>{
    const echnology = await Technology.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success:true,
        message: 'success delete'
    })
})
