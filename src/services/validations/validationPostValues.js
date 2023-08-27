const { Category, BlogPost } = require('../../models');
const checkRequiredFields = require('../../utils/checkRequiredFields');

const validateCategories = async (categoryIds) => {
  const promises = categoryIds.map(async (id) => Category.findByPk(id));
  const categories = await Promise.all(promises);
  if (categories.includes(null)) {
    return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }
};

const validateNewPost = async (post) => {
  const errorFields = checkRequiredFields(post, ['title', 'content']);
  if (errorFields) return { status: 'BAD_REQUEST', message: errorFields };

  const { categoryIds } = post;
  if (!categoryIds || categoryIds.length === 0) {
    return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }

  return validateCategories(categoryIds);
};

const validateExistPost = async (postId, userId) => {
  const blogPost = await BlogPost.findByPk(postId);
  if (!blogPost) return { status: 'NOT_FOUND', message: 'Post does not exist' };

  if (blogPost && blogPost.userId !== userId) {
    return { status: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }
};

const validateUpdatePost = async (id, post, userId) => {
  const errorFields = checkRequiredFields(post, ['title', 'content']);
  if (errorFields) return { status: 'BAD_REQUEST', message: errorFields };

  return validateExistPost(id, userId);
};

module.exports = {
  validateNewPost,
  validateUpdatePost,
  validateExistPost,
};