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

  constructor() { 
    this.newGame()
  }

  newGame(): void{
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
      console.log(board[i].tick);
    };
    
    return board;
  }
  updateBoard( squareClicked: any ){
    this.board[ squareClicked].tick = squareClicked.tick
  }

  checkWinner(){
    let tick1;
    let tick2;
    let tick3;
    for(let i = 0; i < this.gameSize; i += Math.sqrt(this.gameSize) ){
      tick1 = this.board[i].tick;
      tick2 = this.board[i+1].tick;
      tick3 = this.board[i+2].tick;
      console.log(tick1 + " " + tick2+ " " )
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
  }
  
}
