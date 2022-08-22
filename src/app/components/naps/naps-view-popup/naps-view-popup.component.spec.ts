import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapsViewPopupComponent } from './naps-view-popup.component';

describe('NapsViewPopupComponent', () => {
  let component: NapsViewPopupComponent;
  let fixture: ComponentFixture<NapsViewPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapsViewPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapsViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
