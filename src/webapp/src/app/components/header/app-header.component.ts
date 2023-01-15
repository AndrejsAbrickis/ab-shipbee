import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Input() title = '';

  @Output()
  addNewSku: EventEmitter<void> = new EventEmitter<void>();
}
