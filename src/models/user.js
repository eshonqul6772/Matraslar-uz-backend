const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { STATUS_TYPE } = require('../utils/constants');

const reqString = { type: String, require: true };

const userSchema = new mongoose.Schema({
  firstName: reqString, lastName: reqString, username: {
    type: String, unique: true, required: true,
  }, password: {
    type: String, required: true, minlength: 4,
  }, role: {
    type: String, enum: ['ADMIN', 'USER'], required: true,
  }, status: {
    type: String, enum: Object.values(STATUS_TYPE), default: STATUS_TYPE.ACTIVE,
  },
}, { timestamps: true, versionKey: false });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.generateJwtToken = function() {
  return jwt.sign({ id: this._id, username: this.username }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);