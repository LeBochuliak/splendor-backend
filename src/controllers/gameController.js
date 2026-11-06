import createHttpError from 'http-errors';
import { game, createGame, updateGame } from '../constants/game.js';
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
  res.status(200).json(game);
};

export const setGame = (req, res) => {
  const game = createGame();
  res.status(200).json(game);
};

export const resetGame = (req, res) => {
    try {
        updateGame(null);

        return res.status(200).json({
            message: "Game successfully reset",
            game: null,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to reset game",
            error: error.message,
        });
    }
};
