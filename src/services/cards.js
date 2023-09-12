function shuffle(deck) {
  let newDeck = []
  let count = 0
  while (deck.length > 0) {
    count = Math.floor(Math.random() * (deck.length - 1))
    newDeck.push(deck.splice(count, 1)[0])
  }
  return newDeck
  }
  
shuffle([])

class Card {
  constructor(territory, denomination) {
    this.territory = territory
    this.denomination = denomination
  }
}

class Deck {
  constructor(cards) {
    this.cards = cards
  }
}

let alethkar = [
  "kholin",
  "sadeas",
  "sebarial",
  "vamah",
  "aladar",
  "ruthar",
  "bethab",
  "hatham",
  "roion",
  "thanadal"
]

let denominations = [ // Make this one of those unnecessarily complicated objects
  "chip",
  "mark",
  "broam"
]

let draw = new Deck(alethkar.map((highprincedom) => {
  let sphere = Math.floor(Math.random() * 3)
  return new Card(highprincedom, denominations[sphere])
}))

console.log(draw);
