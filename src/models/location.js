const mongoose =  require("mongoose");

 const reqString = {type:String, required:true};

 const locationSchema = new mongoose.Schema({
        address:reqString,
        images:reqString,
        location:reqString,
        description:reqString,
        status:{
            type:String,
            enum:["ACTIVE", "INACTIVE"],
            default:"ACTIVE"
        }
 }, {timestamps:true, versionKey:false});

 module.exports = mongoose.model("Location", locationSchema)

