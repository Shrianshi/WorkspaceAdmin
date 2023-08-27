import { TestBed } from '@angular/core/testing';

import { WorkspaceFilterService } from './workspace-filter.service';

describe('WorkspaceFilterService', () => {
  let service: WorkspaceFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
