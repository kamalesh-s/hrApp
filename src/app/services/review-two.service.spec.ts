import { TestBed } from '@angular/core/testing';

import { ReviewTwoService } from './review-two.service';

describe('ReviewTwoService', () => {
  let service: ReviewTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
