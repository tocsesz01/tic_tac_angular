import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TictacserviceService {
  public board: any = [];
  gameSize: number = 9;
  turnCount: number = 0;
  nextPlayer: String = 'X';
  isGameOver: Boolean = false;
  isGameRunning: Boolean = false;
  winner: String = '';
  public menu: Boolean = true;
  public versusPlayer: Boolean = false;
  public versusComputer: Boolean = false;

  constructor() { 
    this.newGame()
  }
  randomNumber(max: number): number{
    const random = Math.floor(Math.random() * max);
    return random;
  }

  newGame(): void{
    this.winner = '';
    this.turnCount = 0;
    this.nextPlayer = 'X';
    this.isGameOver= false;
    this.isGameRunning= true;
    this.board = this.newBoard();
  }

  newBoard(){
    let board: any = [];
    for( let i = 0; i < this.gameSize; i ++ ){
      board.push( { id: i, tick: null } )
    };
    
    return board;
  }
  updateBoard( squareClicked: any ){
    this.board[squareClicked.id].tick = squareClicked.tick;
  }

  goodMove(): number{
    const goodBoard = this.board.filter((s: any) => s.tick == null);
    const goodId = goodBoard.map(({id}: any) => id)[this.randomNumber(goodBoard.length)];
    console.log(goodId);
    this.board[goodId].tick = 'O';
    return goodId;
  }

  checkWinner(){
    let tick1;
    let tick2;
    let tick3;
    for(let i = 0; i < 9; i+=3){
      tick1 = this.board[i].tick;
      tick2 = this.board[i+1].tick;
      tick3 = this.board[i+2].tick;
      if (tick1 == tick2 && tick2 == tick3 && tick1 != null){
        this.winner = tick1;
        this.isGameOver = true;
      }
    }
    for(let i = 0; i < Math.sqrt(this.gameSize); i ++){
      tick1 = this.board[i].tick;
      tick2 = this.board[i+Math.sqrt(this.gameSize)].tick;
      tick3 = this.board[i+(Math.sqrt(this.gameSize) * 2)].tick;
      if (tick1 == tick2 && tick2 == tick3 && tick1 != null){
        this.winner = tick1;
        this.isGameOver = true;
      }
    }
      tick1 = this.board[0].tick;
      tick2 = this.board[4].tick;
      tick3 = this.board[8].tick;
      if (tick1 == tick2 && tick2 == tick3 && tick1 != null){
        this.winner = tick1;
        this.isGameOver = true;
      }
      tick1 = this.board[2].tick;
      tick2 = this.board[4].tick;
      tick3 = this.board[6].tick;
      if (tick1 == tick2 && tick2 == tick3 && tick1 != null){
        this.winner = tick1;
        this.isGameOver = true;
      }
      if (this.turnCount == 9 && this.winner === ''){
        
        this.winner = 'draw';
        this.isGameOver = true;
      }  
  }
}
