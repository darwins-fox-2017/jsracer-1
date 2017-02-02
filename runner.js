"use strict"

import JSRacer from "./js_racer"

let race = new JSRacer(['A', 'B', 'C'], 20, 1)

console.log('ayo main');
race.play()


// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds) {
//       break;
//     }
//   }
// }

// Your code here...
