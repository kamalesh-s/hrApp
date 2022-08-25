import { TestBed } from '@angular/core/testing';

import { ReviewOneService } from './review-one.service';

describe('ReviewOneService', () => {
  let service: ReviewOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
