export class Game {
    constructor(players) {
      // What sort of things does the game need?
      this.players = players // make and import a Player object. I'm thinking start this as an array and then add players
      this.owner = players // make a player object out of owner's ID.
      this.round = 0
      this.territories = [] // Store by zone? By territory?
      this.currentPlayerIdx = 0
    }

    advanceTurn() { // Do I also need a separate method to advance round?
      if (this.currentPlayerIdx === this.players.length - 1){
        this.round++
        this.currentPlayerIdx = 0
      } else {
        this.currentPlayerIdx++
      }
    }

    startGame() {
      //randomize players
      //advance round to 1
      //no more adding or removing players
      //make it one player's turn
    }

    //Do I need a method to add players, or just this.players.push()?

    //Randomize players
  }