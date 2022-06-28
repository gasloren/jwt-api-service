const { body } = require('express-validator');

// -----------------------------------------

const validToken = [
  body('token').exists(),
  body('token').isString(),
  body('token').notEmpty()
];

module.exports = validToken;