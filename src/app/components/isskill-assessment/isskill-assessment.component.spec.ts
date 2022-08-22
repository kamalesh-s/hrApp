import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISSkillAssessmentComponent } from './isskill-assessment.component';

describe('ISSkillAssessmentComponent', () => {
  let component: ISSkillAssessmentComponent;
  let fixture: ComponentFixture<ISSkillAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISSkillAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ISSkillAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
