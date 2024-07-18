import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pips',
  template: `
    <div class="box">
      <h3>Build-in-Pipes</h3>
      <nz-table
        nzBordered
        nzSize="middle"
        nzTableLayout="fixed"
        nzShowPagination="false"
        [nzData]="data"
        ngSkipHydration
      >
        <thead>
          <tr>
            <th>Pipes</th>
            <th>Example Usage</th>
            <th>Output :</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Uppercase</td>
            <td>'hello' | uppercase</td>
            <td>{{ 'hello' | uppercase }}</td>
          </tr>
          <tr>
            <td>Lowercase</td>
            <td>'HELLO' | lowercase</td>
            <td>{{ 'HELLO' | lowercase }}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>'2024-07-18' | date:'fullDate'</td>
            <td>{{ '2024-07-18' | date : 'fullDate' }}</td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>1234.56 | currency:'USD':'symbol'</td>
            <td>{{ 1234.56 | currency : 'USD' : 'symbol' }}</td>
          </tr>
          <tr>
            <td>Decimal</td>
            <td>3.14159265359 | number:'1.2-2'</td>
            <td>{{ 3.14159265359 | number : '1.1-4' }}</td>
          </tr>
          <tr>
            <td>Percent</td>
            <td>0.25 | percent</td>
            <td>{{ 0.25 | percent }}</td>
          </tr>
        </tbody>
      </nz-table>
    </div>
  `,
  styles: [
    `
      nz-table th,
      nz-table td {
        text-align: center;
      }

      nz-table th {
        background-color: #a2aec7;
      }

      /* nz-table td {
        background-color: #fafafa;
      } */
    `,
  ],
})
export class BuiltInPipsComponent {
  data = [
    { name: 'uppercase', pipe: 'uppercase' },
    { name: 'lowercase', pipe: 'lowercase' },
    { name: 'date', pipe: 'date' },
  ];
}
