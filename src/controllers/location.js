const Location = require('../models/location');

const asyncHandler = require('../middlewares/async');


exports.createLocation = asyncHandler(async (req, res) => {

  const newLocation = await Location.create({
    address: req.body.address,
    images: '/uploads' + req.file.filename,
    location: req.body.location,
    description: req.body.description,
    status: req.body.status,
  });

  const saveLocation = await newLocation.save();

  res.status(201).json({
    success: true, data: saveLocation,
  });
});

exports.getLocation = asyncHandler(async (req,res,next)=>{
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1 );
  const total = await Location.countDocuments();

  const location = await Location.find()
    .skip((page*limit) - limit)
    .limit(limit)

  res.status(200).json({
    success:true,
    pageCount:Math.ceil(total/limit),
    currentPage: page,
    nextPage : Math.ceil(total/limit)< page+1 ? null : page+1,
    data:location
  })

});

exports.updateLocation = asyncHandler(async (req,res, next)=>{
  const editLocation = {
    address: req.body.address,
    location: req.body.location,
    description: req.body.description,
    status: req.body.status,
  }

  const updateLocation = await Location.findByIdAndUpdate(req.params.id, editLocation, {
    new:true
  })

  res.status(201).json({
    success:true,
    data:updateLocation
  })
});

exports.removeLocation = asyncHandler(async (req,res,next)=>{
  await  Location.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success:true,
    massage:"success deleted"
  })
})