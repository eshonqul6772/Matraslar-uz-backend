const Joi = require('joi');
const { STATUS_TYPE } = require('../utils/constants');

exports.carouselSchema = Joi.object({
  title: Joi.string().not(''),
  images: Joi.object().not(''),
  status: Joi.string().valid(...Object.values(STATUS_TYPE)),
});

exports.statisticsSchema = Joi.object({
  experience: Joi.number().not(''),
  clients: Joi.string().not(''),
  warranty: Joi.number().not(''),
  delivery: Joi.number().not(''),
});

exports.ordersSchema = Joi.object({
  name: Joi.string().not(''),
  number: Joi.string().min(9),
  productName: Joi.string().not(''),
  count: Joi.number().not(''),
});

exports.contactSchema = Joi.object({
  number: Joi.string().min(9),
});

exports.categorySchema = Joi.object({
  category: Joi.string().not('').min(3).max(30),
  status: Joi.string().valid(...Object.values(STATUS_TYPE)).not(''),
});

exports.productsSchema = Joi.object({
  name: Joi.string().not(''),
  category: Joi.string().not(''),
  images: Joi.string().min(3).not(''),
  weight: Joi.string().not(''),
  warranty: Joi.string().not(''),
  size: Joi.string().min(3).not(''),
  capacity: Joi.string().not(''),
  description: Joi.string().not(''),
  cost: Joi.string().not(''),
  newCost: Joi.string().not(''),
  discount: Joi.string().not(''),
  new: Joi.string().not(''),
  status: Joi.string().valid(...Object.values(STATUS_TYPE)).not(''),
});

exports.technologySchema = Joi.object().keys({
  name: Joi.string().min(3).not(''),
  thumbnail: Joi.string().min(3).not(''),
  link: Joi.string().not(''),
  description: Joi.string().min(5).not(''),
  status: Joi.string().valid(...Object.values(STATUS_TYPE)).not(''),
});

exports.addressSchema = Joi.object().keys({
  location: Joi.string().min(3).not(''),
  description: Joi.string().min(3).not(''),
  geolocation: Joi.string().min(3).not(''),
  images: Joi.string().min(3).not(''),
  status: Joi.string().valid(...Object.values(STATUS_TYPE)).not(''),
});

exports.loginSchema = Joi.object({
  username: Joi.string().not('').required(), password: Joi.string(),
});