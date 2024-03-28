const mongoose = require('mongoose');
const { STATUS_TYPE } = require('../utils/constants');
400

const contactSchema = new mongoose.Schema({
  number:{
    type:String,
    required:true
  },
  status: {
    type: String,
    enum: Object.values(STATUS_TYPE),
    default: STATUS_TYPE.ACTIVE,
  },
}, {timestamp:true, versionKey:false});

module.exports = mongoose.model('Contact', contactSchema);

