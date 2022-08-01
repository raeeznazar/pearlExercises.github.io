import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'oddEven';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  gameStart(numberFired: number) {
    if (numberFired % 2 === 0) {
      this.evenNumbers.push(numberFired);
    } else {
      this.oddNumbers.push(numberFired);
    }
  }
}
