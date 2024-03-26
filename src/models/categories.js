const mongoose = require('mongoose');

const reqString = {type:String, require:true}


const categoriesSchema = new mongoose.Schema({
  category: reqString,
   status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default:"ACTIVE"
  }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Category', categoriesSchema);