import { game } from "./game.js";
import findBoardCard from "./findBoardCard.js";
import createHttpError from 'http-errors';

const findCard = (cardId, playerId) => {

    const player = game.players.find((player) => player.id === playerId);

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

  export default findCard;
