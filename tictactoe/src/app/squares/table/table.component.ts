import { Component,Input,OnInit } from '@angular/core';
import { TictacserviceService } from 'src/app/tictacservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
    constructor(public boardService: TictacserviceService){}
    next: String = '';
    winner: String = '';
    ngOnInit(): void {
      this.next = this.boardService.nextPlayer;
    }

    changeNext(){
      this.next = this.boardService.nextPlayer;
      if (this.boardService.isGameOver == true){
        this.winner = this.boardService.winner;
      }
    }
    newGame(){
      this.winner = '';
      this.next = 'X';
      this.boardService.newGame();
      
    }
    
  }

