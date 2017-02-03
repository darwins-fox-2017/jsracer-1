"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.player = players
    this.playerData =  [{name : "a", pos : 0}, {name :"b", pos :0},{name :"c", pos :0}]
    this.length = length
    this.jalan = 1;
    this.finish = false
    this.pemenang = null
  }

  //menampilkan posisi start
  print_board() {
    for(var i=0; i<this.player; i++){
        this.print_line(this.playerData[i].name,0)
    }
  }

  //menbuat arena
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

  //proses berjalan permainan
  advanced_player(player){

    this.print_board()

    while(this.finish === false) {

      for (var i = 0; i < this.playerData.length; i++){
        let dadu = Dice.roll();

        if (this.playerData[i].pos + dadu >= this.length){
          this.playerData[i].pos = this.length-1
          this.pemenang = this.playerData[i]
          this.finish = true
          break
        }
        else{
          this.print_line(this.playerData[i].name,this.playerData[i].pos)
          this.playerData[i].pos += Dice.roll()
        }
        }

    }
    for (var i = 0; i < this.playerData.length; i++){
      this.print_line(this.playerData[i].name,this.playerData[i].pos)
    }

    console.log(this.finished());
    //proses berhenti disini sampai kondisi finish
 }

 //kondisi selesai finished n winer
  finished() {
    return "The winner is player " + this.pemenang.name
 }

  winner() {

 }

//animasi
  reset_board() {
    console.log("\x1B[2J")
  }
}

var test = new JSRacer(3,30)


// test.print_line('a',0)
// test.print_board()
test.advanced_player()
test.finished()

export default JSRacer
