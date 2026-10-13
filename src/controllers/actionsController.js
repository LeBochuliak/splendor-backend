import createHttpError from 'http-errors';
import nextPlayer from '../constants/nextPlayer.js';
import game from '../constants/game.js';
import findBoardCard from '../constants/findBoardCard.js';
import tokenColors from '../constants/tokenColors.js';

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
    if (!tokenColors.includes(token)) {
      throw createHttpError(400, `Token ${token} doesn't exist`);
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

  if (tokens[0] !== tokens[1] && tokens.length < 3) {
    throw createHttpError(400, 'Please choose third token');
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

export const returnTokens = (req, res) => {
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

  const tokensToReturn = player.totalTokens - 10;

  if (tokens.length < tokensToReturn) {
    throw createHttpError(
      400,
      'You must return enough tokens to have at most 10',
    );
  }

  const tokensToProcess = tokens.slice(0, tokensToReturn);

  for (const token of tokensToProcess) {
    if (!(token in player.tokens) || player.tokens[token] <= 0) {
      throw createHttpError(400, 'Invalid token');
    }
  }

  for (const token of tokensToProcess) {
    game.tokens[token]++;
    player.tokens[token]--;
    player.totalTokens--;
  }

  if (player.totalTokens <= 10) {
    nextPlayer(game);
  }

  return res.status(200).json(game);
};

// BUY A CARD //

export const buyCard = (req, res) => {
  let { playerId, cardId } = req.body;

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

  if (!cardId) {
    throw createHttpError(404, 'Card not found');
  }
  if (game.currentPlayerId !== playerId) {
    throw createHttpError(400, 'This is not your turn');
  }

  cardId = Number(cardId);

  const findCard = (cardId) => {
    const reserveCard = player.reservedCards.find((card) => card.id === cardId);

    if (!reserveCard) {
      const boardCard = findBoardCard(cardId);

      if (!boardCard) {
        throw createHttpError(404, 'Card not found');
      }

      return [boardCard, 'board'];
    }

    return [reserveCard, 'reserve'];
  };

  const card = findCard(cardId);

  const tokensToPay = {};
  let goldNeeded = 0;

  for (const [color, price] of Object.entries(card[0].price)) {
    const discount = player.resources[color] ?? 0;
    const required = Math.max(0, price - discount);
    const available = player.tokens[color] ?? 0;

    tokensToPay[color] = Math.min(available, required);
    goldNeeded += required - tokensToPay[color];
  }

  if (goldNeeded > (player.tokens.gold ?? 0)) {
    throw createHttpError(400, 'You cannot afford this card.');
  }

  tokensToPay.gold = goldNeeded;

  for (const [color, amount] of Object.entries(tokensToPay)) {
    player.tokens[color] -= amount;
    player.totalTokens -= amount;
  }

  player.resources[card[0].resource]++;
  player.points += card[0].points;

  player.developmentCards.push(card[0]);

  if (card[1] === 'reserve') {
    player.reservedCards = player.reservedCards.filter(
      (boardCard) => boardCard.id !== card[0].id,
    );
  } else {
    const level = `level${card[0].level}`;
    game.cards[level].board = game.cards[level].board.filter(
      (boardCard) => boardCard.id !== card[0].id,
    );
  }

  // check nobles //

  for (const noble of game.nobles) {
    const canTakeNoble = Object.entries(noble.requirement).every(
      ([color, amount]) => amount - player.resources[color] === 0,
    );
    console.log(canTakeNoble);
    if (canTakeNoble) {
      player.nobles.push(noble);
      player.points += noble.points;
      game.nobles = game.nobles.filter((newNoble) => newNoble.id !== noble.id);
    }
  }

  // check victory //

  if (player.points >= 2 && !game.finalRound) {
    game.finalRound = true;
    game.status = 'finished';
  }

  if (
    game.finalRound &&
    game.currentPlayerId === game.players[game.players.length - 1].id
  ) {
    const maxPoints = Math.max(...game.players.map((player) => player.points));

    const winners = game.players.filter(
      (player) => player.points === maxPoints,
    );

    if (winners.length === 1) {
      game.winner = winners[0];
    }
    if (winners.length > 1) {
      const minCards = Math.min(
        ...winners.map((player) => player.developmentCards.length),
      );
      const winner = game.players.filter(
        (player) => player.developmentCards.length === minCards,
      );
      game.winner = winner[0];
    }

    res.status(200).json({
      message: 'Game finished',
      game: game,
      winner: game.winner,
    });
  }

  nextPlayer(game);

  res.status(200).json(game);
};

// RESERVE A CARD //

export const reserveBoardCard = (req, res) => {
  let { playerId, cardId } = req.body;

  if (!game) {
    throw createHttpError(404, 'Game not found');
  }
  if (!playerId) {
    throw createHttpError(404, 'Player not found');
  }
  console.log('cardId:', cardId);
  console.log('type:', typeof cardId);
  console.log('is null:', cardId === null);

  if (!cardId) {
    throw createHttpError(404, 'Card not found');
  }

  if (game.currentPlayerId !== playerId) {
    throw createHttpError(400, 'This is not your turn');
  }

  cardId = Number(cardId);

  const player = game.players.find((player) => player.id === playerId);

  if (!player) {
    throw createHttpError(404, 'Player not found');
  }

  if (player.reservedCards.length >= 3) {
    throw createHttpError(400, "You can't reserve more than 3 cards");
  }

  const boardCard = findBoardCard(cardId);

  if (!boardCard) {
    throw createHttpError(404, 'Card not found');
  }

  player.reservedCards.push(boardCard);

  if (game.tokens.gold > 0) {
    player.tokens.gold++;
    game.tokens.gold--;
    player.totalTokens++;
  }

  const level = `level${boardCard.level}`;

  game.cards[level].board = game.cards[level].board.filter(
    (card) => card.id !== cardId,
  );

  if (game.cards[level].board.length < 4) {
    const newCard = game.cards[level].deck.pop();

    if (newCard) {
      game.cards[level].board.push(newCard);
    }
  }

  nextPlayer(game);

  res.status(200).json(game);
};

export const reserveDeckCard = (req, res) => {
  const { playerId, level } = req.body;

  // level1 level2 level3

  if (!game) {
    throw createHttpError(404, 'Game not found');
  }
  if (!playerId) {
    throw createHttpError(404, 'Player not found');
  }
  if (!level) {
    throw createHttpError(404, 'Level not found');
  }
  if (game.currentPlayerId !== playerId) {
    throw createHttpError(400, 'This is not your turn');
  }

  const player = game.players.find((player) => player.id === playerId);

  if (!player) {
    throw createHttpError(404, 'Player not found');
  }

  if (player.reservedCards.length >= 3) {
    throw createHttpError(400, "You can't reserve more than 3 cards");
  }

  const deckCard = game.cards[level].deck[0];

  player.reservedCards.push(deckCard);

  if (!deckCard) {
    throw createHttpError(404, 'Card not found');
  }

  if (game.tokens.gold > 0) {
    player.tokens.gold++;
    game.tokens.gold--;
    player.totalTokens++;
  }

  game.cards[level].deck = game.cards[level].deck.filter(
    (card) => card.id !== deckCard.id,
  );

  if (game.cards[level].deck.length <= 0) {
    throw createHttpError(400, 'There are no cards available for reservation');
  }

  nextPlayer(game);

  res.status(200).json(game);
};
