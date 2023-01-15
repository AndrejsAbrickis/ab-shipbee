import { TestBed } from '@angular/core/testing';

import { ParcelsHttpService } from './parcels-http.service';

describe('ParcelsHttpServiceService', () => {
  let service: ParcelsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcelsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
