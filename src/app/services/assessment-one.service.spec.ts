import { TestBed } from '@angular/core/testing';

import { AssessmentOneService } from './assessment-one.service';

describe('AssessmentOneService', () => {
  let service: AssessmentOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
