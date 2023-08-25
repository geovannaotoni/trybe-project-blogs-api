const validation = require('./validations/validationUserValues');
const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const create = async (user) => {
  const error = await validation.validateNewUser(user);

  if (error) return { status: error.status, data: { message: error.message } };

  const { displayName, email, password, image } = user;
  await User.create({ displayName, email, password, image });
  const token = createToken({ email });

  return { status: 'CREATED', data: { token } };
};

module.exports = {
  create,
};