'use strict';
const { check } = require('express-validator');

const regUserRules = [
  check('name')
    .notEmpty().withMessage('name cannot be empty')
    .isString().withMessage('name should be string only')
    .isLength({
      min: 5,
      max: 12
    }).withMessage('Name must be at least 5 characters long and string'),

  check('email').isEmail().withMessage('must be in email format')
    .notEmpty().withMessage('field email cannot be empty'),

  check('password').isLength({
    min: 8,
    max: 20
  }).withMessage('Password must be at least 8 characters long and maximum 20')
    .notEmpty().withMessage('Password cannot be empty'),
];

const loginUserRules = [
  check('email').isEmail().withMessage('must be in email format')
    .notEmpty().withMessage('field email cannot be empty'),

  check('password').isLength({
    min: 8,
    max: 20
  }).withMessage('Password must be at least 8 characters long and maximum 20')
    .notEmpty().withMessage('Password cannot be empty'),
];

const portfolioRules = [
  check('name')
    .notEmpty().withMessage('name cannot be empty')
    .isString().withMessage('name should be string only')
    .isLength({
      min: 5,
      max: 12
    }).withMessage('Name must be at least 5 characters long and string')
];

const uploadRules = [
  check('id').exists().withMessage('id is required')
    .notEmpty().withMessage('id cannot be empty')
    .isNumeric().withMessage('must be number'),
  check('name').isString().withMessage('name should be string only')
    .notEmpty().withMessage('name cannot be empty')
];

const deleteRules = [
  check('id').exists().withMessage('id is required')
    .notEmpty().withMessage('id cannot be empty')
    .isNumeric().withMessage('must be number'),
];

module.exports = {
  regUserRules,
  loginUserRules,
  portfolioRules,
  uploadRules,
  deleteRules
};
