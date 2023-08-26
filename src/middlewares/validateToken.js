const { verifyToken, extractToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });
  
  const token = extractToken(bearerToken);
  
  try {
    verifyToken(token);
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};