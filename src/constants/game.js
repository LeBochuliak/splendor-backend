import cards from './cards.js';
import nobles from './nobles.js';
import shuffle from './cardsShuffle.js';

export const game = {
  status: 'waiting',
  players: [],
  currentPlayerId: null,
  finalRound: false,

  tokens: {
    white: 4,
    green: 4,
    blue: 4,
    red: 4,
    black: 4,
    gold: 4,
  },

  cards: {
    level1: {
      board: [],
      deck: [],
    },
    level2: {
      board: [],
      deck: [],
    },
    level3: {
      board: [],
      deck: [],
    },
  },
  nobles: [],
};

game.nobles = shuffle(nobles).slice(0, 3);
const shuffledCards = shuffle(cards);
const level1 = shuffledCards.filter((card) => card.level === 1);
const level2 = shuffledCards.filter((card) => card.level === 2);
const level3 = shuffledCards.filter((card) => card.level === 3);
game.cards.level1.deck = level1.slice(4);
game.cards.level1.board = level1.slice(0, 4);
game.cards.level2.deck = level2.slice(4);
game.cards.level2.board = level2.slice(0, 4);
game.cards.level3.deck = level3.slice(4);
game.cards.level3.board = level3.slice(0, 4);

export default game;
