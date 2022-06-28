const { body } = require('express-validator');

// -----------------------------------------

const validPayload = [
  body('payload').exists(),
  body('payload').isObject(),
  body('payload').notEmpty()
];

module.exports = validPayload;