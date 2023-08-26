const route = require('express').Router();

const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateToken, postController.create);
route.get('/', validateToken, postController.getAll);

module.exports = route;