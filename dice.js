"use strict"

class Dice {
  constructor() {
    this.chance = 6
  }
  roll() {
    return Math.floor(Math.random() * this.chance)
  }
}
// for testing purpose
// let dice = new Dice()
// console.log(dice.roll());
export default Dice
