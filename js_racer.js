"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = [{name: 'A', pos: 0},{name:'B', pos: 0},{name:'C', pos: 0}]
    this.length  = length || 30
    this.finish  = false
    this.win     = null
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
  advanced_player(timer) {
    while (!this.finish) {
      timer(700)
      this.reset_board()
      for (let i = 0; i < this.players.length; i++) {
        if(!this.finish){
          this.players[i].pos += Dice.roll()
        }else {
          this.players[i].pos = this.players[i].pos
        }
        if(this.players[i].pos >= this.length -1){
          this.finish = true
          this.win    = this.players[i].name
          this.players[i].pos = this.length-1
          this.print_line(this.players[i].name, this.players[i].pos)
        }else {
          this.print_line(this.players[i].name, this.players[i].pos)
        }
      }
      console.log('\n');
    }
    this.winner()
  }
  winner() {
    console.log(`Winner : ${this.win}`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
