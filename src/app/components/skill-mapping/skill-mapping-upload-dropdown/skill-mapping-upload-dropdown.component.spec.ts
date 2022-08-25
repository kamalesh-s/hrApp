import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMappingUploadDropdownComponent } from './skill-mapping-upload-dropdown.component';

describe('SkillMappingUploadDropdownComponent', () => {
  let component: SkillMappingUploadDropdownComponent;
  let fixture: ComponentFixture<SkillMappingUploadDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillMappingUploadDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMappingUploadDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
