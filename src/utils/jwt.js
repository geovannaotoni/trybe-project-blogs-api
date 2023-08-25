const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

// const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const createToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
  
  return token;
};

module.exports = {
  createToken,
};