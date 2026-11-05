import crypto from 'node:crypto';

const createPlayer = (name) => ({
  id: crypto.randomUUID(),
  name,
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
  developmentCards: [],
  nobles: [],
});

export default createPlayer;
