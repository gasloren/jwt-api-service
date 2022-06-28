

class NewRoute {

  constructor(server) {
    this.path = '/new-endpoint';
    this.server = server;
    this.route();
  }

  route() {
    this.server.post(
      this.path,
      [
        // validations
      ],
      (req, res) => {
        // request
      }
    );
  }

}

module.exports = NewRoute;
