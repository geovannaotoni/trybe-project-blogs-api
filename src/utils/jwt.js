const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const createToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
  
  return token;
};

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  createToken,
  extractToken,
  verifyToken,
};