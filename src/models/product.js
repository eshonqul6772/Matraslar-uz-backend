const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: {
    type: String,
    required: true,
  },
  mess: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum:["ACTIVE","INACTIVE"],
    default: true
  }
},{timestamps: true, versionKey:false});

module.exports = mongoose.model('Product', productSchema)