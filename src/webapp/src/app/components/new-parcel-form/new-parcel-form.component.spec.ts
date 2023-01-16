import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParcelFormComponent } from './new-parcel-form.component';

describe('NewParcelFormComponent', () => {
  let component: NewParcelFormComponent;
  let fixture: ComponentFixture<NewParcelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewParcelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewParcelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
