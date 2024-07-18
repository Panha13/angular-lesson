import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  template: `
    <div class="box">
      <h3>Class & Stylee Binding</h3>
      <h4>single class binding</h4>
      <div [class.highlight]="isHighlighted">
        This div will be highlighted if 'isHighlighted' is true.
      </div>
      <h4>Multiple class binding</h4>
      <div
        [class.highlight]="isHighlighted"
        [class.text-danger]="isError"
        [class.italic]="isItalic"
      >
        This div has multiple classes applied dynamically.
      </div>
      <h4>Single style binding</h4>
      <div [style.background-color]="backgroundColor">
        This div has a dynamically applied background color.
      </div>
      <h4>Multiple style binding</h4>
      <nav [style]="navStyle">
        <a
          [style.text-decoration]="activeLinkStyle"
          [style.margin-right.px]="20"
          >Home Page</a
        >
        <a [style.text-decoration]="linkStyle">Login</a>
      </nav>
    </div>
  `,
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
      .text-danger {
        color: red;
      }
      .italic {
        font-style: italic;
      }
    `,
  ],
})
export class ClassStyleBindingComponent implements OnInit {
  isHighlighted = true;
  isError = false;
  isItalic = true;
  backgroundColor = 'red';

  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';
  linkStyle = 'underline';
  activeLinkStyle = 'overline';

  constructor() {}

  ngOnInit() {}
}
