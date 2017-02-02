"use strict"

import JSRacer from "./js_racer"

let balapan = new JSRacer(3, 100)
//console.log(balapan.start_game)
balapan.start_game()

do {
  balapan.print_line()
  console.log()
} while (balapan.win !== true)


balapan.winner()


// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds) {
//       break;
//     }
//   }
// }

// Your code here...
