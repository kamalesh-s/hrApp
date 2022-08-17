import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMasterComponent } from './skill.component';

describe('SkillMasterComponent', () => {
  let component: SkillMasterComponent;
  let fixture: ComponentFixture<SkillMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
