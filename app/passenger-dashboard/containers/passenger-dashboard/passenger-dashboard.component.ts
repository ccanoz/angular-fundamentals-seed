import {Component} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div class="app">
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})

export class PassengerDashboardComponent {
  passengers: Passenger[];

  constructor() {
  }

  ngOnInit(){
    console.log('ngOnInit');
    this.passengers = [{
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
      checkedInDate: 1490742000000,
      children: [{name: 'Jessica', age: 1}]
    }, {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
      checkedInDate: null,
      children: null
    }]
  }

  handleRemove(event) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        // takes original passenger object, and merges event changes in
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    })
  }

}
