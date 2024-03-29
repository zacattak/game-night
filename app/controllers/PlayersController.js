import { AppState } from "../AppState.js"
import { playersService } from "../services/playersServices.js";
import { setHTML, setText } from "../utils/Writer.js";

export class PlayersController {

  constructor() {
    console.log('PLAYERS CONTROLLER LOADED!');
    this.drawPlayers()
  }
  drawPlayers() {
    console.log('DRAWING PLAYERS');
    const players = AppState.players
    console.log('Here are the players', players);

    let htmlString = ''

    players.forEach(player => {
      // console.log(player.PlayerCardHTMLTemplate())
      htmlString += player.PlayerCardHTMLTemplate
    })

    console.log('here is the html string', htmlString);
    // const playersElement = document.getElementById('players')
    // console.log(playersElement);

    setHTML('players', htmlString)
  }

  increasePlayerScore(playerName) {
    console.log('Increasing player score', playerName);
    playersService.increasePlayerScore(playerName)
    this.drawPlayers()
  }
}
