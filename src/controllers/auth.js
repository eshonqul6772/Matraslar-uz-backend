const User = require('../models/user');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middlewares/async');


exports.loginUser = asyncHandler(async (req, res, next) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return next(new ErrorResponse('Please provide username and password'));
    }

    const user = await User.findOne({username});
    const isMatch = await user.matchPassword(password);

    if (!user && isMatch) {
        return next(new ErrorResponse('Invalid Credentials', 401));
    }
    const token = user.generateJwtToken();
    
    res.status(200).json({
        success: true,
        data: user, 
        token
    })
})
