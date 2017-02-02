"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players
    this.length = 30
    this.position = []
    // 0 = on going | 1 = game over
    this.gameOver = 0
  }
  print_board() {
    // loop for every player
    for (let i = 0; i < this.position.length; i++) {
      this.print_line(this.position[i].name, this.position[i].pos)
    }
  }

  play(){
    // assign new user to init position 0
    for (let i = 0; i < this.players.length; i++) {
      let player = {}
      player.name = this.players[i]
      player.pos = 0
      this.position.push(player)
    }
    // show the board
    this.print_board()
    // Next please
    do {
      this.next()
      console.log('--------------------------------------------------------------');
      this.print_board()
    } while (this.isFinished() == false);
  }

  print_line(player, pos) {
    let line = ''

    for (let j = 0; j < 30; j++) {
      if (pos == j) {
        line += player
      }
      line += ' |'
    }
    console.log(line);
  }

  next(){
    if (!this.isFinished()) {
      for (let i = 0; i < this.position.length; i++) {
        // let dice = new Dice()
        if (this.position[i].pos >= 30) {
          this.gameOver = 1
          console.log('The winner is : ' + this.winner());
        } else {
          this.position[i].pos += Dice.roll(6)
        }

      }
    } else {
      this.gameOver = 1
    }
  }

  isFinished() {
    // return this.gameOver == 0 ? false : true
    if (this.gameOver == 0) {
      for (let i = 0; i < this.position.length; i++) {
        if (this.position[i].pos >= 30) {
          this.gameOver = 1
          console.log('The winner is : ' + this.winner());
          return true
        } else {
          return false
        }
      }
    } else {
      return true
    }

  }

  winner() {
    if (this.isFinished()) {
      let max = 0
      for (let i = 0; i < this.position.length; i++) {
        if (this.position[i].pos >= max) {
          max = this.position[i].pos
        }
      }
      return this.whoIs(max)
    } else {
      return `Game still on going now!`
    }

  }

  whoIs(pos){
    for (let i = 0; i < this.position.length; i++) {
      if (this.position[i].pos == pos) {
        return this.position[i].name
      }
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
