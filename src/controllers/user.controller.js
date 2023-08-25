const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const { status, data } = await userService.create(req.body);

  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
};