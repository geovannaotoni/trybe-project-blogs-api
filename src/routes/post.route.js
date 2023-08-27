const route = require('express').Router();

const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateToken, postController.create);
route.get('/', validateToken, postController.getAll);
route.get('/:id', validateToken, postController.getById);
route.put('/:id', validateToken, postController.update);
route.delete('/:id', validateToken, postController.remove);

module.exports = route;