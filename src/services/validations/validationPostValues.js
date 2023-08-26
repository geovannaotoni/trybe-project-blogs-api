const { Category } = require('../../models');

const validateCategories = async (categoryIds) => {
  const promises = categoryIds.map(async (id) => Category.findByPk(id));
  const categories = await Promise.all(promises);
  if (categories.includes(null)) {
    return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }
};

const validateNewPost = async (post) => {
  const { title, content, categoryIds } = post;

  if (!title || !content) {
    return { status: 'BAD_REQUEST', message: 'Some required fields are missing' };
  }

  if (!categoryIds || categoryIds.length === 0) {
    return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }

  return validateCategories(categoryIds);
};

module.exports = {
  validateNewPost,
};