import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todays-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todays-appointments.component.html',
})
export class TodaysAppointmentsComponent {
  todaysAppointments = [
    {
      id: 101,
      patientName: 'Patient 3',
      time: '9:00 AM',
      problem: 'Back pain',
    },
    {
      id: 102,
      patientName: 'Patient 2',
      time: '10:30 AM',
      problem: 'Migraine',
    },
    {
      id: 103,
      patientName: 'Patient 4',
      time: '12:00 PM',
      problem: 'Fatigue',
    },
  ];
}
