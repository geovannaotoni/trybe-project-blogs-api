const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
  const { status, data } = await postService.create(req.user, req.body);

  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  create,
};