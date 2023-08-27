const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const { status, data } = await userService.create(req.body);

  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await userService.getAll();

  res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);

  res.status(mapStatusHTTP(status)).json(data);
};

const remove = async (req, res) => {
  const { userId } = req.user;
  const { status } = await userService.remove(userId);

  // if (data) return res.status(mapStatusHTTP(status)).json(data);
  return res.status(mapStatusHTTP(status)).end();
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
};