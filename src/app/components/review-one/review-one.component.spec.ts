import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOneComponent } from './review-one.component';

describe('ReviewOneComponent', () => {
  let component: ReviewOneComponent;
  let fixture: ComponentFixture<ReviewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
