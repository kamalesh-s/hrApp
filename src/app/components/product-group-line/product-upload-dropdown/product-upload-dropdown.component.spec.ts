import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUploadDropdownComponent } from './product-upload-dropdown.component';

describe('ProductUploadDropdownComponent', () => {
  let component: ProductUploadDropdownComponent;
  let fixture: ComponentFixture<ProductUploadDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUploadDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUploadDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
