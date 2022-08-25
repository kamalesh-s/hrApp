import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillAssessmentComponent } from './employee-skill-assessment.component';

describe('EmployeeSkillAssessmentComponent', () => {
  let component: EmployeeSkillAssessmentComponent;
  let fixture: ComponentFixture<EmployeeSkillAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSkillAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSkillAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
