const routes = require('express').Router();
const publicRoutes = require('./publicRoutes');

routes.use('/public', publicRoutes);

module.exports = routes;
