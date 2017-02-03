"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players = 3, track = 30) {
    this.players = this.runner(players);
    this.length = track;
    this.finish = false;
  }

  runner(count) {
    let playerName = ['a','b','c']
    let arr = []
    for(let i = 0; i < count; i++){
      let player = {name: playerName[i], position: 0}
      arr.push(player)
    }
    return arr;
  }

  print_board() {
    for(let i = 0; i < this.players.length; i++){
      this.print_line(this.players[i]);
      this.advanced_player(this.players[i]);
      this.finished(this.players[i]);
    }
  }

  print_line(player) {
    let line = '_';
    for(let i = 0; i < this.length; i++){
      if(player.position === i){
        line += `|${player.name}`;
      } else {
        line += `|_`;
      }
      // console.log(line);
    }
    console.log(line);
  }

  advanced_player(player) {
    player.position += Dice.roll()
  }

  finished(player) {
    if(player.position >= this.length - 1){
      this.finish = true;
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
