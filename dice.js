"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.round(Math.random()*(6-1)+1) 
  }
}

export default Dice
