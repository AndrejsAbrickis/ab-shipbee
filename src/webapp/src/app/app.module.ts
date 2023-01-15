import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParcelsComponent } from './components/parcels/parcels.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { AppHeaderComponent } from './components/header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ParcelsComponent,
    AppHeaderComponent,
    DrawerComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
