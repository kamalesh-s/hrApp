import { ComponentFixture, TestBed } from '@angular/core/testing';

import { skillUploadDropdownComponent } from './skill-upload-dropdown.component';

describe('UploadDropdownComponent', () => {
  let component: skillUploadDropdownComponent;
  let fixture: ComponentFixture<skillUploadDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ skillUploadDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(skillUploadDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
