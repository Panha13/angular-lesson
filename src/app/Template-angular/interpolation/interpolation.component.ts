import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <div class="box">
      <h1>{{ title }}</h1>
      <h3>Name: {{ person.name }}</h3>
      <h3>Name with uppercase: {{ person.name.toUpperCase() }}</h3>
      <h3>Age : {{ person.age }}</h3>
      <h3>Person Info: {{ personInfo() }}</h3>
      <h3>5 + 5 = {{ 5 + 5 }}</h3>
    </div>
  `,
  styles: [],
})
export class InterpolationComponent implements OnInit {
  title: string = 'Interpolation';
  person: any = {
    name: 'Tith sopanha',
    age: 25,
  };

  personInfo(): string {
    return `${this.person.name} is ${this.person.age} years old.`;
  }

  constructor() {}

  ngOnInit() {}
}
