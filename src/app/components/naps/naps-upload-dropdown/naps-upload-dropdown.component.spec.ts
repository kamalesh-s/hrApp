import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapsUploadDropdownComponent } from './naps-upload-dropdown.component';

describe('NapsUploadDropdownComponent', () => {
  let component: NapsUploadDropdownComponent;
  let fixture: ComponentFixture<NapsUploadDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapsUploadDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapsUploadDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
