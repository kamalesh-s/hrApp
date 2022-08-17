import { TestBed } from '@angular/core/testing';

import { SkillMappingService } from './skill-mapping.service';

describe('SkillMappingService', () => {
  let service: SkillMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
