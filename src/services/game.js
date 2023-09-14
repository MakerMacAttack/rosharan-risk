export class Game {
    constructor(players) {
      // What sort of things does the game need?
      this.players = players // make and import a Player object. I'm thinking start this as an array and then add players
      this.owner = players // make a player object out of owner's ID.
      this.turn = 0
      this.territories = [] // Store by zone? By territory?
    }

    advanceTurn() { // Do I also need a separate method to advance round?

    }

    startGame() {

    }

    //Do I need a method to add players, or just this.players.push()?

    //Randomize players
  }