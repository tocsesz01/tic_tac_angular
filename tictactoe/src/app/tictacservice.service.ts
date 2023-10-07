import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TictacserviceService {
  public board = [];
  gameSize: number = 9;
  turnCount: number = 0;
  nextPlayer: String = 'X';
  isGameOver: Boolean = false;
  isGameRunning: Boolean = false;

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
      console.log(i);
    };
    
    return board;
  }

  checkWinner(){
    for(let i = 0; i < this.gameSize; i ++ ){
      
    }
  }
  
}
