const mongoose = require('mongoose');

const reqString = { type: String, require: true }

const productSchema = new mongoose.Schema({
  name: reqString,
  weight: reqString,
  images: reqString,
  size: reqString,
  description: reqString,
  cost: reqString,
  newCost: reqString,
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
  },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],

}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Product', productSchema)