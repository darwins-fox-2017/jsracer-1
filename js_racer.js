"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, len) {
    this.len=len;
    this.players=this.generatePlayers(players)
    this.winner = null
  }

  generatePlayers(sum){
    let players = []
    let playerName = ['a','b','c','d','e','f'];
    if (sum>6){
      sum=6;
    }
    for(let i = 0; i < sum; i++){
      players.push({name:playerName[i],pos:0})
    }
    return players
  }

  startGame(timer) {
    this.resetBoard();
    this.printBoard(true);
    timer(2000)
    do {
      this.resetBoard();
      this.printBoard(false);
      timer(2000);
    } while (this.winner==null);
    this.finished()
  }

  printBoard(first){
    if(first){
      for (let i = 0; i < this.players.length; i++) {
        this.printLine(this.players[i]);
      }
    }else{
      for (let i = 0; i < this.players.length; i++) {
        if(this.winner == null){
          this.players[i].pos += Dice.roll();
        }
        if (this.players[i].pos>=this.len-1) {
          this.players[i].pos=this.len-1;
          this.winner=this.players[i];
        }
        this.printLine(this.players[i]);
      }
    }
  }

  printLine(player) {
    let track = '';
    for (let i = 0; i < this.len; i++) {
      if (i == player.pos) {
        track += `${player.name}|`;
      }else{
        track += ' |';
      }
    }
    console.log(track);
  }

  finished(){
    console.log(`the winner is ${this.winner.name}`);
  }

  resetBoard() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
