import { Component } from '@angular/core';

@Component({
  selector: 'app-chain-pips',
  template: `
    <div class="box">
      <h3>Chain Pips</h3>
      <p>My birthday is {{ birthday | date : 'dd MMMM yyyy' | uppercase }}</p>
    </div>
  `,
  styles: ``,
})
export class ChainPipsComponent {
  birthday = new Date(2003, 3, 2);
}
