const mongoose = require('mongoose');


const categoriesSchema = new mongoose.Schema({
  category: {
    type: String, require: true,
  }, status: {
    type: String,
    enum:["ACTIVE","INACTIVE"],
    default: true
  }
}, { timestamps: true , versionKey:false});

module.exports = mongoose.model('Category', categoriesSchema);