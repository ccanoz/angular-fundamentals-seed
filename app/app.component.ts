// Component decorator
import { Component } from '@angular/core';

@Component({
  // select = element in html <app-root>
  selector: 'app-root',
  // points to a sass file
  styleUrls: ['app.component.scss'],
  // alternatively can use templateUrl
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      >
      <input
        type="text"
        [(ngModel)]="name"
      >
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Cyra';

  handleClick() {
    this.name = 'Motto';
  }

  handleChange(value: string) {
    // when called, passes an event string
    this.name = value;
  }

}

