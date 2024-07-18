import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pips',
  template: `
    <div class="box">
      <h3>Custom Pipes</h3>
      <p>{{ description | shorten }}</p>
    </div>
  `,
  styles: ``,
})
export class CustomPipsComponent {
  description: string =
    'Angular Pipes offer a versatile way to manipulate and present data within Angular applications. They serve as a robust toolkit for developers, enabling them to streamline the process of transforming, filtering, and formatting data before it reaches the user interface.';
}
