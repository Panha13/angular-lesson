import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <input #input type="text" placeholder="Enter fruit" />
    <button (click)="addFruit(input.value); input.value = ''">Add Fruit</button>
    <ul>
      <li *ngFor="let fruit of fruits">{{ fruit | uppercase }}</li>
    </ul>
  `,
  styles: ``,
})
export class ChildComponent {
  @Input() fruits: string[] = [];
  @Output() fruitAdded = new EventEmitter<string>();

  addFruit(fruit: string): void {
    if (fruit) {
      this.fruitAdded.emit(fruit);
    }
  }
}
