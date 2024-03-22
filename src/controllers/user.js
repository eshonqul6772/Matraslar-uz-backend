const ErrorResponse  = require('../utils/ErrorResponse');
const asyncHandler = require('../middlewares/async');

const User = require('../models/user');

exports.createUser = asyncHandler(async (req, res, next)=>{
    const {firstName, lastName, username, password} = req.body;

    if (!firstName ||!lastName ||!username ||!password) {
        return next(new ErrorResponse('Please provide first name, last name, username and password', 400));
    }

    const user = await User.findOne({username});

    if (user) {
        return next(new ErrorResponse('User already exists', 400));
    }

    const newUser = new User({
        firstName,
        lastName,
        username,
        password
    });

    const savedUser = await newUser.save();

    res.status(201).json({
        success: true,
        data: savedUser
    })
})

async function user() {
    try {
        const existingUser = await User.findOne({username: 'admin'});
        if (!existingUser) {
            const newUser = new User({
                firstName: 'John',
                lastName: "Don",
                username: 'admin',
                password: 'admin',
            });
            await newUser.save();
        }
    } catch (error) {
        console.error('Error initializing users:', error);
    }
}

module.exports = user;
