const User = require('../models/user');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middlewares/async');

exports.register = asyncHandler(async (req, res, next) => {
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


exports.loginUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  const isMatch = await user.matchPassword(password);

  if (!user && isMatch) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }
  const token = user.generateJwtToken();

  res.status(200).json({
    success: true, data: user, token,
  });
});
