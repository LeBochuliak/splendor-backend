const nextPlayer = (game) => {
  const currentIndex = game.players.findIndex(
    (player) => player.id === game.currentPlayerId,
  );

  const nextIndex = (currentIndex + 1) % game.players.length;

  game.currentPlayerId = game.players[nextIndex].id;
};

export default nextPlayer;
