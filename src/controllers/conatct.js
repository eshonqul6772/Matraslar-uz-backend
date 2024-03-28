const Contact = require('../models/contact');
const asyncHandler = require('../middlewares/async');


exports.getContact = asyncHandler(async (req, res) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
  const limit = (req.params.limit || pageLimit);
  const page = (req.params.page || 1);
  const total = await Contact.countDocuments();


  const contact = await Contact.find()
    .skip((page * limit) - limit)
    .limit(limit);

  res.status(200).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: contact,
  });
});


exports.createContact = asyncHandler(async (req, res) => {
  const newContact = await new Contact({
    number: req.body.number,
  });

  const saveContact = await newContact.save();

  res.status(200).json({
    success: true, data: saveContact,
  });
});


exports.removeContact = asyncHandler(async (req,res)=>{
    await Contact.findByIdAndDelete(req.params.id)

    res.status(201).json({
      success:true,
      message:'success delete'
    })
})