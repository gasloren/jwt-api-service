const NewRoute = require('../endpoints/NewRoute');

// --------------------------------

class Routes {

  constructor(server) {
    this.newRoute = new NewRoute(server);
  }

}

module.exports = Routes;
