"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = [{name: 'a', pos: 0},{name:'b', pos: 0}]
    this.length  = length || 30
    this.finish   = false
  }
  print_board() {
    for (let i = 0; i < this.players.length; i++) {
      this.print_line(this.players[i].name, 0)
    }
  }
  print_line(player, pos) {
    let track = ''
    for (let i = 0; i < this.length; i++) {
      if(pos == i){
        track += player + '|'
      }else {
        track += ' |'
      }
    }
    console.log(track);
  }
  advanced_player(player) {
    for (let i = 0; i < this.players.length; i++) {

      this.print_line(this.player[i].name, 0)
    }
  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

var racer = new JSRacer(2,30)
    racer.print_board()


export default JSRacer
