import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDropdownComponent } from './upload-dropdown.component';

describe('UploadDropdownComponent', () => {
  let component: UploadDropdownComponent;
  let fixture: ComponentFixture<UploadDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
