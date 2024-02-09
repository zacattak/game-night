import { AppState } from "../AppState.js";

class PlayersService {
  increasePlayerScore(playerName) {
    console.log('increasing player score, but in the service!');
    const players = AppState.players
    console.log('players', players);

    const foundPlayer = players.find(player => player.name == playerName)
    console.log('here is the player', foundPlayer);
    foundPlayer.score++
  }
}

export const playersService = new PlayersService()