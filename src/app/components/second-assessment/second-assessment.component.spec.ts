import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAssessmentComponent } from './second-assessment.component';

describe('SecondAssessmentComponent', () => {
  let component: SecondAssessmentComponent;
  let fixture: ComponentFixture<SecondAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
