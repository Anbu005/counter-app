import { Component } from '@angular/core';
import { CounterHistoryComponent } from './components/counter-history/counter-history.component';

@Component({
  selector: 'app-root',
  imports: [CounterHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count: number = 0;
  counterHistory: Array<string> = [];

  increment() {
    this.count++;
    this.counterHistory.unshift(`[+1] Counter is now ${this.count}`);
  }

  decrement() {
    this.count--;
    this.counterHistory.unshift(`[-1] Counter is now ${this.count}`);
  }

  reset() {
    this.count = 0;
    this.counterHistory.unshift(`[Reset] Counter is now ${this.count}`);
  }

  resetHistory() {
    this.counterHistory = [];
  }
}
