const mongoose =  require("mongoose");
const { STATUS_TYPE } = require('../utils/constants');

 const reqString = {type:String, required:true};

 const locationSchema = new mongoose.Schema({
        address:reqString,
        images:reqString,
        location:reqString,
        description:reqString,
   status: {
     type: String,
     enum: Object.values(STATUS_TYPE),
     default: STATUS_TYPE.ACTIVE,
   },
 }, {timestamps:true, versionKey:false});

 module.exports = mongoose.model("Location", locationSchema)

