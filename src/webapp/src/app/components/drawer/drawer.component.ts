import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {
  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();
}
