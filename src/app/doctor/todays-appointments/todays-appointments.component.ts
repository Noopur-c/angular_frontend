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
      patientName: 'Rohit Sharma',
      time: '9:00 AM',
      problem: 'Back pain',
    },
    {
      id: 102,
      patientName: 'Priya Verma',
      time: '10:30 AM',
      problem: 'Migraine',
    },
    {
      id: 103,
      patientName: 'Aman Singh',
      time: '12:00 PM',
      problem: 'Fatigue',
    },
  ];
}
