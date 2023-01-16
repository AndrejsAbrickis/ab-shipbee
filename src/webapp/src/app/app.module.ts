import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParcelsComponent } from './components/parcels/parcels.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { AppHeaderComponent } from './components/header/app-header.component';
import { FormsModule } from '@angular/forms';
import { NewParcelFormComponent } from './components/new-parcel-form/new-parcel-form.component';
import { ParcelFiltersComponent } from './components/parcel-filters/parcel-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    ParcelsComponent,
    AppHeaderComponent,
    DrawerComponent,
    NewParcelFormComponent,
    ParcelFiltersComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
