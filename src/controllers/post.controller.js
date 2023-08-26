const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const { status, data } = await postService.create(req.user, req.body);

  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await postService.getAll();

  res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getById(id);
  
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
};