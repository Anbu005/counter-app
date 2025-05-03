import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-history',
  imports: [CommonModule],
  templateUrl: './counter-history.component.html',
  styleUrl: './counter-history.component.scss'
})
export class CounterHistoryComponent {
  @Input() counterHistory: Array<string> = [];
  @Output() resetHistory = new EventEmitter<any>();

  reset() {
    this.resetHistory.emit();
  }
}
