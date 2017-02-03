"use strict"

export default class Dice {
  constructor() {
  }

  static roll() {
    return Math.floor(Math.random()*6)
  }
}
