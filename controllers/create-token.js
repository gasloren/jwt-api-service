const jwt = require('jsonwebtoken');

// --------------------------------------------

const createToken = (data, expDays = 60) => {

  try {

    const jwtSecret = process.env.JWT_SECRET;

    const token = jwt.sign(data, jwtSecret, { expiresIn: `${expDays} days` });

    return { token };

  } catch(error) {

    return { error };

  }

};

// -----------------

module.exports = createToken;
