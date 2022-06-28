const { body } = require('express-validator');

// -----------------------------------------

const validTitle = [
  body('title').exists(),
  body('title').isString(),
  body('title').notEmpty()
];

module.exports = validTitle;