import { Component, Input, OnInit } from '@angular/core';
import { TictacserviceService } from 'src/app/tictacservice.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() tick: any = null;

  constructor(public ticserv: TictacserviceService){}

  ngOnInit(): void {}

  clickedSquare(){
    if (this.ticserv.nextPlayer == 'X' && this.tick == null){
      this.ticserv.nextPlayer = 'O';
      this.tick = 'X';
    } else if (this.ticserv.nextPlayer == 'O' && this.tick == null){
      this.ticserv.nextPlayer = 'X';
      this.tick = 'O';
    }
  }
}
