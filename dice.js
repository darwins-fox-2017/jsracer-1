// "use strict"
//
// class Dice {
//   constructor() {
//
//   }
//   roll() {
//
//   }
// }
//
// export default Dice
//
// "use strict"
//
// class Dice {
//   constructor() {
//     this.init = 0;
//   }
//   roll() {
//     this.init = Math.ceil(Math.random()*6);
//     return this;
//   }
// }
//
// export default Dice

"use strict"

class Dice {
  constructor() {

  }
  static roll() {
    return Math.ceil(Math.random() * 6)
  }
}

export default Dice
