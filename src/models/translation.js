const mongoose = require('mongoose');

const { LANG_TYPE, STATUS_TYPE } = require('../utils/constants');


const translationSchema = new mongoose.Schema({
  name: {
    type: Object, required: true,
  }, type: {
    type: String, enum: Object.values(LANG_TYPE), default: LANG_TYPE.ADMIN,
  }, tag: {
    type: String, require: true,
  }, status: {
    type: String, enum: Object.values(STATUS_TYPE), default: STATUS_TYPE.ACTIVE,
  },
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Translation', translationSchema);
