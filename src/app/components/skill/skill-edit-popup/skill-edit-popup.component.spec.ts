import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEditPopupComponent } from './skill-edit-popup.component';

describe('SkillEditPopupComponent', () => {
  let component: SkillEditPopupComponent;
  let fixture: ComponentFixture<SkillEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillEditPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
