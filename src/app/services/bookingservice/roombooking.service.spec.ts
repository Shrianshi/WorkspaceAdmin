import { TestBed } from '@angular/core/testing';

import { RoombookingService } from './roombooking.service';

describe('RoombookingService', () => {
  let service: RoombookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoombookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
