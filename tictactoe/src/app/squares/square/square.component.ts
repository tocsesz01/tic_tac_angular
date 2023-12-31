import { Component, Input, OnInit } from '@angular/core';
import { TictacserviceService } from 'src/app/tictacservice.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() tick: any = null;
  @Input() id: number;

  constructor(public ticserv: TictacserviceService){}

  ngOnInit(): void {}

  clickedSquare(){
    if (this.ticserv.versusPlayer){
    if (this.ticserv.nextPlayer == 'X' && this.tick == null && this.ticserv.isGameOver == false){
      this.ticserv.nextPlayer = 'O';
      this.tick = 'X';
      this.ticserv.updateBoard(this)
      this.ticserv.turnCount++;
      this.ticserv.checkWinner();
      console.log(this.ticserv.winner);
    } else if (this.ticserv.nextPlayer == 'O' && this.tick == null && this.ticserv.isGameOver == false){
      this.ticserv.nextPlayer = 'X';
      this.tick = 'O';
      this.ticserv.updateBoard(this)
      this.ticserv.turnCount++;
      this.ticserv.checkWinner();
    }}
    if (this.ticserv.versusComputer && this.tick == null && this.ticserv.isGameOver == false){
      this.tick = 'X';
      this.ticserv.updateBoard(this)
      this.ticserv.turnCount++;
      this.ticserv.checkWinner();
      if (this.ticserv.isGameOver == false){
      const moveID = this.ticserv.goodMove();
      this.ticserv.turnCount++;
      this.ticserv.checkWinner();
      }
    }
}
}