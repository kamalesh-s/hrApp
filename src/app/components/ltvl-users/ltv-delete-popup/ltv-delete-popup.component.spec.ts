import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtvDeletePopupComponent } from './ltv-delete-popup.component';

describe('LtvDeletePopupComponent', () => {
  let component: LtvDeletePopupComponent;
  let fixture: ComponentFixture<LtvDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtvDeletePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtvDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
