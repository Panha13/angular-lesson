import { Component } from '@angular/core';

@Component({
  selector: 'app-paramater-pips',
  template: `
    <div class="box">
      <h3>Paramater Pips</h3>
      <p>Short Date: {{ '2024-07-18' | date : 'short' }}</p>
      <p>Long Date: {{ '2024-07-18' | date : 'long' }}</p>
      <p>{{ 200 | currency : 'EUR' }}</p>
      <p>{{ 200 | currency : 'USD' : 'code' }}</p>
    </div>
  `,
  styles: ``,
})
export class ParamaterPipsComponent {}
