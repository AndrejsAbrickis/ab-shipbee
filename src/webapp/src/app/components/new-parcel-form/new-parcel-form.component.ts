import { Component, EventEmitter, Output } from '@angular/core';
import { COUNTRIES } from 'src/app/config/countries';
import { Parcel } from 'src/app/models/parcel';
import { ParcelsHttpService } from 'src/app/services/parcels-http.service';

@Component({
  selector: 'new-parcel-form',
  templateUrl: './new-parcel-form.component.html',
})
export class NewParcelFormComponent {
  constructor(private parcelsHttpService: ParcelsHttpService) {}

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  complete: EventEmitter<void> = new EventEmitter<void>();

  model = new Parcel();
  errorMessages: string[] = [];
  countries = COUNTRIES;

  createParcel(): void {
    this.errorMessages = [];

    this.parcelsHttpService.create(this.model).subscribe({
      complete: () => {
        this.complete.emit();
        this.cancel.emit();
      },
      error: ({ error }) => {
        this.errorMessages = error.message;
      },
    });
  }
}
