import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookaroomComponent } from './bookaroom.component';

describe('BookaroomComponent', () => {
  let component: BookaroomComponent;
  let fixture: ComponentFixture<BookaroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookaroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookaroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
