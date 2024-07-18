import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <div class="box">
      <h1>Binding</h1>
      <div nz-row style="gap: 10px">
        <app-prop-binding></app-prop-binding>
        <app-attribute-binding></app-attribute-binding>
        <app-class-style-binding></app-class-style-binding>
        <app-event-binding></app-event-binding>
        <app-two-way-binding></app-two-way-binding>
      </div>
    </div>
  `,
  styles: [``],
})
export class BindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
