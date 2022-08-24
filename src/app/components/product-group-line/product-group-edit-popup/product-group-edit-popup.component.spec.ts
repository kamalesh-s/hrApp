import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupEditPopupComponent } from './product-group-edit-popup.component';

describe('ProductGroupEditPopupComponent', () => {
  let component: ProductGroupEditPopupComponent;
  let fixture: ComponentFixture<ProductGroupEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupEditPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
