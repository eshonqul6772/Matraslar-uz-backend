const asyncHandler = require('./async');

exports.chekIsAuthe = asyncHandler(async (req, res, next) => {
  const authorization = req.header.authorization;

  if (!authorization) {
    console.log('not token');
  }

  next();
});