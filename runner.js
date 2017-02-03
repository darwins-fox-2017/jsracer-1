"use strict"

import JSRacer from "./js_racer"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

let runner = new JSRacer();

while (runner.finish === false) {
  runner.print_board()
  console.log("\n");
  sleep(200)
  runner.reset_board()
}

for(let i = 0; i < runner.players.length; i++){
  if(runner.players[i].position >= runner.length){
    runner.players[i].position = runner.length - 1;
  }
  runner.print_line(runner.players[i])
}

for(let i = 0; i < runner.players.length; i++){
  if(runner.players[i].position >= runner.length - 1){
    console.log(`\nCongratulation! ${runner.players[i].name} is the winner! :smile:\n`)
    break;
  }
}
