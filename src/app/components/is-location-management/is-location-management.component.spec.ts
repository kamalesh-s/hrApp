import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsLocationManagementComponent } from './is-location-management.component';

describe('IsLocationManagementComponent', () => {
  let component: IsLocationManagementComponent;
  let fixture: ComponentFixture<IsLocationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsLocationManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsLocationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
