import { AfterViewInit, Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _isPlaying: boolean = false;

  constructor() { 
    this.isPlayingFunc();
  }

  ngOnInit(): void {
    this.isPlayingFunc();
  }

  isPlayingFunc(){
    setTimeout( () => {
      this._isPlaying = true;
      console.log(" ------------------------------------------------ ");
    }, 700);
  }

}
