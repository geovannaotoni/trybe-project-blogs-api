const { Category } = require('../models');
const validation = require('./validations/validationCategoriesValues');

const create = async (category) => {
  const error = await validation.validateNewCategory(category);

  if (error) return { status: error.status, data: { message: error.message } };

  const { name } = category;
  const newCategory = await Category.create({ name });
  return { status: 'CREATED', data: newCategory };
};

module.exports = {
  create,
};