import { TestBed } from '@angular/core/testing';

import { CabBookingService } from './cab-booking.service';

describe('CabBookingService', () => {
  let service: CabBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
