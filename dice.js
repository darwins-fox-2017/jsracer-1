"use strict"

class Dice {
  constructor() {

  }
static roll() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }
}

export default Dice
