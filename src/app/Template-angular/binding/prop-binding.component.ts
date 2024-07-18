import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  template: `
    <div class="box">
      <h3>Property Binding</h3>
      <img [src]="imageUrl" style="width: 10%;" />
      <br />
      <p [ngClass]="classes">
        [ngClass] binding to the classes property making this blue
      </p>
      <button type="button" [disabled]="isDisabled">Disabled Button</button>
    </div>
  `,
  styles: [
    `
      .blueText {
        color: blue;
      }
      .redText {
        color: red;
      }
    `,
  ],
})
export class PropBindingComponent implements OnInit {
  isDisabled = true;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageAlt = 'Angular Logo';
  classes = {
    blueText: true,
    redText: false,
  };

  constructor() {}

  ngOnInit() {}
}
