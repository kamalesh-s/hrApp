import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDeletePopupComponent } from './department-delete-popup.component';

describe('DepartmentDeletePopupComponent', () => {
  let component: DepartmentDeletePopupComponent;
  let fixture: ComponentFixture<DepartmentDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDeletePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
