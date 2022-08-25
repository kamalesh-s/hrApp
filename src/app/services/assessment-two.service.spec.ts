import { TestBed } from '@angular/core/testing';

import { AssessmentTwoService } from './assessment-two.service';

describe('AssessmentTwoService', () => {
  let service: AssessmentTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
