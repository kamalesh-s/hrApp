import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupDeletePopupComponent } from './product-group-delete-popup.component';

describe('ProductGroupDeletePopupComponent', () => {
  let component: ProductGroupDeletePopupComponent;
  let fixture: ComponentFixture<ProductGroupDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupDeletePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
