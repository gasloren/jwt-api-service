const validApiKey = require('../validators/valid-api-key');
const validToken = require('../validators/valid-token');
const checkErrors = require('../validators/check-errors');

const decodeToken = require('../controllers/decode-token');

// -------------------------------------

class TokenDecode {

  constructor(server) {
    this.path = '/jwt/token/decode';
    this.server = server;
    this.route();
  }

  route() {
    this.server.post(
      this.path,
      [
        ...validApiKey,
        ...validToken,
        checkErrors
      ],
      (req, res) => {
        const { token } = req.body;
        const { decoded, error } = decodeToken(token);
        if (error) {
          return res.status(400).json({ error });
        }
        res.status(201).json({ decoded });
      }
    );
  }

}

module.exports = TokenDecode;
