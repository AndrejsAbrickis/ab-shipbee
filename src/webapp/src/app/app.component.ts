import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './models/search';
import { ParcelsHttpService } from './services/parcels-http.service';
import { ParcelsResponse } from './services/parcels.response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private parcelsHttpService: ParcelsHttpService) {}

  parcelsResponse!: Observable<ParcelsResponse>;
  isNewSkuFormVisible = false;

  ngOnInit(): void {
    this.getParcels();
  }

  getParcels() {
    this.parcelsResponse = this.parcelsHttpService.get();
  }

  searchParcels(search: Search) {
    this.parcelsResponse = this.parcelsHttpService.search(search);
  }

  toggleNewSkuFormVisibility() {
    this.isNewSkuFormVisible = !this.isNewSkuFormVisible;
  }
}
