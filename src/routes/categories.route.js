const route = require('express').Router();
const { categoriesController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateToken, categoriesController.create);
route.get('/', validateToken, categoriesController.getAll);

module.exports = route;