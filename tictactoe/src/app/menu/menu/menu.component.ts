import { Component, OnInit } from '@angular/core';
import { TictacserviceService } from 'src/app/tictacservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
constructor(public tictacservice: TictacserviceService){}
credits: boolean = false;
ngOnInit(): void {}

clickedVsPlayer(): void {
  this.tictacservice.menu = false;
  this.tictacservice.versusPlayer = true;
}

clickedVsComputer(): void {
  this.tictacservice.menu = false;
  this.tictacservice.versusComputer = true;
  }
clickedCredits():void{
  this.credits = !this.credits;

}
}
