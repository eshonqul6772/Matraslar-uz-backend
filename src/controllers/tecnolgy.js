const Tecnolgy = require("../models/Technologies");

const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require('../middlewares/async');

exports.createTecnolgy = asyncHandler(async (req, res, next) => {

    const { name, thumbnail, link, description, status } = req.body;

    if (!name && !thumbnail && !link) {
        next(new ErrorResponse("invalid plaoud data", 400));
    }

    const newTecnolgy = new Tecnolgy({
        name,
        thumbnail,
        link,
        description,
        status
    })

    const saveTecnolgy = await newTecnolgy.save()

    res.status(201).json({
        success: true,
        data: saveTecnolgy
    })
});

exports.getTecnolgy = asyncHandler(async (req, res, next) => {
    const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
    const limit = parseInt(req.query.limit || pageLimit);
    const page = parseInt(req.query.page || 1);
    const total = await Tecnolgy.countDocuments();

    const products = await Tecnolgy.find()
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


exports.getTecnolgyById = asyncHandler(async (req, res, next) => {
    const tecnolgy = await Tecnolgy.findById(req.params.id);

    console.log(req.params.id)

    if (!tecnolgy) {
        next(new ErrorResponse("No data found with this id", 404))
    }

    res.status(200).json({
        success: true,
        data: tecnolgy
    })
});

exports.updateTecnolgy = asyncHandler(async (req,res,next)=>{
    const tecnolgy = await Tecnolgy.findById(req.params.id);

    if(!tecnolgy){
        next(new ErrorResponse("No data found with this id", 404))
    };

    const editTecnolgy = {
        name:req.body.name,
        thumbnail:req.body.thumbnail,
        link:req.body.link,
        description:req.body.description,
        status:req.body.status
    };

    const updateTecnolgy = await Tecnolgy.findByIdAndUpdate(req.params.id, editTecnolgy, {
            new:true
    });

    res.status(201).json({
        success:true,
        data:updateTecnolgy
    })
});

exports.removeTecnolgy = asyncHandler(async (req,res, next)=>{
    const tecnolgy = await Tecnolgy.findByIdAndDelete(req.params.id);

    if(!tecnolgy){
        next(new ErrorResponse("No data found with this id", 404))
    };

    res.status(200).json({
        success:true,
        message: 'success delete'
    })
})
