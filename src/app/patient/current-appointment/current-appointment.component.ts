import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-appointment.component.html',
})
export class CurrentAppointmentComponent {
  currentAppointment = {
    doctorName: 'Dr. Aisha Khan',
    department: 'Cardiology',
    date: '2025-04-15',
    time: '10:30 AM',
    status: 'approved' // or 'pending'
  };
}

