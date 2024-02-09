export class Player {
  constructor(playerName) {
    this.name = playerName;
    this.score = 0;
    // this.score = 0;
  }
  get PlayerCardHTMLTemplate() {
    return `
    <div class="col-md-6">
    <div class="card">
      <img class="card-img-top player-name"
        src="${this.name}"
        alt="">
      <div class="p-3">
        <h2>${this.name}</h2>
        <h3>Player Score: ${this.score}</h3>
        <div>
        <button onclick="app.PingPongPlayersController.increasePlayerScore(${this.name})" type="button">
              Up
            </button>
            <button type="button">Down</button>
        </div>
      </div>
    </div>
  </div>
    `
  }
}

