const route = require('express').Router();
const { categoriesController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateToken, categoriesController.create);

module.exports = route;