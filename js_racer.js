"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.player = players
    this.playerData =  [{name : "a", pos : 0}, {name :"b", pos :0}, {name :"c", pos : 0}]
    this.length = length
    this.pemenang = false;
    this.pemenangName = null;
  }
  print_board() {
    for(var i=0; i<this.player; i++){
        this.print_line(this.playerData[i].name,0)
    }
  }
  print_line(player, pos) {
    let arr = []
    for(var i=0; i<this.length; i++){
      if(pos == i){
        arr.push(player)
      }else{
        arr.push(" ")
      }
    }
    console.log(arr.join("|"))
  }
  advanced_player(){
    this.print_board()
    console.log("\n");

    while(!this.pemenang){

      for(let i=0; i<this.player; i++){
        if(!this.pemenang ){
          this.playerData[i].pos += Dice.roll()
        }else{
          this.playerData[i].pos = this.playerData[i].pos
        }

        if(this.playerData[i].pos >= this.length-1){
          this.pemenang = true
          this.pemenangName = this.playerData[i].name
          this.playerData[i].pos = this.length-1
          this.print_line(this.playerData[i].name,this.playerData[i].pos)
        }else{
          this.print_line(this.playerData[i].name,this.playerData[i].pos)
        }

      }
      console.log("\n");
    }
      this.winner()

  }
  finished() {

  }
  winner() {
    console.log(`Pemenangnya adalah ${this.pemenangName}`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
var test = new JSRacer(3,30)

// test.print_line('a',0)
test.advanced_player()

export default JSRacer
