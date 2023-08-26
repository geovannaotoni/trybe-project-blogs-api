const { Category, BlogPost } = require('../../models');

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

const validateUpdatePost = async (id, post, userId) => {
  const { title, content } = post;

  if (!title || !content) {
    return { status: 'BAD_REQUEST', message: 'Some required fields are missing' };
  }

  const blogPost = await BlogPost.findByPk(id);

  // essa verificação já é feita no service
  // if (!blogPost) return { status: 'NOT_FOUND', message: 'Post does not exist' };

  if (blogPost && blogPost.userId !== userId) {
    return { status: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }
};

module.exports = {
  validateNewPost,
  validateUpdatePost,
};