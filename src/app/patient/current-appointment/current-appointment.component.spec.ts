import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAppointmentComponent } from './current-appointment.component';

describe('CurrentAppointmentComponent', () => {
  let component: CurrentAppointmentComponent;
  let fixture: ComponentFixture<CurrentAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
