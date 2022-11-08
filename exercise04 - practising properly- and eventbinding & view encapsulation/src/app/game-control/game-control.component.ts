import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incNumber: number = 0;
  myInterval;
  @Output() emitEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.myInterval = setInterval(() => {
      this.emitEvent.emit(this.incNumber++);
      }, 1000);
  }

  onStopGame(){
      clearInterval(this.myInterval);
  }
}
