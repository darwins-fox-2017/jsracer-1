"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players
    this.length = length
    this.boards = []
    this.winners = '';
    this.win = false
  }
  start_game() {
    for(let i=0; i<this.players; i++) {
      this.boards[i] = [];
      for (let j=0; j<this.length; j++) {
        if(j === 0)
          this.boards[i][j] = String.fromCharCode(97 + i)
        else if(j % 2 === 0 && j !== 0)
          this.boards[i][j] = ' '
        else
          this.boards[i][j] = '|'
      }
    }

    for(let i=0; i<this.players; i++) {
      let jalur = ''
      for (let j=0; j<this.length; j++) {
        jalur += this.boards[i][j]
      }
      console.log(jalur)
    }
    //return this.boards
  }

  print_line() {
    for(let i=0; i<this.players; i++) {
      let dadu = new Dice();
      let angkaDadu = dadu.roll()
      for (let j=0; j<this.length; j++) {
        if(this.boards[i][j] !== '|' && this.boards[i][j] !== ' ') {

          if((j+angkaDadu) >= this.length - 2) {
            this.winners = this.boards[i][j]
            let tmp = this.boards[i][this.length-2]
            this.boards[i][this.length-2] = this.boards[i][j]
            this.boards[i][j] = tmp
            break;
          } else {
            let newJ = j+(2*angkaDadu)
            if(newJ > 98) {
              newJ = 98
            }

            let tmp = this.boards[i][newJ]
            this.boards[i][newJ] = this.boards[i][j]
            this.boards[i][j] = tmp
            break;
          }
        }
      }

      if(this.boards[i][this.length-2] !== '|' && this.boards[i][this.length-2] !== ' ') {
        this.winners = this.boards[i][this.length-2]
        this.win = true;
      }
    }

    for(let i=0; i<this.players; i++) {
      let jalur = ''
      for (let j=0; j<this.length; j++) {
        jalur += this.boards[i][j]
      }
      console.log(jalur)
    }
  }
  finished() {

  }
  winner() {
    console.log('Player ' + this.winners + ' has win the game')
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
