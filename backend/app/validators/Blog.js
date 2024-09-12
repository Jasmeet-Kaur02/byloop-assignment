const Joi = require("joi");
const User = require("../database/schemas/users");
const Blog = require("../database/schemas/blogs");
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const validateUser = async (value) => {
  const error = new Error();
  error.customMessage = "Selected author is invalid.";
  if (!ObjectId.isValid(value)) {
    throw error;
  }
  const user = await User.findById(value);

  if (!user) {
    throw error;
  }
};

const validateBlog = async (value) => {
  const error = new Error();
  error.customMessage = "Selected blog is invalid.";
  if (!ObjectId.isValid(value)) {
    throw error;
  }
  const blog = await Blog.findById(value);

  if (!blog) {
    throw error;
  }
};

const createValidation = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Title should be string.",
    "string.empty": "Title should not be empty.",
    "any.required": "Title is required.",
  }),
  content: Joi.string().required().messages({
    "string.base": "Content should be string.",
    "string.empty": "Content should not be empty.",
    "any.required": "Content is required.",
  }),
  authorId: Joi.string()
    .required()
    .messages({
      "any.required": "Author id is required.",
    })
    .external(validateUser),
});

const updateValidation = Joi.object({
  title: Joi.string().optional().allow(null).messages({
    "string.base": "Title should be string.",
    "string.empty": "Title should not be empty.",
  }),
  content: Joi.string().optional().allow(null).messages({
    "string.base": "Content should be string.",
    "string.empty": "Content should not be empty",
  }),
  blogId: Joi.string()
    .required()
    .messages({
      "any.required": "Blog id is required.",
    })
    .external(validateBlog),
});

const deleteValidation = Joi.object({
  blogId: Joi.string()
    .required()
    .messages({
      "any.required": "Blog id is required.",
    })
    .external(validateBlog),
});

module.exports = {
  createValidation,
  updateValidation,
  deleteValidation,
};
