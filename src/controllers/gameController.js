import createHttpError from 'http-errors';
import game from '../constants/game.js';
import createPlayer from '../constants/player.js';

export const setPlayers = (req, res) => {
  const { players } = req.body;

  if (!Array.isArray(players) || players.length === 0) {
    throw createHttpError(400, 'Players array is required');
  }

  if (game.players.length + players.length > 2) {
    throw createHttpError(400, 'Maximum 2 players');
  }

  const newPlayers = players.map(name => createPlayer(name));

  game.players.push(...newPlayers);


  if (!game.currentPlayerId) {
    game.currentPlayerId = newPlayers[0].id;
  }
  if (game.players.length === 2) {
  game.status = 'in_progress';
  }
  res.status(201).json(newPlayers);
};

export const getGame = (req, res) => {
  if (!game) {
    throw createHttpError(404, 'Game not found');
  }
  if (game.players.length <= 1) {
    throw createHttpError(400, 'Please add players');
  }
  res.status(200).json(game);
};
