const loginRoutes = require('./auth');
const usersRoutes = require('./user');
const orderRoutes = require('./orders');
const categoryRoutes = require("./category");
const productRoutes = require("./product");
const technologyRoutes = require('./tecnolgy')


module.exports = [
  loginRoutes,
  usersRoutes,
  orderRoutes,
  categoryRoutes,
  productRoutes,
  technologyRoutes
];