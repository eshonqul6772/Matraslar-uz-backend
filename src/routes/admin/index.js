const loginRoutes = require('./auth');
const usersRoutes = require('./user');
const orderRoutes = require('./orders');
const categoryRoutes = require('./category');
const productRoutes = require('./product');
const technologyRoutes = require('./technology');
const locationRoutes = require('./location');
const contactRoutes = require('./conatct');
const bannerRoutes = require('./banner');
const transitionRoutes =  require('./translation')


module.exports = [
  loginRoutes,
  usersRoutes,
  orderRoutes,
  categoryRoutes,
  productRoutes,
  technologyRoutes,
  locationRoutes,
  contactRoutes,
  bannerRoutes,
  transitionRoutes
];