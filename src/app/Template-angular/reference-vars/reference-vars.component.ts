import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-vars',
  template: `
    <div class="box">
      <h1>Reference Variables</h1>
      <input #searchInput type="text" [(ngModel)]="searchInput.value" />

      <button (click)="search(searchInput.value)">Search</button><br />
      <span>search value: {{ searchInput.value }}</span>
      <ul>
        <li *ngFor="let item of filterItems">
          {{ item.name }} - {{ item.age }} - {{ item.address }}
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class ReferenceVarsComponent implements OnInit {
  items = [
    { name: 'John Doe', age: 30, address: '123 Main St' },
    { name: 'Jane Smith', age: 25, address: '456 Maple Ave' },
    { name: 'Emily Johnson', age: 35, address: '789 Elm St' },
  ];

  filterItems = [...this.items];

  search(query: string) {
    this.filterItems = this.items.filter((item) => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.address.toLowerCase().includes(query.toLowerCase())
      );
    });
    // console.log(query);
    // console.log(this.filterItems);
  }

  constructor() {}

  ngOnInit() {}
}
