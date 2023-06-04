'use strict';
const { validationResult } = require('express-validator');


module.exports = function(req, res, next) {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return validation errors to the client
    return res.status(400).json({ errors: errors.array() });
  }

  // No validation errors, proceed to the next middleware
  next();
};

