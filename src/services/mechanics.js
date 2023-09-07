
export function rollDie(sides = 6) { // Sides is the number of sides the die should have
    let result = Math.floor(Math.random() * sides + 1)
    return result
}

export function diceSet(numberOfDice, sides) { // How many die to roll, how may sides they should have
    let result = []
    for (let i = 0; i < numberOfDice; i++) {
        result.push(rollDie(sides))
    }
    return result
}
