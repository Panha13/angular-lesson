import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <div class="box">
      <h3>Two way Binding</h3>
      <input [(ngModel)]="name" type="text" />
      <p>Hello, {{ name }}!</p>
      <input type="checkbox" [(ngModel)]="isChecked" /> Toggle Checkbox
      <p>Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}</p>
    </div>
  `,
  styles: ``,
})
export class TwoWayBindingComponent {
  name: string = 'Tith sopanha';
  isChecked: boolean = false;
}
