const { body } = require('express-validator');

// -----------------------------------------

const validData = [
  body('data').exists(),
  body('data').notEmpty(),
  body('data').isObject()
];

module.exports = validData;