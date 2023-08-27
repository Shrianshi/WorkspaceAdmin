import { TestBed } from '@angular/core/testing';

import { DeskbookingService } from './deskbooking.service';

describe('DeskbookingService', () => {
  let service: DeskbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeskbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
