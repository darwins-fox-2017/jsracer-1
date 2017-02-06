"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(pemain, panjang) {
    // isi arr['a', 'b', 'c']
    this.pemain = pemain;
    // 30
    this.panjang = panjang;
    // objek tempat pemain
    this.player_object = {} 
    this.player_object2 = [{
      nama : "A", posisi : 0
    }, {
      nama : "B", posisi : 0
    }, {
      nama : "C", posisi : 0
    }]
    //this.samping = sides;
    this.pemenang = false;
    this.isFinish = false
    this.namaPemenang = null
  }

  positions() {
    // create posisi awal - masukin ke objek
    for(let i = 0; i < this.pemain.length; i++) {
      //this.player_object2[this.[i].nama] = 0

    }
    // console.log(this.player_object)
  }

  print_board() {
    
    for(let i=0; i<this.pemain; i++) {
      
      this.print_line(this.player_object2[i].nama, 0) // (nama. posisi)
      
       // (nama. posisi)
      
    }
    console.log("\n")
  }

  print_line(namaPemain, posisiPemain) {
    let arr = [];

    for(let i=0; i < this.panjang; i++) {
      
      if(posisiPemain == i) {
        arr.push(namaPemain)  
      } else {
        arr.push(" ");
      }
    }
    console.log(arr.join("|"))
  }

  advanced_player(){
    this.print_board()
    console.log("\n");

    while(!this.pemenang){
      // player = pemain
      // playerData =  objekku
      for(let i=0; i<this.pemain; i++){
        if(!this.pemenang){
          this.player_object2[i].posisi += Dice.roll()
        }else{
          this.player_object2[i].posisi = this.player_object2[i].posisi
        }

        if(this.player_object2[i].posisi >= this.panjang-1){
          this.pemenang = true
          this.namaPemenang = this.player_object2[i].nama
          this.player_object2[i].posisi = this.panjang-1
          this.print_line(this.player_object2[i].nama, this.player_object2[i].posisi)
        }else{
          this.print_line(this.player_object2[i].nama, this.player_object2[i].posisi)
        }

      }
      console.log("\n");
    }
    this.winner()
  }

  winner() {
    console.log(`The winner is ${this.namaPemenang}`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }

}
let test = new JSRacer(3, 30);
// test.positions()
//test.print_board(false)
// test.print_line()
//test.print_board()
test.advanced_player()

export default JSRacer
