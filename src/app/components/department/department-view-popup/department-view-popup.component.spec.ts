import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentViewPopupComponent } from './department-view-popup.component';

describe('DepartmentViewPopupComponent', () => {
  let component: DepartmentViewPopupComponent;
  let fixture: ComponentFixture<DepartmentViewPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentViewPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
