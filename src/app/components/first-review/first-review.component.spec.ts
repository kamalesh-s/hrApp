import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstReviewComponent } from './first-review.component';

describe('FirstReviewComponent', () => {
  let component: FirstReviewComponent;
  let fixture: ComponentFixture<FirstReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
