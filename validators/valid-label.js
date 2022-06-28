const { body } = require('express-validator');

// -----------------------------------------

const validLabel = [
  body('label').exists(),
  body('label').isString(),
  body('label').notEmpty()
];

module.exports = validLabel;