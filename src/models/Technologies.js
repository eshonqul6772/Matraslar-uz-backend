const mongoose = require("mongoose");
const { STATUS_TYPE } = require('../utils/constants');


const reqString = { type: String, required: true };

const TechnologySchema = new mongoose.Schema({
    name: reqString,
    thumbnail: reqString,
    link: reqString,
    description: reqString,
    status: {
        type: String,
        enum: Object.values(STATUS_TYPE),
        default: STATUS_TYPE.ACTIVE,
    },

}, { timestamps: true, });


module.exports = mongoose.model("Technology", TechnologySchema);