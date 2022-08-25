import { TestBed } from '@angular/core/testing';

import { IsSkillAssessmentService } from './is-skill-assessment.service';

describe('IsSkillAssessmentService', () => {
  let service: IsSkillAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsSkillAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
