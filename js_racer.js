// "use strict"
//
// // import Dice from "./dice.js"
// // let term = require( 'terminal-kit' ).terminal ;
//
// class JSRacer {
//   constructor(players, length, sides) {
//     this._players = players;
//     this._length = length;
//     this._sides = sides;
//     // this.position = 0;
//   }
//   print_board(players, length) {
//     print_board(this._players, this._length)
//     return this;
//   }
//
//   print_line() {
//
//   }
//   advanced_player(player) {
//
//   }
//   finished() {
//
//   }
//   winner() {
//
//   }
//   reset_board() {
//     console.log("\x1B[2J")
//   }
// }
//
// // Auxilary function
// function arr(player, position, length) {
//   let board = [];
//   for (let i = 0; i < length; i += 1) {
//     board.push("")
//   }
//   board[position] = player;
//   return board.join("|");
// }
//
// function generatePlayer(number) {
//   let players = [];
//   for (let i = 0; i < number; i++) {
//     players.push(i+1);
//   }
//   return players;
// }
//
// function reset_board() {
//   console.log("\x1B[2J")
// }
//
// function print_board(playerNum, length) {
//   let a = generatePlayer(playerNum);
//   let pos = 0, posb = 0;
//   // console.log("+++");
//   console.log(length);
//   // console.log("+++");
//   for (let i = 0; i < length; i++) {
//     pos += rollingDice();
//     posb += rollingDice();
//     if (pos < length || posb < length) {
//       let race = arr(a[0], pos, length)+ "\n" +  arr(a[1], posb, length);
//       console.log(race);
//       // reset_board();
//     } else {
//       if (pos > posb) {
//        return "Player " + a[0] + " wins";
//      } else {
//        return "Player " + a[1] + " wins";
//      }
//     }
//   }
//
// }
//
// function rollingDice() {
//   return Math.ceil(Math.random()*6);
// }
//
// let a = arr("a", 2, 30);
// console.log(print_board(2,20));
// console.log("Players " + generatePlayer(7));
//
//
//
//
// let race = new JSRacer(2,20,2);
// console.log(race.print_board());
// // console.log(race.reset_board());
// //export default JSRacer

"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players
    this.playerData = [{playerName : "Alfa", position : 0}, {playerName : "Beta", position : 0}, {playerName : "Cross", position : 0}]
    this.length = length
    this.winnerPlayer = false
    this.winnerName;
  }

  print_board() {
    for (let i=0; i<this.players; i++) {
      this.print_line(this.playerData[i].playerName,0)
    }
  }

  print_line(player, pos) {
    let line = []
    for (let i=0; i<this.length; i++) {
      if ( pos === i) {
        line.push(player)
      } else {
        line.push(" ")
      }
    }
    console.log(line.join("|"))
  }

  advanced_player(timer) {
    this.print_board()

    while (!this.winnerPlayer) {
      this.reset_board()
      for (let i=0; i<this.players; i++) {
        if (!this.winnerPlayer) {
          this.playerData[i].position = this.playerData[i].position + Dice.roll()
        } else {
          this.playerData[i].position = this.playerData[i].position
        }

        if (this.playerData[i].position >= this.length-1) {
          this.winnerName = this.playerData[i].playerName
          this.playerData[i].position = this.length-1
          this.winnerPlayer = true
        }
        this.print_line(this.playerData[i].playerName,this.playerData[i].position)
        timer(500)

      }

      console.log("")
    }
    this.finished()
  }

  finished() {
    console.log(`Congratulation! ${this.winnerName} You Won !!`)
  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

export default JSRacer
