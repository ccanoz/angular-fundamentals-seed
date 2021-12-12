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
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input type="text" #username>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Cyra';

  handleClick(value: string) {
    console.log(value);
  }
}

