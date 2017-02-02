"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.player = players
    this.playerData =  [{name : "a", pos : 0}, {name :"b", pos :0},{name :"c", pos :0}]
    this.length = length
    this.jalan = 1;
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

    this.playerData[0].pos += Dice.roll()
    this.print_line(this.playerData[0].name,this.playerData[0].pos)

    //proses berhenti disini sampai kondisi finish
 }

 //kondisi selesai finished n winer
  finished() {

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

export default JSRacer
