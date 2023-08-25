const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await loginService.login(email, password);
  
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
};