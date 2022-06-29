const { body } = require('express-validator');

// -----------------------------------------

const validExpDays = [
  body('expDays').exists(),
  body('expDays').isInt(),
  body('expDays').toInt()
];

module.exports = validExpDays;