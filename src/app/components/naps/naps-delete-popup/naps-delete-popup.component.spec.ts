import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapsDeletePopupComponent } from './naps-delete-popup.component';

describe('NapsDeletePopupComponent', () => {
  let component: NapsDeletePopupComponent;
  let fixture: ComponentFixture<NapsDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapsDeletePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapsDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
