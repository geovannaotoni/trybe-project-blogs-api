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

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };

  return { status: 'SUCCESSFUL', data: post };
};

const update = async (postId, post, userId) => {
  const error = await validation.validateUpdatePost(postId, post, userId);
  if (error) return { status: error.status, data: { message: error.message } };

  const { title, content } = post;
  await BlogPost.update(
    { title, content },
    { where: { id: postId } },
  );

  return getById(postId);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};