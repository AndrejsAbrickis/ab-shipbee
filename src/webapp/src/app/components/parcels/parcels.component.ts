import { Component, Input } from '@angular/core';
import { Parcel } from 'src/app/models/parcel';

@Component({
  selector: 'parcels',
  templateUrl: './parcels.component.html',
})
export class ParcelsComponent {
  @Input()
  parcels: Parcel[] = [];
}
