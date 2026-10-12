import createHttpError from 'http-errors';
import crypto from 'node:crypto';
import game from '../constants/game.js';

export const setPlayer = (req, res) => {
  const { name } = req.body;
  if (game.players.length >= 2) {
    throw createHttpError(400, 'Maximum 2 players');
  }

  const player = {
    id: crypto.randomUUID(),
    name: name,
    points: 0,
    resources: {
      white: 0,
      green: 0,
      blue: 0,
      red: 0,
      black: 0,
    },
    tokens: {
      white: 0,
      green: 0,
      blue: 0,
      red: 0,
      black: 0,
      gold: 0,
    },
    totalTokens: 0,
    reservedCards: [],
  };
  game.players.push(player);

  if (!game.currentPlayerId) {
    game.currentPlayerId = player.id;
  }
  res.status(201).json(player);
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
