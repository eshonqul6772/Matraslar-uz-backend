const mongoose = require('mongoose');

const { STATUS_TYPE,IMAGE_MODEL_OBJECT } = require('../utils/constants');

const reqString = { type: String, required: true };

const bannerSchema = new mongoose.Schema({
  title: reqString, images: IMAGE_MODEL_OBJECT, status: {
    type: String, enum: Object.values(STATUS_TYPE), default: STATUS_TYPE.ACTIVE,
  },
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Banner', bannerSchema);


