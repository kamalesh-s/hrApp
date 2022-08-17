import { TestBed } from '@angular/core/testing';

import { LtvlserviceService } from './ltvlEmployeeservice.service';

describe('LtvlserviceService', () => {
  let service: LtvlserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LtvlserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
