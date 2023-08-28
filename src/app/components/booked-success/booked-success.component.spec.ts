import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedSuccessComponent } from './booked-success.component';

describe('BookedSuccessComponent', () => {
  let component: BookedSuccessComponent;
  let fixture: ComponentFixture<BookedSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
