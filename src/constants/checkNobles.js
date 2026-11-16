import { game } from "./game.js";

const checkNobles = (playerId) => {

  const player = game.players.find((player) => player.id === playerId);

  const noble = game.nobles.find((noble) =>
      Object.entries(noble.requirement).every(
          ([color, amount]) => player.resources[color] >= amount
      )
    );

    if (noble) {
      player.nobles.push(noble);
      player.points += noble.points;

      game.nobles = game.nobles.filter(
          item => item.id !== noble.id
      );
    }
};

export default checkNobles;
