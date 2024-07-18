import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <div class="box">
      <h1>Pipes in Angular</h1>
      <div nz-row nzJustify="space-between" style="gap: 10px;">
        <app-built-in-pips></app-built-in-pips>
        <app-custom-pips></app-custom-pips>
        <app-paramater-pips></app-paramater-pips>
        <app-chain-pips></app-chain-pips>
      </div>
    </div>
  `,
  styles: [],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
