const mongoose = require("mongoose");


const reqString = { type: String, required: true };

const TecnolgySchema = new mongoose.Schema({
    name: reqString,
    thumbnail: reqString,
    link: reqString,
    description: reqString,
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "AVTIVE",

    }

}, { timestamps: true, });


module.exports = mongoose.model("Tecnolgy", TecnolgySchema);