const mongoose = require('mongoose');

const {IMAGE_MODEL_OBJECT} = require('../utils/constants')


const imageSchema = new mongoose.Schema(IMAGE_MODEL_OBJECT, { timestamps: true, versionKey: false });

module.exports = mongoose.model('File', imageSchema);