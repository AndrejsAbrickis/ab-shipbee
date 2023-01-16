import { Component, EventEmitter, Output } from '@angular/core';
import { COUNTRIES } from 'src/app/config/countries';
import { Search } from 'src/app/models/search';

@Component({
  selector: 'parcel-filters',
  templateUrl: './parcel-filters.component.html',
})
export class ParcelFiltersComponent {
  @Output()
  search: EventEmitter<Search> = new EventEmitter<Search>();

  countries = ['', ...COUNTRIES];
  model = new Search();

  onModelChange() {
    this.search.emit(this.model);
  }
}
