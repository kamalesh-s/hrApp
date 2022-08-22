import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapsEditPopupComponent } from './naps-edit-popup.component';

describe('NapsEditPopupComponent', () => {
  let component: NapsEditPopupComponent;
  let fixture: ComponentFixture<NapsEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapsEditPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapsEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
