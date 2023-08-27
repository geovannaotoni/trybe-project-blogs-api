const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  try {
    const { status, data } = await userService.create(req.body);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getAll = async (req, res) => {
  try {
    const { status, data } = await userService.getAll();
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await userService.getById(id);
  
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const remove = async (req, res) => {
  try {
    const { userId } = req.user;
    const { status } = await userService.remove(userId);
  
    // if (data) return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).end();
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
};