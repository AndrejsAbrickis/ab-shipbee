import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isNewSkuFormVisible = true;

  toggleNewSkuFormVisibility() {
    this.isNewSkuFormVisible = !this.isNewSkuFormVisible;
  }
}
