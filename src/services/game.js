export class Game {
    constructor(players) {
      // What sort of things does the game need?
      this.players = players
      this.turn = 0
      this.territories = [] // Store by zone? By territory?
    }
  }