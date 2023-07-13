import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConferenceComponent } from './manage-conference.component';

describe('ManageConferenceComponent', () => {
  let component: ManageConferenceComponent;
  let fixture: ComponentFixture<ManageConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageConferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
