import { Component,Input,OnInit } from '@angular/core';
import { TictacserviceService } from 'src/app/tictacservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
    constructor(public boardService: TictacserviceService){}
  
    ngOnInit(): void {}
  
    
  }

