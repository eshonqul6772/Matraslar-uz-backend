const Location =  require("../models/categories");

const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middlewares/async");
const categories = require("../models/categories");

exports.createLocation  = asyncHandler(async (req,res,next)=>{

    const {address, location,descrition,status} = req.body;
    
    if(!address && !location && !descrition && !status){
        next(new ErrorResponse("invalid data" , 400))
    }

    const newLocation = await Location.create({
        address:req.body.address,
        images: '/uploads' + req.file.filename,
        location:req.body.location,
        descrition:req.location.descrition,
        status:req.location.status
    });

      res.status(201).json({
        success: true, data: newLocation,
      });
});