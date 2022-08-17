import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtvlUsersComponent } from './ltvl-employee.component';

describe('LtvlUsersComponent', () => {
  let component: LtvlUsersComponent;
  let fixture: ComponentFixture<LtvlUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtvlUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtvlUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
