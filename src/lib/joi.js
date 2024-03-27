const Joi = require('joi');

exports.carouselSchema = Joi.object({
  title: Joi.string().not(''),
});

exports.statisticsSchema = Joi.object({
  experience: Joi.number().not(''),
  clients: Joi.string().not(''),
  warranty: Joi.number().not(''),
  delivery: Joi.number().not(''),
});

exports.ordersSchema = Joi.object({
  name: Joi.string().not(''),
  number: Joi.string().min(9).required(),
  productName: Joi.string().not(''),
  count: Joi.number().not(''),
});

exports.contactSchema = Joi.object({
  number: Joi.string().min(9).required(),
});

exports.categorySchema = Joi.object({
  category: Joi.string().not('').min(3).max(30), status: Joi.string().not(''),
});


exports.productsSchema = Joi.object().keys({
  name: Joi.string().required(),
  category: Joi.string().required(),
  images: Joi.string().min(3).not(''),
  weight: Joi.number().not(''),
  warranty: Joi.string().not(''),
  size: Joi.string().min(3).not(''),
  capacity: Joi.number().not(''),
  body: Joi.string().not(''),
  cost: Joi.number().not(''),
  newCost: Joi.number().empty(''),
  discount: Joi.string(),
  new: Joi.string(),
  status: Joi.string(),
});

exports.technologySchema = Joi.object().keys({
  name: Joi.string().min(3).not(''),
  thumbnail: Joi.string().min(3).not(''),
  link: Joi.string().not(''),
  description: Joi.string().min(5).not(''),
  status: Joi.boolean().not(''),
});

exports.addressSchema = Joi.object().keys({
  location: Joi.string().min(3).not(''),
  description: Joi.string().min(3).not(''),
  geolocation: Joi.string().min(3).not(''),
  images: Joi.string().min(3).not(''),
  status: Joi.string(),
});

exports.loginSchema = Joi.object({
  username: Joi.string().not('').required(), password: Joi.string(),
});