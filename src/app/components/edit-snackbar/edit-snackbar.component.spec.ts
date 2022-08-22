import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSnackbarComponent } from './edit-snackbar.component';

describe('EditSnackbarComponent', () => {
  let component: EditSnackbarComponent;
  let fixture: ComponentFixture<EditSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
