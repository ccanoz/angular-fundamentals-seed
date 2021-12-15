import { Component, Input} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-count',
  template: `
    <div >
      <h3>Airline Passengers</h3>
      <div>
        Total Passengers: {{ items.length }}
        Total checked in: {{checkedInCount()}}/{{items.length}}
      </div>
    </div>
  `
})
export class PassengerCountComponent {
  // add input decorator on top of variable to bind
  @Input()
  items: Passenger[];

  checkedInCount(): number {
    if (!this.items) return;

    // return array of all passengers that are checked in
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

  constructor() {
  }
}
