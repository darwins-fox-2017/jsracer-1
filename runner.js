// "use strict"
//
// import JSRacer from "./js_racer"
//
// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds) {
//       break;
//     }
//   }
// }
//
// // Your code here...

"use strict"

import JSRacer from "./js_racer"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

var jsracer = new JSRacer(3, 20)
//jsracer.print_board()
//jsracer.advanced_player(sleep)
jsracer.advanced_player(sleep)
