import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditPopupComponent } from './department-edit-popup.component';

describe('DepartmentEditPopupComponent', () => {
  let component: DepartmentEditPopupComponent;
  let fixture: ComponentFixture<DepartmentEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEditPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
