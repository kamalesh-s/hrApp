import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtvEditPopupComponent } from './ltv-edit-popup.component';

describe('LtvEditPopupComponent', () => {
  let component: LtvEditPopupComponent;
  let fixture: ComponentFixture<LtvEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtvEditPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtvEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
