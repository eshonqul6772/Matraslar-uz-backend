const orderRoutes = require('./orders');
const contactRoutes = require('./contact');
const categoryRoutes = require('./category');
const technologyRoutes = require('./technology');
const productRoutes = require('./prdocut');
const bannerRoutes = require('./banner');
const locationRoutes = require('./location');
const imageRoutes = require('./images')


module.exports = [
  orderRoutes,
  contactRoutes,
  categoryRoutes,
  technologyRoutes,
  productRoutes,
  bannerRoutes,
  locationRoutes,
  imageRoutes
];