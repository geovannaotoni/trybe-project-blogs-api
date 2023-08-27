const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const errorMessage = 'Ocorreu um erro';

const create = async (req, res) => {
  try {
    const { status, data } = await postService.create(req.user, req.body);

    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

const getAll = async (req, res) => {
  try {
    const { status, data } = await postService.getAll();

    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await postService.getById(id);

    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const { status, data } = await postService.update(id, req.body, userId);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const { status, data } = await postService.remove(id, userId);
    if (data) return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).end();
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

const search = async (req, res) => {
  try {
    const { q } = req.query;
  
    const { status, data } = await postService.search(q);
  
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  search,
};