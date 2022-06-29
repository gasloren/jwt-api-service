const jwt = require('jsonwebtoken');

// --------------------------------------------

const decodeToken = (tokenSign) => {

  try {

    const jwtSecret = process.env.JWT_SECRET;

    const decoded = jwt.verify(tokenSign, jwtSecret);

    return { decoded };

  } catch(error) {

    return { error };

  }
  
};

// -----------------

module.exports = decodeToken;
