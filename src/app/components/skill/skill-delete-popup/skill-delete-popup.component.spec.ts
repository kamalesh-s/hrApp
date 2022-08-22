import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDeletePopupComponent } from './skill-delete-popup.component';

describe('SkillDeletePopupComponent', () => {
  let component: SkillDeletePopupComponent;
  let fixture: ComponentFixture<SkillDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDeletePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
