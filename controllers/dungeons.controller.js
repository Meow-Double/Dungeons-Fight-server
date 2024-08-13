const ApiError = require('../error/ApiError');
const { Dungeons } = require('../models/models');

class dungeonsController {
  async postDungeons(req, res) {
    await Dungeons.create({ ...dungeons });
  }
  async getDungeons(req, res) {
    try {
      const dungeons = await Dungeons.findAll({ raw: true });

      if (!dungeons) {
        res.status(400).json({ message: 'ошибка получения подземелей' });
      }

      res.json(dungeons);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  async getOneDungeons(req, res, next) {
    const id = req.params;

    if (!id) {
      return next(ApiError.badRequest('Не задан id'));
    }

    res.json({ success: true });
  }
}

module.exports = new dungeonsController();
