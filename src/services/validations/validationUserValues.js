const addUserSchema = require('./schemas');
const { User } = require('../../models');

const validateNewUser = async (user) => {
  const { error } = addUserSchema.validate(user);

  if (error) return { status: 'BAD_REQUEST', message: error.message };

  const { email } = user;
  const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  const validEmail = regexEmail.test(email);
  if (!validEmail) return { status: 'BAD_REQUEST', message: '"email" must be a valid email' };

  const userExists = await User.findOne({ where: { email } });
  if (userExists) return { status: 'CONFLICT', message: 'User already registered' };
};

module.exports = {
  validateNewUser,
};