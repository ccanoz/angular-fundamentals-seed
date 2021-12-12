// Component decorator
import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  // select = element in html <app-root>
  selector: 'app-root',
  // points to a sass file
  styleUrls: ['app.component.scss'],
  // alternatively can use templateUrl
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [class.checked-in]="passenger.checkedIn"></span>
           {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
                [ngClass]="{
                    'checked-in': passenger.checkedIn,
                    'checked-out': !passenger.checkedIn}">
          </span>
           {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
                [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')">
          </span>
           {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
                [ngStyle]="{'backgroundColor':(passenger.checkedIn ? '#2ecc71' : '#c0392b')}">
          </span>
           {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: "Stephen",
    checkedIn: true
  }, {
    id: 2,
    fullname: "Rose",
    checkedIn: false
  }]
}

