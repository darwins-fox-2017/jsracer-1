"use strict"

class Dice {
  constructor() {
    this.angka = 0;
  }
  roll() {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.angka = getRandomIntInclusive(1, 6)
    return this.angka
  }
}

export default Dice
