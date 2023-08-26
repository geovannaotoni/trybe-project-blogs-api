const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const { status, data } = await categoriesService.create(req.body);
  
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
};