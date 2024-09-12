const Joi = require("joi");

const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

const registerValidation = Joi.object({
  fullName: Joi.string().required().messages({
    "any.required": "Full name is required.",
    "string.empty": "Full name should not be empty.",
    "string.base": "Full name should be string.",
  }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.empty": "Email should be empty.",
    "string.pattern.base": "Email is invalid.",
    "any.required": "Email is required.",
  }),
  password: Joi.string().min(8).required().messages({
    "any.required": "Password is required.",
    "string.empty": "Password cannot be empty.",
    "string.min": "Password should contain minimum 8 characters.",
  }),
});

const loginValidation = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.empty": "Email should be empty.",
    "string.pattern.base": "Email is invalid.",
    "any.required": "Email is required.",
  }),
  password: Joi.string().min(8).required().messages({
    "any.required": "Password is required.",
    "string.empty": "Password cannot be empty.",
    "string.min": "Password should contain minimum 8 characters.",
  }),
});

module.exports = {
  registerValidation,
  loginValidation,
};
