const loginRoutes = require('./auth');
const usersRoutes = require('./user');
const orderRoutes = require('./orders');
const categoryRoutes = require("./category");
const productRoutes = require("./product")

module.exports = [
  loginRoutes,
  usersRoutes,
  orderRoutes,
  categoryRoutes,
  productRoutes
];