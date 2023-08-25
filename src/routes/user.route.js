const route = require('express').Router();
const { userController } = require('../controllers');

route.post('/', userController.create);

module.exports = route;