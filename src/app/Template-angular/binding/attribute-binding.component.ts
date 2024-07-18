import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  template: `
    <div class="box">
      <h3>Attribute Binding</h3>
      <input
        [attr.disabled]="isDisabled ? 'true' : null"
        type="text"
        placeholder="input is disabled"
      />
      <br />
      <img
        [src]="imageUrl"
        [attr.alt]="imageAlt"
        [attr.width]="100"
        [attr.height]="100"
      />
    </div>
  `,
  styles: ``,
})
export class AttributeBindingComponent {
  isDisabled = true;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageAlt = 'Angular Logo';
}
