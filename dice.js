"use strict"

class Dice {
  constructor() {
    // this.chance = 6
  }
  static roll(chance) {
    return Math.floor(Math.random() * chance)
  }
}
// for testing purpose
// let dice = new Dice()
// console.log(dice.roll());
export default Dice
