const validation = require('./validations/validationPostValues');
const { sequelize, BlogPost, PostCategory, User, Category } = require('../models');

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

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  create,
  getAll,
};