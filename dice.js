"use strict"

class Dice {
  constructor() {
    this.kocok = 0
  }
  static roll() {
    var kocok = Math.floor((Math.random() * 6) + 1);
    return kocok
  }
}
// let dice = new Dice()
// console.log(dice.roll());

export default Dice
