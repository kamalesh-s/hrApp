import { TestBed } from '@angular/core/testing';

import { NapsService } from './naps.service';

describe('NapsService', () => {
  let service: NapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
