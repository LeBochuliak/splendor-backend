import game from './game.js';

const findBoardCard = (cardId) => {
  for (const level of Object.values(game.cards)) {
    const boardCard = level.board.find((card) => card.id === cardId);

    if (boardCard) {
      return boardCard;
    }
  }

  return null;
};

export default findBoardCard;
