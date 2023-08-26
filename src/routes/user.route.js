const route = require('express').Router();
const { userController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.post('/', userController.create);
route.get('/', validateToken, userController.getAll);

module.exports = route;