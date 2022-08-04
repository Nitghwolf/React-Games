const gamesRouter = require('express').Router();
const { Game } = require('../db/models');

gamesRouter.get('/', async (req, res) => {
  try {
    const games = await Game.findAll({
      raw: true,
    });
    res.send(games);
  } catch (error) {
    res.send(error);
  }
});

module.exports = gamesRouter;