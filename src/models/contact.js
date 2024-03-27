const mongoose = require('mongoose');400

const contactSchema = new mongoose.Schema({
  number:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:['ACTIVE', "INACTIVE"],
    default: 'ACTIVE'
  }
}, {timestamp:true, versionKey:false});

module.exports = mongoose.model('Contact', contactSchema);

