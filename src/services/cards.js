class Card {
  constructor(territory, denomination) {
    this.territory = territory
    this.denomination = denomination
  }
}

class Deck {
  constructor(cards) {
    this.denominations = [
      "chip",
      "mark",
      "broam"
    ]
    this.cards = this.createDeck(cards)
  }

  shuffleSort() {
    return 0.5 - Math.random()
  }

  createDeck(cards) {
    let numberOfCards = cards.length
    let evenSplit = Math.floor(numberOfCards / 3)
    let remainder = numberOfCards % 3
    let spheres = []
    for (let i = 0; i < evenSplit; i++) {
      spheres.push(...[0, 1, 2])
    }
    if (remainder > 0) {
      spheres.push(0)
    }
    if (remainder > 1) {
      spheres.push(1)
    }
    spheres.sort(this.shuffleSort)
    return cards.map((territory, idx) => {
      return new Card(territory, this.denominations[spheres[idx]])
    })
  }

  shuffle() {
    this.cards.sort(this.shuffleSort)
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

// let denominations = [ // Make this one of those unnecessarily complicated objects
//   "chip",
//   "mark",
//   "broam"
// ]

// let sphereList = []

// let evenSplit = Math.floor(alethkar.length / 3)

// for (let i = 0; i < evenSplit; i++) {
//   sphereList.push(0)
//   sphereList.push(1)
//   sphereList.push(2)
// }

// let remainder = alethkar.length % 3

// if (remainder > 0) {
//   sphereList.push(0)
// }

// if (remainder > 1) {
//   sphereList.push(1)
// }

// sphereList.sort((a, b) => 0.5 - Math.random())

// let draw = new Deck(alethkar.map((territory, idx) => {
//   return new Card(territory, denominations[sphereList[idx]])
// }))

// console.log(draw);

let draw = new Deck(alethkar)

console.log(draw.cards);

draw.shuffle()

console.log(draw.cards);
