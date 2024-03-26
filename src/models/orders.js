const mongoose = require('mongoose');

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
    enum: ["ACTIVE", "INACTIVE"],
    default: "ACTIVE"
  }

}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Orders', orderSchema);