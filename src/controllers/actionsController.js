import createHttpError from 'http-errors';
import nextPlayer from '../constants/nextPlayer.js';
import game from '../constants/game.js';

// TAKE TOKENS //

export const takeTokens = (req, res) => {
  let { playerId, tokens } = req.body;

  if (!game) {
    throw createHttpError(404, 'Game not found');
  }
  if (game.players.length <= 1) {
    throw createHttpError(404, 'Please add players');
  }
  if (!playerId) {
    throw createHttpError(404, 'Player not found');
  }
  const player = game.players.find((player) => player.id === playerId);

  if (!player) {
    throw createHttpError(404, 'Player not found');
  }
  if (game.currentPlayerId !== playerId) {
    throw createHttpError(400, 'This is not your turn');
  }
  if (!Array.isArray(tokens)) {
    throw createHttpError(400, 'Invalid type of tokens');
  }
  if (tokens.length > 3) {
    throw createHttpError(400, 'Too many tokens');
  }
  if (tokens.includes('gold')) {
    throw createHttpError(400, 'You cannot take gold tokens');
  }
  if (tokens.length < 2) {
    throw createHttpError(400, 'Please choose tokens');
  }
  for (const token of tokens) {
    if (game.tokens[token] <= 0) {
      throw createHttpError(400, `Token ${token} is not available`);
    }
  }

  if (player.totalTokens >= 10) {
    throw createHttpError(400, 'You already have more than 10 tokens');
  }

  if (tokens[0] === tokens[1]) {
    if (game.tokens[tokens[0]] < 4) {
      throw createHttpError(
        400,
        'You can only take two gems of the same colour if there are at least four gems of that colour available in the supply',
      );
    }
    tokens = tokens.slice(0, 2);
  }

  if (
    tokens[0] !== tokens[1] &&
    tokens[1] !== tokens[2] &&
    tokens[0] !== tokens[2]
  ) {
    tokens = tokens.slice(0, 3);
  }

  if (tokens[0] !== tokens[1] && tokens[1] === tokens[2]) {
    if (game.tokens[tokens[1]] < 4) {
      throw createHttpError(
        400,
        'You can only take two gems of the same colour if there are at least four gems of that colour available in the supply',
      );
    }
    tokens = tokens.slice(1, 3);
  }

  for (const token of tokens) {
    game.tokens[token]--;
    player.tokens[token]++;
    player.totalTokens++;
  }

  if (player.totalTokens <= 10) {
    nextPlayer(game);
  }

  res.status(200).json(game);
};

// RETURN TOKENS //

export const returnTokens = (req, res) => {};

// BUY A CARD //

export const buyCard = (req, res) => {};

// RESERVE A CARD //

export const reserveBoardCard = (req, res) => {};

export const reserveDeckCard = (req, res) => {};
