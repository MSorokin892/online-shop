class UserController {
  async registration(req, res, next) {

  }

  async login(req, res, next) {

  }

  async check(req, res) {
    const query = req.query;
    res.json(query);
  }
}

module.exports = new UserController()