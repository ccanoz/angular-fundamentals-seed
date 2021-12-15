import {Component, Input, Output, EventEmitter, OnChanges, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status"
            [class.checked-in]="detail.checkedIn">
      </span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">{{ detail.fullname }}</div>
      <p>{{ detail | json }}</p>
      <div class="date">
        Check in
        date: {{ detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMd' | uppercase) : 'Not checked in' }}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})

export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter<any>();

  // binds custom EventEmitter to property
  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

  editing: boolean = false;

  constructor() {
  }

  ngOnChanges(changes) {
    if (changes.detail) {
      // creates a clone and reassigns to itself - b/c component should only change after clicking Done
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      // tell parent that input has been edited
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}
