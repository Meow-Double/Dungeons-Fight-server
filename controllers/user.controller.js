const ApiError = require('../error/ApiError');
const { User } = require('../models/models');

class userController {
  async regestration(req, res) {
    const user = await User.create({
      email: 'slava@gmail.com',
      password: '12345',
      avatarUrl: 'sd',
    });
    res.json(user);
  }
  async getDungeons(req, res) {}
  async getOneDungeons(req, res, next) {
    const id = req.params;

    if (!id) {
      return next(ApiError.badRequest('Не задан id'));
    }

    res.json({ success: true });
  }
}

module.exports = new userController();
