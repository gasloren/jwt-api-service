
const TokenCreate = require('../endpoints/TokenCreate');
const TokenDecode = require('../endpoints/TokenDecode');

// --------------------------------

class Routes {

  constructor(server) {
    this.tokenCreate = new TokenCreate(server);
    this.tokenDecode = new TokenDecode(server);
  }

}

module.exports = Routes;
