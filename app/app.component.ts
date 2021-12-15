// Component decorator
import { Component } from '@angular/core';

@Component({
  // select = element in html <app-root>
  selector: 'app-root',
  // points to a sass file
  styleUrls: ['app.component.scss'],
  // alternatively can use templateUrl
  template: `
    <passenger-dashboard></passenger-dashboard>
  `
})
export class AppComponent {

}

