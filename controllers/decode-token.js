const jwt = require('jsonwebtoken');

// --------------------------------------------

const decodeToken = (token) => {

  try {

    const jwtSecret = process.env.JWT_SECRET;

    const decoded = jwt.verify(token, jwtSecret);

    return { decoded };

  } catch(error) {

    return { error };

  }
  
};

// -----------------

module.exports = decodeToken;
