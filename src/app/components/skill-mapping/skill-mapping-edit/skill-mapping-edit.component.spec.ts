import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMappingEditComponent } from './skill-mapping-edit.component';

describe('SkillMappingEditComponent', () => {
  let component: SkillMappingEditComponent;
  let fixture: ComponentFixture<SkillMappingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillMappingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMappingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
