'use strict';
const { body, cookie } = require('express-validator');

const regUserRules = [
  // Name must be provided
  body('name').isString().notEmpty().isLength({
    min: 5
  }).withMessage('Name must be at least 5 characters long and string'),

  // Email must be valid
  body('email').isEmail().notEmpty().withMessage('Invalid email'),

  // Password must be at least 8 characters long
  body('password').isLength({
    min: 8
  }).notEmpty().withMessage('Password must be at least 8 characters long'),
];

const loginUserRules = [
  // Email must be valid
  body('email').isEmail().notEmpty().withMessage('Invalid email'),

  // Password must be at least 8 characters long
  body('password').isLength({
    min: 8
  }).notEmpty().withMessage('Password must be at least 8 characters long'),
];

const logoutUserRules = [
  cookie('refreshToken').isString().notEmpty()
];

module.exports = {
  regUserRules,
  loginUserRules,
  logoutUserRules
};
