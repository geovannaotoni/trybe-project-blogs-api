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

const getAll = async () => {
  const data = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 'SUCCESSFUL', data };
};

const getById = async (id) => {
  const data = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!data) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

  return { status: 'SUCCESSFUL', data };
};

const remove = async (id) => {
  await User.destroy(
    { where: { id } },
  );
  return { status: 'DELETED' };
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
};