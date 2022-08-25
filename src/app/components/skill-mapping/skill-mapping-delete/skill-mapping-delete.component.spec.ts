import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMappingDeleteComponent } from './skill-mapping-delete.component';

describe('SkillMappingDeleteComponent', () => {
  let component: SkillMappingDeleteComponent;
  let fixture: ComponentFixture<SkillMappingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillMappingDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMappingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
