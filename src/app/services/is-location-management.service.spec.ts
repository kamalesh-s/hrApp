import { TestBed } from '@angular/core/testing';

import { IsLocationManagementService } from './is-location-management.service';

describe('IsLocationManagementService', () => {
  let service: IsLocationManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLocationManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
