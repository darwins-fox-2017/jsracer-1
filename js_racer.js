"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players
    this.length = length
    this.playersData = []
    this.isWinner = null
  }
  print_board() {
    let line = []
    for(let i=0;i<this.players;i++) {
      this.playersData.push({'name':String.fromCharCode('a'.charCodeAt(0)+i), 'pos':0})
      line.push(this.print_line(this.playersData[i].name, this.playersData[i].pos))
    }
    return line.join('\n')
  }
  print_line(player, pos) {
    let board = []
    for (let i = 0; i < this.length; i++) {
      if(i === pos) {
        board.push(player)
      } else {
        board.push(' ')
      }
    }
    return board.join('|')
  }
  advanced_player(timer) {
    this.reset_board()
    console.log(this.print_board()); 
    timer(1000)
    let dice = new Dice()
    while(this.isWinner === null) {
      this.reset_board()
      for(let i=0;i<this.players;i++) {
        if(this.playersData[i].pos < this.length && this.isWinner === null) {
          this.playersData[i].pos += dice.roll()
          if(this.playersData[i].pos >= this.length-1) {
            this.playersData[i].pos = this.length-1
            this.isWinner = this.playersData[i]
          }
        }
      }
      console.log(this.print_board())
      // console.log('\n')
      timer(1000)
    }
    this.finished()
  }
  finished() {
    console.log(`The winner is ${this.isWinner.name}`);
  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
