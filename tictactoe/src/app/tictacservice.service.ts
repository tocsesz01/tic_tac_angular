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
    let goodId = null;
    // 'O' wins by vertical
      for (let i = 0; i < 9; i+= 3){
      if (this.board[i].tick == 'O' && this.board[i + 1].tick == 'O' && this.board[i + 2].tick == null){
            goodId = this.board[i + 2].id;
      } else if (this.board[i].tick == 'O' && this.board[i + 1].tick == null && this.board[i + 2].tick == 'O'){
            goodId = this.board[i + 1].id
      }else if (this.board[i].tick == null && this.board[i + 1].tick == 'O' && this.board[i + 2].tick == 'O'){
            goodId = this.board[i].id
      }
      //'O' wins by horizontal
      } if (goodId == null){
        for (let i = 0; i < 3; i++){
          if (this.board[i].tick == 'O' && this.board[i + 3].tick == 'O' && this.board[i + 6].tick == null){
            goodId = this.board[i + 6].id;
          } else if (this.board[i].tick == 'O' && this.board[i + 3].tick == null && this.board[i + 6].tick == 'O'){
            goodId = this.board[i + 3].id
          }else if (this.board[i].tick == null && this.board[i + 3].tick == 'O' && this.board[i + 6].tick == 'O'){
            goodId = this.board[i].id
          }
        }
        // 'O' wins by diagonal
        } if (goodId == null){
          const tick0 = this.board[0].tick;
          let tick4 = this.board[4].tick;
          let tick8 = this.board[8].tick;
          if (tick0 == 'O' && tick4 == 'O' && tick8 == null){
            goodId = this.board[8].id;
          }else if (tick0 == 'O' && tick4 == null && tick8 == 'O'){
            goodId = this.board[4].id;
          }else if (tick0 == null && tick4 == 'O' && tick8 == 'O'){
            goodId = this.board[0].id;
          }
          let tick2 = this.board[2].tick;
          let tick6 = this.board[6].tick;
          if (tick2 == 'O' && tick4 == 'O' && tick6 == null){
            goodId = this.board[6].id;
          }else if (tick2 == 'O' && tick4 == null && tick6 == 'O'){
            goodId = this.board[4].id;
          }else if (tick2 == null && tick4 == 'O' && tick6 == 'O'){
            goodId = this.board[2].id;
          }
        }
          // 'O' counters 'X' horizontally
          if (goodId == null){
            for (let i = 0; i < 9; i+= 3){
              if (this.board[i].tick == 'X' && this.board[i + 1].tick == 'X' && this.board[i + 2].tick == null){
                    goodId = this.board[i + 2].id;
              } else if (this.board[i].tick == 'X' && this.board[i + 1].tick == null && this.board[i + 2].tick == 'X'
                         ){
                    goodId = this.board[i + 1].id
              }else if (this.board[i].tick == null && this.board[i + 1].tick == 'X' && this.board[i + 2].tick == 'X'
                        ){
                    goodId = this.board[i].id
              }
          }
        }
          // 'O' counters 'X' vertically
          if (goodId == null){
            for (let i = 0; i < 3; i++){
              if (this.board[i].tick == 'X' && this.board[i + 3].tick == 'X' && this.board[i + 6].tick == null
                  ){
                goodId = this.board[i + 6].id;
              } else if (this.board[i].tick == 'X' && this.board[i + 3].tick == null && this.board[i + 6].tick == 'X'
                         ){
                goodId = this.board[i + 3].id
              }else if (this.board[i].tick == null && this.board[i + 3].tick == 'X' && this.board[i + 6].tick == 'X'
                        ){
                goodId = this.board[i].id
              }
            }
          }
          // 'O' counters 'X' diagonally
          if (goodId == null){
            const tick0 = this.board[0].tick;
            let tick4 = this.board[4].tick;
            let tick8 = this.board[8].tick;
            if (tick0 == 'X' && tick4 == 'X' && tick8 == null){
              goodId = this.board[8].id;
            }else if (tick0 == 'X' && tick4 == null && tick8 == 'X'){
              goodId = this.board[4].id;
            }else if (tick0 == null && tick4 == 'X' && tick8 == 'X'){
              goodId = this.board[0].id;
            }
            let tick2 = this.board[2].tick;
            let tick6 = this.board[6].tick;
            if (tick2 == 'X' && tick4 == 'X' && tick6 == null){
              goodId = this.board[6].id;
            }else if (tick2 == 'X' && tick4 == null && tick6 == 'X'){
              goodId = this.board[4].id;
            }else if (tick2 == null && tick4 == 'X' && tick6 == 'X'){
              goodId = this.board[2].id;
            }
          }
      
    if (goodId == null) goodId = goodBoard.map(({id}: any) => id)[this.randomNumber(goodBoard.length)];
    if (this.turnCount == 1 && this.board[4].tick == null){
      goodId = this.board[4].id;
    } else if (this.turnCount == 1 && this.board[4].tick != null){
      goodId = this.board[0].id;
    }
    if (this.turnCount == 3 && this.board[4].tick == 'X' && this.board[6].tick == null && goodId==null){
      goodId = this.board[6].id;
    }
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
