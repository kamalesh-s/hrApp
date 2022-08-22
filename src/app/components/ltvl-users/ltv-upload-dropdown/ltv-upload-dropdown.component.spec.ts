import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtvUploadDropdownComponent } from './ltv-upload-dropdown.component';

describe('LtvUploadDropdownComponent', () => {
  let component: LtvUploadDropdownComponent;
  let fixture: ComponentFixture<LtvUploadDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtvUploadDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtvUploadDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
