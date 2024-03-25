const User = require('../models/user');

const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middlewares/async');

exports.createUser = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, username, password, role } = req.body;

  if (!firstName || !lastName || !username || !password || !role) {
    return next(new ErrorResponse('Please provide first name, last name, username and password', 400));
  }

  const user = await User.findOne({ username });

  if (user) {
    return next(new ErrorResponse('User already exists', 400));
  }

  const newUser = new User({
    firstName, lastName, username, password, role,
  });

  const savedUser = await newUser.save();

  res.status(201).json({
    success: true, data: savedUser,
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);
  const total = await User.countDocuments();

  const users = await User.find()
    .skip((page * limit) - limit)
    .limit(limit);

  res.status(200).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: users,
  });

});
