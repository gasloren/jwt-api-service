const validApiKey = require('../validators/valid-api-key');
const validData = require('../validators/valid-data');
const validExpDays = require('../validators/valid-exp-days');
const checkErrors = require('../validators/check-errors');

const createToken = require('../controllers/create-token');

// -------------------------------------

class TokenCreate {

  constructor(server) {
    this.path = '/jwt/token/create';
    this.server = server;
    this.route();
  }

  route() {
    this.server.post(
      this.path,
      [
        ...validApiKey,
        ...validData,
        ...validExpDays,
        checkErrors
      ],
      (req, res) => {
        const { data, expDays } = req.body;
        const { token, error } = createToken(data, expDays);
        if (error) {
          return res.status(400).json({ error });
        }
        res.status(201).json({ token });
      }
    );
  }

}

module.exports = TokenCreate;
