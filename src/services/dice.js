
function rollDie(sides = 6) { // Sides is the number of sides the die should have
  let result = Math.floor(Math.random() * sides + 1)
  return result
}

function diceSet(numberOfDice, sides) { // How many die to roll, how may sides they should have
  let result = []
  for (let i = 0; i < numberOfDice; i++) {
    result.push(rollDie(sides))
  }
  return result
}

function greaterSort(a, b) {
  return b - a
}

function fight(attacker, defender) {
  attacker.sort(greaterSort)
  defender.sort(greaterSort)
  let results = []
  while (attacker.length > 0 && defender.length > 0) {
    let [attack, defense] = [attacker.shift(), defender.shift()]
    if (attack > defense) {
      results.push(1) // Brainstorm this... who will get the array, and what should the array look like to help that?
    } else {
      results.push(0)
    }
  }
  return results // Should be an array of 1 or 2 elements.
}

function battle(attackerForces, defenderForces) { // Number of attackers (1-3), number of defenders (1 or 2)
  let [attacker, defender] = [diceSet(attackerForces, 6), diceSet(defenderForces, 6)]
  console.log(attacker);
  console.log(defender);
  return fight(attacker, defender)
}

console.log(battle(3, 2));
