import { Component, OnInit } from '@angular/core';
import { TictacserviceService } from './tictacservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(tictacservice: TictacserviceService){}
  title = 'tictactoe';

  ngOnInit(): void {}

}
