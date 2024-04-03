const mongoose = require('mongoose');

const { STATUS_TYPE } = require('../utils/constants');


const reqString = { type: String, require: true };

const categoriesSchema = new mongoose.Schema({
  category: { ...reqString, unique: true },
  
  status: {
    type: String,
    enum: Object.values(STATUS_TYPE),
    default: STATUS_TYPE.ACTIVE,
  },
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Category', categoriesSchema);