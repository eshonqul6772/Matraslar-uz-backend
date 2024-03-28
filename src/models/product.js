const mongoose = require('mongoose');
const { STATUS_TYPE } = require('../utils/constants');

const reqString = { type: String, require: true }

const productSchema = new mongoose.Schema({
  name: reqString,
  images: reqString,
  weight: reqString,
  warranty:reqString,
  size: reqString,
  capacity:reqString,
  description: reqString,
  cost: reqString,
  newCost: reqString,
  discount:reqString,
  new:reqString,
  status: {
    type: String,
    enum: Object.values(STATUS_TYPE),
    default: STATUS_TYPE.ACTIVE,
  },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],

}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Product', productSchema)