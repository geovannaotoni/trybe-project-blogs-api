const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const { status, data } = await loginService.login(email, password);
    
    res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  login,
};