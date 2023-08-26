const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const token = createToken({ userId: user.id, email });

  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  login,
};