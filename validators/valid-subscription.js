const { body } = require('express-validator');

// -----------------------------------------

const validSubscription = [
  body('subscription').exists(),
  body('subscription').isObject(),
  body('subscription').notEmpty()
];

module.exports = validSubscription;