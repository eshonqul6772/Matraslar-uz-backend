const jwt = require('jsonwebtoken');

const asyncHandler = require('./async');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../models/user');

exports.protected = asyncHandler(async (req, res, next) => { 
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return next(new ErrorResponse('No token provided', 401))
    }

    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return next(new ErrorResponse('Invalid token', 401))
        }

        req.userId = decoded.id
        next()
    })

    
})
