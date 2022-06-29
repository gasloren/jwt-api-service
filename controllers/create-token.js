const jwt = require('jsonwebtoken');

// --------------------------------------------

const createToken = (tokenData, expDays = 60) => {

  try {

    const jwtSecret = process.env.JWT_SECRET;

    const token = jwt.sign(tokenData, jwtSecret, { expiresIn: `${expDays} days` });

    return { token };

  } catch(error) {

    return { error };

  }

};

// -----------------

module.exports = createToken;
