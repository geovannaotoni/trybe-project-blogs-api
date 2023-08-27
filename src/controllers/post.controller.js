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

const update = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  
  const { status, data } = await postService.update(id, req.body, userId);

  res.status(mapStatusHTTP(status)).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  const { status, data } = await postService.remove(id, userId);
  if (data) return res.status(mapStatusHTTP(status)).json(data);
  return res.status(mapStatusHTTP(status)).end();
};

const search = async (req, res) => {
  const { q } = req.query;

  const { status, data } = await postService.search(q);

  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  search,
};