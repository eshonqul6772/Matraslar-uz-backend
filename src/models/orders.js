const mongoose = require('mongoose');
const { STATUS_TYPE } = require('../utils/constants');

const reqString = { type: String, require: true }

const orderSchema = new mongoose.Schema({
  name: reqString,
  phone: reqString,
  productName: reqString,
  count: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(STATUS_TYPE),
    default: STATUS_TYPE.ACTIVE,
  },

}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Orders', orderSchema);