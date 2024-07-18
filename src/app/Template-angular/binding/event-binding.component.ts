import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div class="box">
      <h3>Event Binding</h3>
      <button (click)="onClick($event)">click</button>
      {{ greeting }}
      <button (click)="greeting = 'hello'">hello</button>
    </div>
  `,
  styles: ``,
})
export class EventBindingComponent {
  greeting = '';
  onClick(event: any) {
    this.greeting = 'hello greeting';
  }
}
