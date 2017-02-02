"use strict"

class Dice {

  static roll() {
    return Dice.getRandomInt(1,6);
  }

  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
export default Dice
