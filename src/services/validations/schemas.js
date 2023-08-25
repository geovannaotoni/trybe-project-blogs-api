const Joi = require('joi');

const addUserSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string(),
  password: Joi.string().min(6),
  image: Joi.string().optional(),
});

module.exports = addUserSchema;