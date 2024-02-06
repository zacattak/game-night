export class Player {
  constructor(playerName) {
    this.name = playerName;
    // this.score = 0;
  }
  PlayerCardHTMLTemplate() {
    return `
    <div class="col-md-6">
    <div class="card">
      <img class="card-img-top player-img"
        src="${this.imgUrl}"
        alt="">
      <div class="p-3">
        <h2>${this.name}</h2>
        <h3>Player Score: 0</h3>
        <div>
          <button>Score Goes Up</button>
          <button>Score Goes Down</button>
        </div>
      </div>
    </div>
  </div>
    `
  }
}

