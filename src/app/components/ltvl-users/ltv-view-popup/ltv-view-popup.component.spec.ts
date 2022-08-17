import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtvViewPopupComponent } from './ltv-view-popup.component';

describe('LtvViewPopupComponent', () => {
  let component: LtvViewPopupComponent;
  let fixture: ComponentFixture<LtvViewPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtvViewPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtvViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
