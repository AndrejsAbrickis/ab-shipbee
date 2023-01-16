import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelFiltersComponent } from './parcel-filters.component';

describe('ParcelFiltersComponent', () => {
  let component: ParcelFiltersComponent;
  let fixture: ComponentFixture<ParcelFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
