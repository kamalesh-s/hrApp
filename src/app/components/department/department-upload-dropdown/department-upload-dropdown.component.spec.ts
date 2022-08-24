import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentUploadDropdownComponent } from './department-upload-dropdown.component';

describe('DepartmentUploadDropdownComponent', () => {
  let component: DepartmentUploadDropdownComponent;
  let fixture: ComponentFixture<DepartmentUploadDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentUploadDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentUploadDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
