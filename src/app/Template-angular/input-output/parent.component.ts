import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div class="box">
      <h1>{{ title }}</h1>
      <app-child [fruits]="fruits" (fruitAdded)="addfruit($event)"></app-child>
    </div>
  `,
  styles: ``,
})
export class ParentComponent {
  title: string = '@input and @output';
  fruits = ['apple', 'pear', 'mango'];
  addfruit(fruit: string): void {
    this.fruits.push(fruit);
  }
}
