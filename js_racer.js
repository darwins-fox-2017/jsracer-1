"use strict"

import Dice from "./dice.js"

export default class JSRacer {
  constructor(players, length, sides) {
    this.playersName = [{Name: 'a', Pos : 0},{Name: 'b', Pos : 0},{Name: 'c', Pos : 0},{Name: 'd', Pos : 0},{Name: 'e', Pos : 0}]
    this.players = players
    this.length = length
    this.sides = sides // sisi dadu
    this.winner = null
  }
  print_board() {
    for(let i=0; i<this.players; i++){
      this.print_line(this.playersName[i].Name,0)
    }
  }
  print_line(player, pos) {
    let line = []
    for(let i = 0;i<this.length; i++){
      if(i !== pos ){
        line.push(" ")
      }else {
        line.push(player)
      }
    }
    console.log(line.join("|"))
  }

  advanced_player(timer) {
    let win = false

    this.print_board()
    console.log('\n')
    while(!win){
      this.reset_board();
      for(let i=0; i<this.players; i++){
        if(!win){
          this.playersName[i].Pos += Dice.roll()
        }else {
          this.playersName[i].Pos = this.playersName[i].Pos
        }

        if(this.playersName[i].Pos >= this.length-1){
          win = true
          this.winner = this.playersName[i].Name
          this.playersName[i].Pos = this.length-1
          this.print_line(this.playersName[i].Name,this.playersName[i].Pos)

        }else {
          this.print_line(this.playersName[i].Name,this.playersName[i].Pos)
        }

      }
      timer(2000)
    }
    this.finished()
  }

  finished() {
    console.log(`Congrats! the winner is ${this.winner}`)
  }


  reset_board() {
    console.log("\x1B[2J")
  }
}
