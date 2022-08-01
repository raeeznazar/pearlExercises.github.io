import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css'],
})
export class GameControlsComponent implements OnInit {
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  constructor() {}

  ngOnInit(): void {}

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPasueGame() {
    clearInterval(this.interval);
  }
}
