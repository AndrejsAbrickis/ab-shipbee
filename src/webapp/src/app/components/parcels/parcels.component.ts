import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Parcel } from 'src/app/models/parcel';
import { ParcelsHttpService } from 'src/app/services/parcels-http.service';
import { ParcelsResponse } from 'src/app/services/parcels.response';

@Component({
  selector: 'parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit {
  constructor(private parcelsHttpService: ParcelsHttpService) {}

  parcelsResponse!: Observable<ParcelsResponse>;

  ngOnInit(): void {
    this.parcelsResponse = this.parcelsHttpService.get();
  }
}
