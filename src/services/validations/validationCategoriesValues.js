const validateNewCategory = async (category) => {
  const { name } = category;

  if (!name) return { status: 'BAD_REQUEST', message: '"name" is required' };
};

module.exports = {
  validateNewCategory,
};