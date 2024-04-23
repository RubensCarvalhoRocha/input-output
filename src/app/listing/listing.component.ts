import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  @Input({
    required: true
  }) car!: Car;

  @Output() carSaved = new EventEmitter<Car>();

  handleCarSave(){
    this.carSaved.emit(this.car);
  }
}
