import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMappingComponent } from './skill-mapping.component';

describe('SkillMappingComponent', () => {
  let component: SkillMappingComponent;
  let fixture: ComponentFixture<SkillMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
