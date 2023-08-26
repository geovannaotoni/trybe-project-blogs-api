const validation = require('./validations/validationPostValues');
const { sequelize, BlogPost, PostCategory } = require('../models');

const create = async (payload, post) => {
  const error = await validation.validateNewPost(post);
  if (error) return { status: error.status, data: { message: error.message } };

  const { userId } = payload;
  const { title, content, categoryIds } = post;

  const result = await sequelize.transaction(async (t) => {
    const blogPost = await BlogPost.create({ title, content, userId }, { transaction: t });

    const postCategories = categoryIds.map((categoryId) => ({
      postId: blogPost.id,
      categoryId,
    }));
    await PostCategory.bulkCreate(postCategories, { transaction: t });
  
    return blogPost;
  });

  return { status: 'CREATED', data: result };
};

module.exports = {
  create,
};